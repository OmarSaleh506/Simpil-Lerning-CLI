import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';
import chalk from 'chalk';
export async function UpdateProject() {
	const { data: projects } = await axios.get(baseUrl + '/projects/projects');
	const formattedProject = projects.map((c: any) => ({
		name: c.name,
		description: c.description,
		lessons: c.lessons,
	}));
	const arrayOfProjects = await prompt({
		type: 'list',
		name: chalk.green('Choose Project'),
		choices: formattedProject,
	});
	console.log();
	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: chalk.gray('To update, enter the project number'),
		filter: (val) => +val,
	});
	console.log();
	const project = projects[index];

	const newProject = await prompt([
		{
			type: 'input',
			name: 'name',
			message: `Enter new name or press enter to keep it as (${project.name})`,
			filter: (val) => {
				if (val.trim() === '') return project.name;
				return val;
			},
		},
		{
			type: 'input',
			name: 'description',
			message: `Enter new description or press enter to keep it as (${project.description})`,
			filter: (val) => {
				if (val.trim() === '') return project.description;
				return val;
			},
		},
	]);

	await axios.patch(baseUrl + `/projects/project/${project.project_id}`, newProject, {
		headers: {
			authorization: 'Bearer ' + globalData.token,
		},
	});

	console.log(chalk.greenBright`Project for ${newProject.name}, has been updated ✅`);
}
