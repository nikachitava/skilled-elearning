import "./Header.css";
import logo from "../../../public/images/logo.svg";
import GetStartedButton from "../GetStartedButton/GetStartedButton";

export const Header = () => {
	return (
		<header>
			<nav className="container">
				<img src={logo} alt="logo" />
				<GetStartedButton
					background={true}
					backgroundColor={"#13183F"}
					textColor={"white"}
				/>
			</nav>
		</header>
	);
};
