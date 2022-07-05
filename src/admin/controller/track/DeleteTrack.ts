import axios from 'axios';
import { prompt } from 'inquirer';
import { baseUrl, globalData } from '../../..';

export async function deleteTrack() {
	const { data: tracks } = await axios.get(baseUrl + '/tracks/tracks');
	const formattedTrack = tracks.map((c: any) => ({ name: c.name }));
	const arrayOfTrack = await prompt({
		type: 'list',
		name: 'Choose Track',
		choices: formattedTrack,
	});

	const { index } = await prompt({
		type: 'number',
		name: 'index',
		message: 'To delete, enter the Track number ',
		filter: (val) => +val,
	});
	const track = tracks[index];
	await axios.delete(baseUrl + `/tracks/track/${track.track_id}`,
	{
		headers: {
			authorization: 'Bearer ' + globalData.token,
		},
	});
	console.log(`Track for ${track.name} has been deleted ✅`);
}
