import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';
import chalk from 'chalk';
export async function CreateCourse() {
	const { name, description, lessons } = await prompt([
		{
			type: 'input',
			name: 'name',
			message: chalk.gray('Enter name of Course'),
		},
		{
			type: 'input',
			name: 'description',
			message: chalk.gray('Enter Description of Course'),
		},
		{
			type: 'input',
			name: 'lessons',
			message: chalk.gray('Enter lesson of Course'),
		},
	]);
	console.log();
	const { data: cours } = await axios.post(
		baseUrl + '/courses/cours',
		{ name, description, lessons },
		{ headers: { authorization: 'Bearer ' + globalData.token } }
	);
	console.log(`Course added ✅`);
}
