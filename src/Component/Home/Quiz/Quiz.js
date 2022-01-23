import React,{useState} from 'react';
import classes from './Quiz.module.css';
import Button from '@mui/material/Button';
import Question from './Questions/Question';

const Quiz = () => {
    const [currentstage,setCurrentStage] = useState("start");

    const handleStart = () => {
        setCurrentStage("question");
    }

    let displayQuestion = null;

    if(currentstage=="question")
    {

        displayQuestion = (
            <div>
                <Question />
            </div>
        )
    }

    // console.log("hello");

    return (
        <div className={classes.quiz}>
            {displayQuestion}
            <div className={classes.button}>
                {currentstage=="start"?(
                    <Button variant="contained" onClick={handleStart}>Start Quiz</Button>
                ):null}
            </div>
        </div>
    )
}

export default Quiz;