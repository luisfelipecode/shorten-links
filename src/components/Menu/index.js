import { BsYoutube, BsInstagram, BsTelegram } from 'react-icons/bs';
import { Link } from 'react-router-dom';

import './menu.css';

export default function Menu() {
	return (
		<div className="menu">
			<a className="social" href="https://www.youtube.com/c/Sujeitoprogramador">
				<BsYoutube color="#fff" size={24} />
			</a>
			<a
				className="social"
				href="https://www.instagram.com/luisfelype02/?hl=pt-br"
			>
				<BsInstagram color="#fff" size={24} />
			</a>
			<a
				className="social"
				href="https://www.instagram.com/luisfelype02/?hl=pt-br"
			>
				<BsTelegram color="#fff" size={24} />
			</a>
			<Link className="menu-item" to="links">
				Meus links
			</Link>
		</div>
	);
}
