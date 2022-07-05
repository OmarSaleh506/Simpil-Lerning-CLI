import { prompt } from 'inquirer';
import chalk from 'chalk';
export async function answer() {
	const { answer1 } = await prompt({
		type: 'list',
		name: 'answer1',
		message: chalk.green('Select the most effective learning method for you'),
		choices: ['1- watching lessons to learn', '2- Read lessons to learn'],
		filter: (val) => +val[0],
	});

	switch (answer1) {
		case 1:
			console.log();
			console.log(chalk.redBright('To view the video, visit this page : '));
			console.log();
			console.log(chalk.bgBlueBright(`https://omarsaleh506.github.io/video-page/`));
			console.log();
			break;

		case 2:
			console.log();
			console.log(chalk.redBright(` This is a good Article `));
			console.log();
			console.log(
				chalk.bgBlueBright`https://careerfoundry.com/en/blog/web-development/should-you-learn-javascript/`
			);
			break;
	}
}
