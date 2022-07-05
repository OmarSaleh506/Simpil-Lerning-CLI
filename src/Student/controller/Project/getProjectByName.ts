import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../../..';
import chalk from 'chalk';
export let project_id1: any = '';
export async function searchProject() {
	const { text } = await prompt([
		{
			type: 'input',
			name: 'text',
			message: chalk.gray('Enter name the project to search'),
		},
	]);

	const { data: projects } = await axios.get(baseUrl + '/projects/projects', {
		params: { text },
	});
	// if (text !== undefined) {
	// 	console.log('project not found');
	// 	await searchProject();
	// }
	const formattedProject = projects.map((c: any, index: number) => index + '-' + c.name);

	const { index } = await prompt({
		type: 'list',
		name: 'index',
		message: chalk.green('Choose Project'),
		choices: formattedProject,
	});
	project_id1 = projects[index].project_id;
	console.log();
}
