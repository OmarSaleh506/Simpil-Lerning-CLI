import { prompt } from 'inquirer';
import { question2 } from '../questions/q2edu-mat';
import chalk from 'chalk';
import { getTrack } from '../../Student/controller/Track/view-track';
import { searchTrack } from '../../Student/controller/Track/search-track';
import { CreateTrack } from '../controller/track/CreateTrack';
import { UpdateTrack } from '../controller/track/UpdateTrack';
import { deleteTrack } from '../controller/track/DeleteTrack';

console.log();
export async function Track() {
	const { choices2 } = await prompt({
		type: 'list',
		name: 'choices2',
		message: chalk.green('Select the procedure you like'),
		choices: [
			'1- Create Track',
			'2- Update Track',
			'3- Get All Track',
			'4- Get Track By Name',
			'5- Delete Track',
			'6- Return to the list',
		],
		filter: (val) => +val[0],
	});
	console.log();
	switch (choices2) {
		case 1:
			await CreateTrack();
			await Track();
		case 2:
			await UpdateTrack();
			await Track();
		case 3:
			await getTrack();
			await Track();

		case 4:
			await searchTrack();
			await Track();
		case 5:
			await deleteTrack();
			await Track();
		case 6:
			return question2();
	}
}
