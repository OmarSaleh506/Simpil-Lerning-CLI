import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../../..';
import chalk from 'chalk';
export let cours_id: any = '';

export async function getCourse() {
	const { data: course } = await axios.get(baseUrl + '/courses/courses');

	const formattedCourse = course.map((c: any, index: number) => index + '-' + c.name);

	const { index } = await prompt({
		type: 'list',
		name: 'index',
		message: chalk.green('Available Course'),
		choices: formattedCourse,
		filter: (val) => +val[0],
	});
	cours_id = course[index].cours_id;
	console.log();
}
