import { q2 } from './Student/questions/q2edu-mat';
import { question1 } from './admin/questions/q1admin-user';
import chalk from 'chalk';

export const baseUrl = 'http://0.0.0.0:3002';

export const globalData: any = {
	token: '',
};
async function start() {
	console.log();
	console.log(chalk.blue(' Welcome to Simple_Learning '));
	console.log();
	await question1();
	await q2();
}

start();
