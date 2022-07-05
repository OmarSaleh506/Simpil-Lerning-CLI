import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';
import chalk from 'chalk';

export async function deleteCourse() {
	const { data: courses } = await axios.get(baseUrl + '/courses/courses');
	const formattedCourse = courses.map((c: any) => ({ name: c.name }));
	const arrayOfCourse = await prompt({
		type: 'list',
		name: chalk.green('Choose Course'),
		choices: formattedCourse,
	});
	console.log();
	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: chalk.red('To delete, enter the course number '),
		filter: (val) => +val,
	});
	console.log();
	const course = courses[index];
	await axios.delete(baseUrl + `/courses/cours/${course.cours_id}`, {
		headers: { authorization: 'Bearer ' + globalData.token },
	});

	console.log(chalk.greenBright`Course for ${course.name} has been deleted ✅`);
}
