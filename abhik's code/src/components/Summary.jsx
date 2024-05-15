import quizComplete from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js';
export default function Summary({ userAnswers }) {
    console.log(userAnswers);
	return (
		<div id='summary'>
			<img src={quizComplete} alt='QUIZ COMPLETED' />
			<h2>Quiz Complete</h2>
			<div id='summary-stats'>
				<p>
					<span className='number'>10%</span>
					<span className='text'>skipped</span>
				</p>
				<p>
					<span className='number'>10%</span>
					<span className='text'>Correct</span>
				</p>
				<p>
					<span className='number'>10%</span>
					<span className='text'>Incorrect</span>
				</p>
			</div>
			<ol>
				{userAnswers.map((answer,index) => {
					<li key={answer}>
						<h3>{index+1}</h3>
						<p className='question'>{QUESTIONS[index].text}</p>
						<p className='user-answer'>{answer ?? 'skipped'}</p>
					</li>;
				})}
			</ol>
		</div>
	);
}
