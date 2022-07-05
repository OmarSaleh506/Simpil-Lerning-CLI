import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../../..';
import chalk from 'chalk';
export let track_id: any = '';

export async function searchTrack() {
	const { text } = await prompt([
		{
			type: 'input',
			name: 'text',
			message: chalk.gray('Enter name the track to search'),
		},
	]);

	const { data: tracks } = await axios.get(baseUrl + '/tracks/track', {
		params: { text },
	});
	// if (text !== undefined) {
	// 	console.log('track not found');
	// 	await searchTrack();
	// }
	const formattedTrack = tracks.map((c: any, index: number) => index + '-' + c.name);

	const { index } = await prompt({
		type: 'list',
		name: 'index',
		message: chalk.green('Choose Track'),
		choices: formattedTrack,
	});
	track_id = tracks[index].track_id;
	console.log();
}
