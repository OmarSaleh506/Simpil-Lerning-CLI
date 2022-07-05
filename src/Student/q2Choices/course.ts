import { prompt } from 'inquirer';
import { getCourse } from '../controller/Course/getAllCourse';
import { searchCourse } from '../controller/Course/getCourseByName';
import { q2 } from '../questions/q2edu-mat';
import { q3 } from '../questions/q3access';
import { answer } from '../answer/answer';
import chalk from 'chalk';
export async function course() {
	const { choices1 } = await prompt({
		type: 'list',
		name: 'choices1',
		message: chalk.green('Pick a search method for the course'),
		choices: ['1- View courses ', '2- Search for a specific course', '3- Return to the list'],
		filter: (val) => +val[0],
	});
	console.log();
	switch (choices1) {
		case 1:
			await getCourse();

			await q3();

			await answer();

			break;

		case 2:
			await searchCourse();

			await q3();

			await answer();

			break;

		case 3:
			return q2();
	}
}
