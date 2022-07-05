import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';
import chalk from 'chalk';

export async function UpdateCourse() {
	const { data: courses } = await axios.get(baseUrl + '/courses/courses');
	const formattedCourse = courses.map((c: any) => ({ name: c.name, description: c.description, lessons: c.lessons }));
	const arrayOfCourse = await prompt({
		type: 'list',
		name: chalk.green('Choose Course'),
		choices: formattedCourse,
	});
	console.log();
	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: chalk.gray('To update, enter the course number'),
		filter: (val) => +val,
	});
	console.log();
	const course = courses[index];

	const newCourse = await prompt([
		{
			type: 'input',
			name: 'name',
			message: chalk.gray(`Enter new name or press enter to keep it as (${course.name})`),
			filter: (val) => {
				if (val.trim() === '') return course.name;
				return val;
			},
		},
		console.log(),
		{
			type: 'input',
			name: 'description',
			message: chalk.gray(`Enter new description or press enter to keep it as (${course.description})`),
			filter: (val) => {
				if (val.trim() === '') return course.description;
				return val;
			},
		},
		console.log(),
		{
			type: 'input',
			name: 'lessons',
			message: chalk.gray(`Enter new lesson or press enter to keep it as (${course.lessons})`),
			filter: (val) => {
				if (val.trim() === '') return course.lessons;
				return val;
			},
		},
	]);
	console.log();
	await axios.patch(baseUrl + `/courses/cours/${course.cours_id}`, newCourse, {
		headers: {
			authorization: 'Bearer ' + globalData.token,
		},
	});

	console.log(chalk.greenBright`Course for ${newCourse.name}, has been updated ✅`);
	console.log();
}
