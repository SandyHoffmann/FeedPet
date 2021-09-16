
import './App.css';

// import { MdThumbDown,MdThumbUp } from 'react-icons/md';

// function App() {
//   return (
//     <>
//     <button type="submit">
//       Like
//       <MdThumbUp
//         size={30}
//         color="#"
//       />
//     </button>
//     <button type="submit">
//     Deslike
//       <MdThumbDown
//         size={30}
//         color="#"
//       />
//     </button>
//     </>
//   );

import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Events from './components/pages/events';
import AnnualReport from './components/pages/annual';
import Teams from './components/pages/team';
import Blogs from './components/pages/blogs';
import SignUp from './components/pages/signup';
import { CardTeste } from './components/Card';
import { CardTeste2 } from './components/Card2';
import { Menu } from './components/Menu';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import {LikeDeslike} from './components/LikeDeslike'
import { Cardhome, Cardhometeste } from './components/ComponentsReact/CardsHome';
import {id,secret} from './varAmbiente'
import { PaginaAnimal } from './components/PaginaAnimal';

const jwt = require('jsonwebtoken');
const token = jwt.sign({ sub: id }, secret);

function App() {
	
return (
	<>
	
	<Body>
	<Menu />
	<Router>
	<Switch>
		<Route path='/' exact component={Home} />    
		<Route path='/teste' component={About}>
			<PaginaAnimal/>
			<CardTeste/>
			<CardTeste2/>
		</Route>
		<Route path='/cardsAnimal' component={Events}>
			{(!localStorage.getItem("token"))?localStorage.setItem("token",token):null}
			<Cardhometeste></Cardhometeste>
		</Route>
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>
	<CardTeste/>
	<CardTeste2/>
	<Footer />
	</Body>
  
<LikeDeslike/>
	</>
);
}

export default App;


  


