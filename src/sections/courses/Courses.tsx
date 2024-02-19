import "./Courses.css";
import { CourseCard } from "../../components/CourseCard/CourseCard";
import { AiOutlineAntDesign } from "react-icons/ai";
import { MdOutlineAnimation } from "react-icons/md";
import { HiOutlinePhotograph } from "react-icons/hi";
import { RiNftFill } from "react-icons/ri";
import { RiMoneyDollarCircleLine } from "react-icons/ri";

export const Courses = () => {
	return (
		<section className="container courses_section">
			<div className="course_card cards_header">
				<h1>Check out our most popular courses!</h1>
			</div>
			<CourseCard
				icon={<MdOutlineAnimation size={22} />}
				title={"Animation"}
				subTitle={
					"Learn the latest animation techniques to create stunning motion design and captivate your audience."
				}
			/>
			<CourseCard
				icon={<AiOutlineAntDesign size={22} />}
				title={"Design"}
				subTitle={
					"Create beautiful, usable interfaces to help shape the future of how the web looks.."
				}
			/>
			<CourseCard
				icon={<HiOutlinePhotograph size={22} />}
				title={"Photography"}
				subTitle={
					"Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.."
				}
			/>
			<CourseCard
				icon={<RiNftFill size={22} />}
				title={"Crypto"}
				subTitle={
					"All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour course.."
				}
			/>
			<CourseCard
				icon={<RiMoneyDollarCircleLine size={22} />}
				title={"Bussines"}
				subTitle={
					"A step-by-step playbook to help you start, scale, and sustain your business without outside investment.."
				}
			/>
		</section>
	);
};
