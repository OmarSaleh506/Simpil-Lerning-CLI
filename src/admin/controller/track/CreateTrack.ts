import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';
import chalk from 'chalk';
export async function CreateTrack() {
	const { name, description } = await prompt([
		{
			type: 'input',
			name: 'name',
			message: chalk.gray('Enter name of Track'),
		},
		{
			type: 'input',
			name: 'description',
			message: chalk.gray('Enter Description of Track'),
		},
	]);
	console.log();

	const { data: Track } = await axios.post(
		baseUrl + '/tracks/track',
		{ name, description },
		{
			headers: {
				authorization: 'Bearer ' + globalData.token,
			},
		}
	);
	console.log(chalk.greenBright`Track added ✅`);
	console.log();
}
