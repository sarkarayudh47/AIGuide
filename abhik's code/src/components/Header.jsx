import LogoImg from '../assets/quiz-logo.png';
export default function Header() {
	return (
		<header>
			<img src={LogoImg} alt='Quiz Logo' />
			<h1>React Quiz</h1>
		</header>
	);
}