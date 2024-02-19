interface IGetStartedButtonProps {
	background: boolean;
	backgroundColor?: string;
	gradient: boolean;
	gradientStartColor?: string;
	gradientFinishColor?: string;
	textColor: string;
}

const GetStartedButton: React.FC<IGetStartedButtonProps> = ({
	background,
	backgroundColor,
	gradient,
	gradientStartColor,
	gradientFinishColor,
	textColor,
}) => {
	const buttonStyle: React.CSSProperties = {
		textDecoration: "none",
		backgroundColor: background ? backgroundColor : "",
		backgroundImage: gradient
			? `linear-gradient(${gradientStartColor}, ${gradientFinishColor})`
			: "",
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
