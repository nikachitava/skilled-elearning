import "./Welcome.css";
import welcome_photo from "../../../public/images/welcome_photo.svg";
import GetStartedButton from "../../components/GetStartedButton/GetStartedButton";

export const Welcome = () => {
	return (
		<section className="welcome_section container">
			<div>
				<h1>Maximize skill, minimize budget</h1>
				<p>
					Our modern courses across a range of in-demand skills will
					give you the knowledge you need to live the life you want.
				</p>
				<GetStartedButton
					background={false}
					gradient={true}
					gradientColor="linear-gradient(#4851FF, #F02AA6)"
					textColor={"white"}
				/>
			</div>
			<img src={welcome_photo} alt="welcome_photo" />
		</section>
	);
};
