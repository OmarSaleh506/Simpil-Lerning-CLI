import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../../..';
import chalk from 'chalk';
export let cours_id: any = '';
export async function searchCourse() {
	const { text } = await prompt([
		{
			type: 'input',
			name: 'text',
			message: chalk.gray('Enter name the course to search '),
		},
	]);
	const { data: course } = await axios.get(baseUrl + '/courses/course', {
		params: { text },
	});
	// if (text !== undefined) {
	// 	console.log('course not found');
	// 	await searchCourse();
	// }
	const formattedCourse = course.map((c: any, index: number) => index + '-' + c.name);

	const { index } = await prompt({
		type: 'list',
		name: 'index',
		message: chalk.green('Choose Course'),
		choices: formattedCourse,
		filter: (val) => +val[0],
	});
	cours_id = course[index].cours_id;
	console.log();
}
