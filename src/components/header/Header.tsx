import "./Header.css";
import logo from "../../../public/images/logo.svg";

export const Header = () => {
	return (
		<header>
			<nav className="container">
				<img src={logo} alt="logo" />
				<a href="#">Get Started</a>
			</nav>
		</header>
	);
};
