
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

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Events from './components/pages/events';
import AnnualReport from './components/pages/annual';
import Teams from './components/pages/team';
import Blogs from './components/pages/blogs';
import SignUp from './components/pages/signup';
import { Menu } from './components/Menu';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import {LikeDeslike} from './components/LikeDeslike'
import { CaixaComentarios } from './components/CaixaComentarios'
import {id,secret} from './varAmbiente'
import { CorpoPaginaPostagem } from './components/ComponentsReact/PostagemPage/BodyPostagem';
import { PaginaAnimal } from './components/PaginaAnimal';
import { PaginaPessoa } from './components/PaginaPessoa';
import { CorpoPaginaAdicionarAnimal } from './components/ComponentsReact/PaginaAnimal/PaginaAdicionarAnimal';
import { FormLogin } from './components/ComponentsReact/PaginaLogin/Login';
import { ModalLogin } from './components/ComponentsReact/PaginaLogin/Modal';

const jwt = require('jsonwebtoken');
const token = jwt.sign({ sub: id }, secret);

function App() {
	
return (
	<Body>
	<Router>
	<Menu />
	<Switch>

  // Luiz - to com sono dms pra ler oq isso aqui embaixo faz ent só comentei pra nao dar conflito
// 		<Route path='/' exact component={Home} />    
// 		<Route path='/teste' component={About}>
// 		</Route>
// 		<Route path='/cardsAnimal' component={Events}>
// 			{(!localStorage.getItem("token"))?localStorage.setItem("token",token):null}

    // parte q tinha sido apagada
		<Route path='/' exact>
			
		</Route>    
		<Route path='/postagens'>
			<CorpoPaginaPostagem/>

		</Route>			
		<Route path='/perfil'>
			<PaginaAnimal/>
		</Route>		
		<Route path='/animais' component={Events}>
			<CorpoPaginaAdicionarAnimal/>
      // fim da parte q foi apagada
  
		</Route>
		<Route path='/perfil' component={Events}>
            <PaginaAnimal/>
        </Route>
		<Route path='/editar-perfil' component={Events}>
            <PaginaPessoa/>
        </Route>	
		<Route path='/login' component={Events}>
            <ModalLogin/>
        </Route>	
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} />
		{/* <Route path="*" component={NotFound} />                                             */}

	</Switch>
	</Router>
	<Footer />
	</Body>
  
);
}

export default App;


  


