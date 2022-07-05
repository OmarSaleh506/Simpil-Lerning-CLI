import { prompt } from 'inquirer';
import { course } from '../q2Choices/course';
import { track } from '../q2Choices/track';
import { project } from '../q2Choices/project';
import chalk from 'chalk';

export async function q2() {
	const { q2answer } = await prompt({
		type: 'list',
		name: 'q2answer',
		message: chalk.green('Education Material.'),
		choices: ['1- Course ', '2- Track', '3- Project '],
		filter: (val) => +val[0],
	});
	console.log();

	switch (q2answer) {
		case 1:
			await course();
			break;
		case 2:
			await track();
			break;
		case 3:
			await project();
			break;
	}
}
