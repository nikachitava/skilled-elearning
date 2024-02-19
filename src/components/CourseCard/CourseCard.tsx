import "./CourseCard.css";

interface ICourseCardProps {
	icon: JSX.Element;
	title: string;
	subTitle: string;
}

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
			<a href="#">Get Started</a>
		</div>
	);
};
