
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Body } from './components/Body';
import { Footer } from './components/Footer';
import { id, secret } from './varAmbiente'
import { CorpoPaginaPostagem } from './components/ComponentsReact/PostagemPage/BodyPostagem';
import { PaginaPessoa } from './components/PaginaPessoa';
import { CorpoPaginaAdicionarAnimal } from './components/ComponentsReact/PaginaAnimal/PaginaAdicionarAnimal';
import { ModalLogin } from './components/ComponentsReact/PaginaLogin/Modal';
import { Postagens } from './components/ComponentsReact/PostagemPaginaAtualizada/CorpoPágina/Postagens';
import { PaginaAnimal } from './components/ComponentsReact/PaginaPerfilAnimal/Perfil';
import { FormCadastro } from './components/ComponentsReact/FormCadastro';
import { FormLogin } from './components/ComponentsReact/PaginaLogin/Login';
import { PaginaPerfil } from './components/ComponentsReact/PaginaPerfilPessoa/Perfil';
import { HomeAnimal } from './components/ComponentsReact/Home/Home';
import About from './components/pages/about';
// import {Conteiner} from './components/CaixaComentarios/Conteiner'
import { CaixaComentarios } from './components/CaixaComentarios';
import { FiltragemHome } from './components/ComponentsReact/Home/Tabela';



import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Login } from './components/LoginRegister/Login';
import { SignUp } from './components/LoginRegister/Register';
import { TestePerfilUsuario } from './components/TestePerfilUsuario';



// export function Logbox() {
//   return (<Router>
//     <div className="App">
//       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//         <div className="container">
//           <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//             <ul className="navbar-nav ml-auto">
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-in"}>Login</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>

//       <div className="auth-wrapper">
//         <div className="auth-inner">
//           <Switch>
//             <Route exact path='/' component={Login} />
//             <Route path="/sign-in" component={Login} />
//             <Route path="/sign-up" component={SignUp} />
//           </Switch>
//         </div>
//       </div>
//     </div></Router>
//   );
// }



const jwt = require('jsonwebtoken');
const token = jwt.sign({ sub: id }, secret);

function logoff() {
	localStorage.clear()
	window.location.replace("/login")
}

function App() {
	return (
		<Body>
			<Router>
				<Menu />
				<Switch>
				<Route path='/teste' component={About}>
 				</Route>
					<Route path='/' exact>
					<FiltragemHome/>
						{/* <MediaCard/> */}
					</Route>
					<Route path='/login'>
						<FormLogin />
					</Route>
					<Route path='/cadastro'>
						<SignUp />
					</Route>
					<Route path='/perfil-usuario/:id'>
						<PaginaPerfil />
					</Route>
					<Route path='/postagens'>
						<CorpoPaginaPostagem />
					</Route>
					<Route path='/perfil/:id' >
						<PaginaAnimal />
					</Route>
					<Route path='/animais'>
						<CorpoPaginaAdicionarAnimal />
					</Route>
					<Route path='/editar-perfil'>
						<TestePerfilUsuario />
					</Route>
					<Route path='/annual'>
						<Postagens />
					</Route>
					<Route path='/logoff' component={logoff}>
					</Route>
					{/* <Route path="*" component={NotFound} />*/}
				</Switch>
			</Router>
			<Footer />
		</Body>
	);
}

export default App;





