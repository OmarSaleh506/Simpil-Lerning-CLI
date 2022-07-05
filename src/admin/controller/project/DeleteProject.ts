import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';

export async function deleteProject() {
	const { data: projects } = await axios.get(baseUrl + '/projects/projects');
	const formattedProject = projects.map((c: any) => ({ name: c.name }));
	const arrayOfProject = await prompt({
		type: 'list',
		name: 'Choose Project',
		choices: formattedProject,
	});
	console.log();
	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'To delete, enter the Project number ',
		filter: (val) => +val,
	});
	const project = projects[index];
	await axios.delete(baseUrl + `/projects/project/${project.project_id}`, {
		headers: {
			authorization: 'Bearer ' + globalData.token,
		},
	});
	console.log(`Project for ${project.name} has been deleted ✅`);
}
