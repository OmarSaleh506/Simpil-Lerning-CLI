import { prompt } from 'inquirer';
import { getTrack } from '../controller/Track/view-track';
import { q3 } from '../questions/q3access';
import { answer } from '../answer/answer';
import { q2 } from '../questions/q2edu-mat';
import chalk from 'chalk';
import { searchTrack } from '../controller/Track/search-track';
export async function track() {
	const { choices2 } = await prompt({
		type: 'list',
		name: 'choices2',
		message: chalk.green('Pick a search method for the tracks'),
		choices: ['1- View Track', '2- Search for a specific track', '3- Return to the list'],
		filter: (val) => +val[0],
	});
	console.log();
	switch (choices2) {
		case 1:
			await getTrack();
			await q3();
			await answer();
			break;

		case 2:
			await searchTrack();
			await q3();
			await answer();
			break;

		case 3:
			return q2();
	}
}
