import { prompt } from 'inquirer';
import { CreateProject } from '../controller/project/CreateProject';
import { deleteProject } from '../controller/project/DeleteProject';
import { UpdateProject } from '../controller/project/UpdateProject';
import { question2 } from '../questions/q2edu-mat';
import chalk from 'chalk';
import { getProject } from '../../Student/controller/Project/getAllProject';
import { searchProject } from '../../Student/controller/Project/getProjectByName';

export async function Project() {
	const { choices3 } = await prompt({
		type: 'list',
		name: 'choices3',
		message: chalk.red('Select the procedure you like'),
		choices: [
			'1- Create Project',
			'2- Update Project',
			'3- Get All Project',
			'4- Get Project By Name',
			'5- Delete Project',
			'6- Return to the list',
		],
		filter: (val) => +val[0],
	});
	console.log();
	switch (choices3) {
		case 1:
			await CreateProject();
			await Project();
		case 2:
			await UpdateProject();
			await Project();

		case 3:
			await getProject();
			await Project();

		case 4:
			await searchProject();
			await Project();

		case 5:
			deleteProject();
			await Project();

		case 6:
			return question2();
	}
}
