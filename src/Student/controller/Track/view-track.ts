import { prompt } from 'inquirer';
import axios from 'axios';
import { baseUrl } from '../../..';
import chalk from 'chalk';
export let track_id: any = '';

export async function getTrack() {
	const { data: tracks } = await axios.get(baseUrl + '/tracks/tracks');
	const formattedTrack = tracks.map((c: any, index: number) => index + '-' + c.name);

	const { index } = await prompt({
		type: 'list',
		name: 'index',
		message: chalk.green('Available Track'),
		choices: formattedTrack,
		filter: (val) => +val[0],
	});
	track_id = tracks[index].track_id;
	console.log();
}
