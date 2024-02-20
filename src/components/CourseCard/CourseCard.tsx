import { ICourseCardProps } from "../../interfaces/ICourseCardsProps";
import GetStartedButton from "../GetStartedButton/GetStartedButton";
import "./CourseCard.css";

export const CourseCard: React.FC<ICourseCardProps> = ({
	icon,
	title,
	subTitle,
}) => {
	return (
		<div className="course_card">
			<div>{icon}</div>

			<h2>{title}</h2>
			<p>{subTitle}</p>
			<GetStartedButton
				background={false}
				gradient={false}
				textColor={"#F74780"}
			/>
		</div>
	);
};
