import React, { useEffect, useState } from 'react';
import useSound from "use-sound";
import correct from '../assets/CorrectAnswer.mp3'
import wrong from '../assets/Wrong_Answer.mp3'
import play from '../assets/Kbc Theme.mp3'

function Quiz({
    data,
    setStop,
    questionNumber,
    setQuestionNumber,
}) {

    const [question, setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");
    const [letsPlay] = useSound(play)
    const [correctAnswer] = useSound(correct)
    const [wrongAnswer] = useSound(wrong)

// useEffect(() => {
//     letsPlay();
// }, [letsPlay])

    const delay = (duration, callback) => {
        setTimeout(() => {
            callback();
        }, duration);
    };
    const handleClick = (a) =>{
        setSelectedAnswer(a);
        setClassName("answer active");
        delay(3000, () =>
            setClassName(a.correct ? "answer correct" : "answer wrong")        
        );

        delay(6000, () =>{
            if(a.correct)
            {
                correctAnswer();
                delay(1000, () => {
                    setQuestionNumber(prev => prev + 1);
                    setSelectedAnswer(null);
                })                
            }
            else
            {
                wrongAnswer();
                delay(1000, () => {
                    setStop(true);
                })
            }       
        });
    }
    useEffect(()=> 
    {
        setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

  return (
    <div className="Quiz">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a) =>
            (
                <div 
                    className={selectedAnswer === a ? className : "answer"}
                    onClick={() => handleClick(a)}>
                        {a.text}
                    </div>
            ))}
        </div>
    </div>
  )
}

export default Quiz