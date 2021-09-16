import React from 'react';

import { Box } from '../Box';
import MediaCard from '../Card/Card';
import { Example } from '../carrosel/carrosel';
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
				justifyContent: 'left',
				marginLeft: '-29%',
				marginTop: '40px',
				marginBottom: '60px'
				
			}}
		>
			<Box />
		</div>
		
		<div
		style={{
			display: 'flex',
			justifyContent: 'left',
			marginLeft: '8%'
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
				justifyContent: 'space-around',
				flexWrap: 'scroll'	
				
			}}
			>
			<MediaCard />
			<MediaCard />
			<MediaCard />
			<MediaCard />
			
			</div>
			<Example />
		</div>
	);
};

export default About;
