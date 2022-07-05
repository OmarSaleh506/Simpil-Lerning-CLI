import { prompt } from 'inquirer';
import { question2 } from '../questions/q2edu-mat';
import chalk from 'chalk';
import { getCourse } from '../../Student/controller/Course/getAllCourse';
import { searchCourse } from '../../Student/controller/Course/getCourseByName';
import { CreateCourse } from '../controller/course/CreateCourse';
import { UpdateCourse } from '../controller/course/UpdateCourse';
import { deleteCourse } from '../controller/course/DeleteCours';

export async function course() {
	const { choices1 } = await prompt({
		type: 'list',
		name: 'choices1',
		message: chalk.green('Select the procedure you like'),
		choices: [
			'1- Create Course',
			'2- Update Course',
			'3- Get All Course',
			'4- Get Course By Name',
			'5- Delete Course',
			'6- Return to the list',
		],

		filter: (val) => +val[0],
	});
	console.log();
	switch (choices1) {
		case 1:
			await CreateCourse();
			await course();
		case 2:
			await UpdateCourse();
			await course();
		case 3:
			await getCourse();
			await course();
		case 4:
			await searchCourse();
			await course();
		case 5:
			await deleteCourse();
			await course();
		case 6:
			return question2();
	}
}
