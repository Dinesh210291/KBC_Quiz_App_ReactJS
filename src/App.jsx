import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Quiz from './components/Quiz';
import Timer from './components/Timer';
import Start from './components/Start';

function App() {
  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("0");

  const data = [
    {
      id: 1,
      question: "The International Literacy Day is observed on",
      answers: [
        {
          text: "Sep 8",
          correct: true,
        },
        {
          text: "Nov 28",
          correct: false,
        },
        {
          text: "May 2",
          correct: false,
        },
        {
          text: "Sep 22",
          correct: false,
        },
      ]
    },
    {
      id: 2,
      question: "The language of Lakshadweep. a Union Territory of India, is",
      answers: [
        {
          text: "Hindi",
          correct: false,
        },
        {
          text: "Tamil",
          correct: false,
        },
        {
          text: "Malayalam",
          correct: true,
        },
        {
          text: "Telgu",
          correct: false,
        },
      ]
    },
    {
      id: 3,
      question: "Bahubali festival is related to",
      answers: [
        {
          text: "Budhism",
          correct: false,
        },
        {
          text: "Jainism",
          correct: true,
        },
        {
          text: "Hinduism",
          correct: false,
        },
        {
          text: "Islam",
          correct: false,
        },
      ]
    }, 
    {
      id: 4,
      question: "Which day is observed as the World Standards  Day?",
      answers: [
        {
          text: "June 26",
          correct: false,
        },
        {
          text: "Oct 14",
          correct: true,
        },
        {
          text: "Nov 15",
          correct: false,
        },
        {
          text: "Dec 2",
          correct: false,
        },
      ]
    },  
    {
      id: 5,
      question: "Who is the author of 'Manas Ka-Hans' ?",
      answers: [
        {
          text: "Khuswant Singh",
          correct: false,
        },
        {
          text: "Prem Chand",
          correct: false,
        },
        {
          text: "Jayashankar Prasad",
          correct: false,
        },
        {
          text: "Amrit Lal Nagar",
          correct: true,
        },
      ]
    }, 
    {
      id: 6,
      question: "Who is the author of the epic 'Meghdoot'?",
      answers: [
        {
          text: "Tulsidas",
          correct: false,
        },
        {
          text: "Kalidas",
          correct: true,
        },
        {
          text: "Valmiki",
          correct: false,
        },
        {
          text: "Banbhatta",
          correct: false,
        },
      ]
    },
    {
      id: 7,
      question: "Pongal is a popular festival of which state?",
      answers: [
        {
          text: "Karnataka",
          correct: false,
        },
        {
          text: "Kerla",
          correct: false,
        },
        {
          text: "TamilNadu",
          correct: true,
        },
        {
          text: "Andhra Pradesh",
          correct: false,
        },
      ]
    }, 
    {
      id: 8,
      question: "Ghototkach in Mahabharat was the son of",
      answers: [
        {
          text: "Duryodhana",
          correct: false,
        },
        {
          text: "Arjuna",
          correct: false,
        },
        {
          text: "Yudhishthir",
          correct: false,
        },
        {
          text: "Bhima",
          correct: true,
        },
      ]
    } , 
    {
      id: 9,
      question: "Which of the following Muslim festivals is based on the 'Holy Quran' ?",
      answers: [
        {
          text: "Id - Ul - Zuha",
          correct: true,
        },
        {
          text: "Id - Ul - Fitr",
          correct: false,
        },
        {
          text: "Bakraa - Id",
          correct: false,
        },
        {
          text: "Moharram",
          correct: false,
        },
      ]
    }, 
    {
      id: 10,
      question: "Which of the following is not a dance from Kerala?",
      answers: [
        {
          text: "Kathakali",
          correct: false,
        },
        {
          text: "Mohiniattam",
          correct: false,
        },
        {
          text: "Ottan Thullal",
          correct: false,
        },
        {
          text: "Yaksha Gana",
          correct: true,
        },
      ]
    },  
    {
      id: 11,
      question: "Rath Yatra is famous festival at",
      answers: [
        {
          text: "Ayodhya",
          correct: false,
        },
        {
          text: "Mathura",
          correct: false,
        },
        {
          text: "Dwaraka",
          correct: false,
        },
        {
          text: "Puri",
          correct: true,
        },
      ]
    },  
    {
      id: 12,
      question: "The Lalit Kala Academy is devoted to the promotion of",
      answers: [
        {
          text: "Dance & Drama",
          correct: false,
        },
        {
          text: "Fine Arts",
          correct: true,
        },
        {
          text: "Literature",
          correct: false,
        },
        {
          text: "Music",
          correct: false,
        },
      ]
    },  
    {
      id: 13,
      question: "Central Salt and Marine Chemicals Research Institute is located at",
      answers: [
        {
          text: "Ahmedabad",
          correct: false,
        },
        {
          text: "Bhavnagar",
          correct: false,
        },
        {
          text: "Gandhinagar",
          correct: false,
        },
        {
          text: "Panaji",
          correct: true,
        },
      ]
    },   
    {
      id: 14,
      question: "The headquarters of the Sahitya Academy is at",
      answers: [
        {
          text: "Mumbai",
          correct: false,
        },
        {
          text: "Chennai",
          correct: false,
        },
        {
          text: "New Delhi",
          correct: true,
        },
        {
          text: "Kolkata",
          correct: false,
        },
      ]
    }   

  ];

  const moneyPyramid = useMemo(() =>
    [{id: 1, amount:'5000'},
    {id: 2, amount:'10000'},
    {id: 3, amount:'20000'},
    {id: 4, amount:'40000'},
    {id: 5, amount:'80000'},
    {id: 6, amount:'160000'},
    {id: 7, amount:'320000'},
    {id: 8, amount:'640000'},
    {id: 9, amount:'1250000'},
    {id: 10, amount:'2500000'},
    {id: 11, amount:'5000000'},
    {id: 12, amount:'10000000'},
    {id: 13, amount:'30000000'},
    {id: 14, amount:'70000000'}
  ].reverse(),
  []);
    

  useEffect( () => {
questionNumber > 1 && setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  },[moneyPyramid, questionNumber])


  return (
    <div className="app">
      { userName ? 
      <>
        (
          <div className="main">
        {stop ? <h1 className="endText">You earned: {earned}</h1> : (
      <>       
        <div className="top">
          <div className="timer">
            <Timer setStop={setStop} questionNumber={questionNumber}/>
          </div>
        </div>
        <div className="bottom">
          <Quiz 
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}/>
        </div> </> )}
        
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
        {moneyPyramid.map((m) => (
          <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>            
            <span className='moneyListItemNumber'>{m.id}</span>
            <span className='moneyListItemAmount'>{m.amount}</span>
          </li>
            ))}
        </ul>
      </div>      
        ) </> : 
        ( <Start setUserName={setUserName}/>  )
      }

      
    </div>
  );
}

export default App;
