import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../..';
import chalk from 'chalk';
export async function Login_admin() {
	const { email, password, role } = await prompt([
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
		{
			type: 'input',
			name: 'role',
			message: chalk.gray('Enter your role'),
		},
	]);
	console.log();
	try {
		const user = await axios.post(baseUrl + '/users/login', { email, password });

		if (!user.data.token) {
			console.log(chalk.red('email  incorrect'));
		}
		console.log();
		// await Login_admin();

		console.log();
		const newToken = user.data.token;
		globalData.token = newToken;
	} catch (error: any) {
		console.log(chalk.red(' password incorrect'));
		//console.log(error?.response?.data);
		console.log();
		await Login_admin();
	}
}
