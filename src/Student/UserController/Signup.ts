import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl } from '../..';
import chalk from 'chalk';
import { cours_id } from '../controller/Course/getAllCourse';
import { project_id } from '../controller/Project/getAllProject';
import { track_id } from '../controller/Track/view-track';
export async function SignUp() {
	const { name, email, password } = await prompt([
		{
			type: 'input',
			name: 'name',
			message: chalk.gray('Enter your name'),
		},
		{
			type: 'input',
			name: 'email',
			message: chalk.gray('Enter your email'),
		},
		{
			type: 'input',
			name: 'password',
			message: chalk.gray('Enter your password'),
		},
	]);

	const { data: user } = await axios.post(baseUrl + '/users/SignUp', { name, email, password });

	if (cours_id) {
		const { data: connecter } = await axios.put(baseUrl + '/courses/courses', {
			user_id: user.user_id,
			cours_id: cours_id,
		});
		console.log(chalk.yellow`welcome ${user.name}`);
	} else if (project_id) {
		const { data: connecter } = await axios.put(baseUrl + '/projects/projects', {
			user_id: user.user_id,
			project_id: project_id,
		});
		console.log(chalk.yellow`welcome ${user.name}`);
	} else if (track_id) {
		const { data: connecter } = await axios.put(baseUrl + '/tracks/tracks', {
			user_id: user.user_id,
			track_id: track_id,
		});
		console.log(chalk.yellow`welcome ${user.name}`);
	}
}
