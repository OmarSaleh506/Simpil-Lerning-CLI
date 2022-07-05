import { prompt } from 'inquirer';
import { Login } from '../UserController/Login';
import { SignUp } from '../UserController/Signup';
import chalk from 'chalk';

export async function q3() {
	const { q3answer } = await prompt({
		type: 'list',
		name: 'q3answer',
		message: chalk.red('To access the next section, sign up or log in'),
		choices: ['1- Log in', '2- Sign up', '3- Leave'],
		filter: (val) => +val[0],
	});
	console.log();
	switch (q3answer) {
		case 1:
			await Login();
			break;

		case 2:
			await SignUp();
			break;

		case 3:
			console.log();
			console.log(chalk.bgYellowBright('bokra tndm y gmeeel'));
			console.log();
			process.exit();
	}
}
