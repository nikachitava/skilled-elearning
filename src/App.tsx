import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Courses } from "./sections/courses/Courses";
import { Welcome } from "./sections/welcome/Welcome";

function App() {
	return (
		<>
			<Header />
			<Welcome />
			<Courses />
			<Footer />
		</>
	);
}

export default App;
