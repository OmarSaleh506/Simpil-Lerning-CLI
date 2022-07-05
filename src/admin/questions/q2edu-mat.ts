import { prompt } from 'inquirer';
import { course } from '../choices/course';
import { Track } from '../choices/track';
import { Project } from '../choices/project';
import chalk from 'chalk';

export async function question2() {
	const { question2 } = await prompt({
		type: 'list',
		name: 'question2',
		message: chalk.red('Select what you need ?'),
		choices: ['1- Course', '2- Tracks', '3- Projects'],
		filter: (val) => +val[0],
	});
	console.log();
	switch (question2) {
		case 1:
			await course();
			break;

		case 2:
			await Track();
			break;

		case 3:
			await Project();
			break;
	}
}
