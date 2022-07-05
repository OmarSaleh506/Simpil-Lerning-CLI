import { prompt } from 'inquirer';
import chalk from 'chalk';
export async function q1() {
	const q1 = await prompt({
		type: 'input',
		name: 'name',
		message: chalk.green('hye there please enter your name'),
		filter: (val) => val.toLowerCase(),
	});
	console.log();
	console.log(chalk.yellow`Welcome ${q1.name}, to Simple Learning`);
	console.log();
}
