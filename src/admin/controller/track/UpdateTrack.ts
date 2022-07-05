import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';
import chalk from 'chalk';
console.log();

export async function UpdateTrack() {
	const { data: tracks } = await axios.get(baseUrl + '/tracks/tracks');
	const formattedTrack = tracks.map((c: any) => ({ name: c.name, description: c.description, lessons: c.lessons }));
	const arrayOfTrack = await prompt({
		type: 'list',
		name: chalk.green('Choose Track'),
		choices: formattedTrack,
	});
	console.log();

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: chalk.gray('To update, enter the Track number'),
		filter: (val) => +val,
	});
	console.log();
	const track = tracks[index];
	console.log();
	const newTrack = await prompt([
		{
			type: 'input',
			name: 'name',
			message: chalk.gray(`Enter new name or press enter to keep it as (${track.name})`),
			filter: (val) => {
				if (val.trim() === '') return track.name;
				return val;
			},
		},
		console.log(),
		{
			type: 'input',
			name: 'description',
			message: chalk.gray(`Enter new description or press enter to keep it as (${track.description})`),
			filter: (val) => {
				if (val.trim() === '') return track.description;
				return val;
			},
		},
	]);
	console.log();
	await axios.patch(baseUrl + `/tracks/track/${track.track_id}`, newTrack, {
		headers: {
			authorization: 'Bearer ' + globalData.token,
		},
	});

	console.log(chalk.greenBright`Track for ${newTrack.name}, has been updated ✅`);
}
