import { prompt } from 'inquirer';
import { q2 } from '../questions/q2edu-mat';
import { q3 } from '../questions/q3access';
import { answer } from '../answer/answer';
import chalk from 'chalk';
import { getProject } from '../controller/Project/getAllProject';
import { searchProject } from '../controller/Project/getProjectByName';
export async function project() {
	const { choices3 } = await prompt({
		type: 'list',
		name: 'choices3',
		message: chalk.green('Pick a search method for the project'),
		choices: ['1- View project', '2- Search for a specific project', '3- Return to the list'],
		filter: (val) => +val[0],
	});
	console.log();
	switch (choices3) {
		case 1:
			await getProject();
			await q3();
			await answer();
			break;

		case 2:
			await searchProject();
			await q3();
			await answer();
			break;

		case 3:
			return q2();
	}
}
