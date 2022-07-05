import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';

export async function CreateProject() {
	const { name, description } = await prompt([
		{
			type: 'input',
			name: 'name',
			message: 'Enter name of Project',
		},
		{
			type: 'input',
			name: 'description',
			message: 'Enter Description of Project',
		},
	]);
	console.log();
	const { data: Project } = await axios.post(
		baseUrl + '/projects/project',
		{ name, description },
		{
			headers: {
				authorization: 'Bearer ' + globalData.token,
			},
		}
	);
	console.log(`Project added ✅`);
}
