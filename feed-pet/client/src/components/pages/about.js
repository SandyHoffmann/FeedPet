import React from 'react';

import { Box } from '../Box';
import MediaCard from '../Card/Card';
import Checkbox from '../CheckBox-Icon/CheckBox';


const About = () => {
	return (
	<div
	style={{
		display: 'flex',
		flexDirection: 'column',

	}}
	
	>
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				marginTop: '40px',
				marginRight: '23%',
				marginBottom: '60px'
				
			}}
		>
			<Box />
		</div>
		
		<div
		style={{
			display: 'flex',
			justifyContent: 'center'
		}}
		>
			<Checkbox />
			<Checkbox />
			<Checkbox />
			<Checkbox />
			
		</div>
		
			<div
			style={{
				marginLeft: '5%',
				marginRight: '5%',
				paddingTop: '60px',
				display: 'flex',
				flexDirection: 'row',
				justifyContent: 'space-evenly'	
				
			}}
			>
				

			<MediaCard />
			<MediaCard />
			<MediaCard />
			<MediaCard />
			</div>
		</div>
	);
};

export default About;
