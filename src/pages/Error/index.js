import './error.css';
import { Link } from 'react-router-dom';

export default function Error() {
	return (
		<div className="container-error">
			<img src="notfound.png" alt="Not Found" />
			<h1>Página nao encontrada</h1>
			<Link to="/">Voltar para a home</Link>
		</div>
	);
}
