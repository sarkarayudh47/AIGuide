import { useState } from "react";
import QuestionTimer from "./QuestionTimer.jsx";
import QUESTIONS from '../questions.js'
import Answers from "./Answers.jsx";
export default function Question({qid,onSelectAnswer,onSkipAnswer,mode}) {
	const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    }) 
    let timer = 10000;
    if(answer.selectedAnswer){
        timer =1000;
    }
    if(answer.isCorrect != null){
        timer = 2000;
    }
    function handleSelectAnswer(answer) {
    setAnswer({
        selectedAnswer: answer,
        isCorrect: null
    })


    setTimeout(() => {
        setAnswer({selectedAnswer: answer,
        isCorrect: QUESTIONS[qid].answers[0] === answer})
        setTimeout(() => {
            onSelectAnswer(answer);
        },2000)
    },1000)
    }
    let answerState = '';
    if(answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    }else if(answer.selectedAnswer){
        answerState = 'answered'
    }
    return (
		<div id='questions'>
			<QuestionTimer
                key={timer}
				timeout={timer}
				onTimeout={answer.selectedAnswer === ''?onSkipAnswer:null}
                mode={answerState}
			/>
			<h2>{QUESTIONS[qid].text}</h2>
			<Answers
				
				answers={QUESTIONS[qid].answers}
				selectedAnswer={answer.selectedAnswer}
				answerState={answerState}
				onSelect={handleSelectAnswer}
			/>
		</div>
	);
}
