import React from 'react';
import { Parallax,  Background } from 'react-parallax';

// import Logbox from '../../App';

import "./about.css";
import foto from "../ComponentsReact/FormCadastro/gatokapa.jpg"

const About = () => {
	return (
		<div class = "equipe">
			<Parallax blur={10} bgImage="path/to/image.jpg" bgImageAlt="the cat" strength={200}
			blur={{ min: -15, max: 15 }}
			bgImage={require(foto)}
			bgImageAlt="the dog"
			strength={-200}>
			
			
        Content goes here. Parallax height grows with content height.
		<div style={{ height: '200px' }} />
    </Parallax>
		</div>
	);
};

export default About;
