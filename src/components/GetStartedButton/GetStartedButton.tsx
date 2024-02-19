interface IGetStartedButtonProps {
	background: boolean;
	backgroundColor?: string;
	gradient: boolean;
	gradientColor?: string;
	textColor: string;
}

const GetStartedButton: React.FC<IGetStartedButtonProps> = ({
	background,
	backgroundColor,
	gradient,
	gradientColor,
	textColor,
}) => {
	const buttonStyle: React.CSSProperties = {
		textDecoration: "none",
		backgroundColor: background ? backgroundColor : "",
		backgroundImage: gradient ? gradientColor : "",
		color: textColor,
		fontWeight: "bold",
		padding: gradient || background ? "9px 24px" : "0",
		borderRadius: "28px",
		display: "inline-block",
	};
	return (
		<a href="#" style={buttonStyle}>
			Get Started
		</a>
	);
};

export default GetStartedButton;
