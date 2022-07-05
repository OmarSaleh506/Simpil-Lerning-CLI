import axios from 'axios';
import { baseUrl } from '../../..';
import { prompt } from 'inquirer';
import chalk from 'chalk';
export let project_id: any = '';

export async function getProject() {
	const { data: projects } = await axios.get(baseUrl + '/projects/projects');

	const formattedProject = projects.map((c: any, index: number) => index + '-' + c.name);

	const { index } = await prompt({
		type: 'list',
		name: 'index',
		message: chalk.green('Available Project'),
		choices: formattedProject,
		filter: (val) => +val[0],
	});
	project_id = projects[index].project_id;
	console.log();
}
