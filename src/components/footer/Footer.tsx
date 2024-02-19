import "./Footer.css";
import logo_white from "../../../public/images/logo_white.svg";

export const Footer = () => {
	return (
		<footer className="container">
			<img src={logo_white} alt="logo" />
			<a href="#">Get Started</a>
		</footer>
	);
};
