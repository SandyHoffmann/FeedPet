
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
import { HomeAnimal } from './components/ComponentsReact/Home';
import About from './components/pages/about';

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
						{/* <MediaCard/> */}
					</Route>
					<Route path='/login'>
						<FormLogin />
					</Route>
					<Route path='/cadastro'>
						<FormCadastro />
					</Route>
					<Route path='/perfil-usuario'>
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
						<PaginaPessoa />
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





