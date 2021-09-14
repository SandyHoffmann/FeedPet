
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
import { Cardhome, Cardhometeste } from './components/ComponentsReact/CardsHome';


function App() {
return (
	<>
	<Router>
	<Navbar />
	<Switch>
		<Route path='/' exact component={Home} />    
		<Route path='/teste' component={About}>
			<CardTeste/>
			<CardTeste2/>
		</Route>
		<Route path='/cardsAnimal' component={Events}>
			<Cardhometeste></Cardhometeste>
		</Route>
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
	</Switch>
	</Router>

	</>
);
}

export default App;


  


