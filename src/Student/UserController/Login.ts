import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../..';
import chalk from 'chalk';
import { cours_id } from '../controller/Course/getAllCourse';
import { project_id } from '../controller/Project/getAllProject';
import { track_id } from '../controller/Track/view-track';
export async function Login() {
	const { email, password } = await prompt([
		{
			type: 'input',
			name: 'email',
			message: chalk.gray('Enter your email'),
			filter: (val) => val.toLowerCase(),
		},
		{
			type: 'password',
			name: 'password',
			message: chalk.gray('Enter your password'),
		},
	]);
	console.log();
	const { data: user } = await axios.post(baseUrl + '/users/login', { email, password });
	if (email !== user.email) {
		console.log(chalk.red('email or password incorrect'));
		console.log();
		await Login();
	}
	console.log();
	const newToken = user.token;
	globalData.token = newToken;
	console.log(newToken);

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
