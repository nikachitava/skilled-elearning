import GetStartedButton from "../GetStartedButton/GetStartedButton";
import "./Footer.css";
import logo_white from "/images/logo_white.svg";

export const Footer = () => {
	return (
		<footer>
			<div className="container">
				<img src={logo_white} alt="logo" />
				<GetStartedButton
					background={false}
					gradient={true}
					gradientStartColor={"#4851FF"}
					gradientFinishColor={"#F02AA6"}
					backgroundColor={"#13183F"}
					textColor={"white"}
				/>
			</div>
		</footer>
	);
};
