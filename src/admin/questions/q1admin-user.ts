import { prompt } from 'inquirer';
import { q1 } from '../../Student/questions/q1welcome';
import { question2 } from './q2edu-mat';
import chalk from 'chalk';
import { Login_admin } from '../UserController/login';
export async function question1() {
	const { question1 } = await prompt({
		type: 'list',
		name: 'question1',
		message: chalk.red('Are you an admin or a user?'),
		choices: ['1- Admin', '2- User'],
		filter: (val) => +val[0],
	});
	console.log();
	switch (question1) {
		case 1:
			await Login_admin();
			await question2();
			break;

		case 2:
			await q1();
			break;
	}
}
