import "./Courses.css";
import animation_icon from "../../../public/images/animation_icon.svg";

export const Courses = () => {
	return (
		<section className="container courses_section">
			<div className="course_card cards_header">
				<h1>Check out our most popular courses!</h1>
			</div>
			<div className="course_card">
				<img src={animation_icon} alt="animation_icon" />

				<h2>Animation</h2>
				<p>
					Learn the latest animation techniques to create stunning
					motion design and captivate your audience.
				</p>
				<a href="#">Get Started</a>
			</div>
			<div className="course_card">
				<div>
					<img src={animation_icon} alt="animation_icon" />
				</div>
				<h2>Animation</h2>
				<p>
					Learn the latest animation techniques to create stunning
					motion design and captivate your audience.
				</p>
				<a href="#">Get Started</a>
			</div>
			<div className="course_card">
				<div>
					<img src={animation_icon} alt="animation_icon" />
				</div>
				<h2>Animation</h2>
				<p>
					Learn the latest animation techniques to create stunning
					motion design and captivate your audience.
				</p>
				<a href="#">Get Started</a>
			</div>
			<div className="course_card">
				<div>
					<img src={animation_icon} alt="animation_icon" />
				</div>
				<h2>Animation</h2>
				<p>
					Learn the latest animation techniques to create stunning
					motion design and captivate your audience.
				</p>
				<a href="#">Get Started</a>
			</div>
		</section>
	);
};
