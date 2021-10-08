import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import equipe from "./equipe.jpg";
import luis1 from "./luis1.png";
import luicas1 from "./luicas1.png";
import charles from "./charles.png";
import sandy1 from "./sandy1.png";
import mich from "./mich.png";

import "./about.css";

const About = () => {
	return (
		<div className="geral">
		<div class="equipe">
			<Parallax pages={5} style={{ top: '0', left: '0', backgroundColor: '#f5ecdc' }}>
				<ParallaxLayer
					offset={0}
					speed={2.5}
					style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<div className="divteste">
						<div className="texto">
							lorem ipsum
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={1} speed={2}  />
				<div>
					<img src={luis1} className="membro"></img>
				</div>

				<ParallaxLayer
					offset={1}
					speed={0.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}>

					<div className="divteste">
						<div className="texto">
							lorem ipsum
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={2} speed={2}  />
				<div>
					<img src={luicas1} className="membro"></img>
				</div>

				<ParallaxLayer
					offset={2}
					speed={0.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}>
							<div className="divteste"> 
						<div className="texto">
							lorem ipsum
						</div>
					</div>

				</ParallaxLayer>

				<ParallaxLayer offset={3} speed={2}  />
				<div>
					
					<img src={charles} className="membro"></img>
				</div>

				<ParallaxLayer
					offset={3}
					speed={0.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}>
						<div className="divteste"> 
						<div className="texto">
							lorem ipsum
						</div>
					</div>
				</ParallaxLayer>

				<ParallaxLayer offset={4} speed={2}  />
				<div>
					<img src={sandy1} className="membro"></img>
				</div>

				<ParallaxLayer
					offset={4}
					speed={0.5}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						color: 'white',
					}}>
						<div className="divteste"> 
						<div className="texto">
							lorem ipsum
						</div>
					</div>
				</ParallaxLayer>

				<div>
					<img src={mich} className="membro"></img>
				</div>

			</Parallax>
		</div>
		</div>
	);
};

export default About;
