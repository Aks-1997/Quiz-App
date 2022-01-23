import React,{useEffect} from 'react';
import classes from './Result.module.css';
import { useSelector,useDispatch } from 'react-redux';
import {setEmptyQuiz} from '../../store/actions'

const Result = () => {

    const Dispatch = useDispatch();

    const operators = ["+","-","/","*"];

    const quiz = useSelector(state=>state.quiz);
    const id = useSelector(state=>state.quizsubmitted);

    useEffect(()=>{
        return () => {
            Dispatch(setEmptyQuiz());
        }
    },[])

    let displayResult = null;
    let result = []; 
    quiz?.map((info)=>{
        if(info.quizid==id)
        {
            result.push(info);
        }
    })

    let correctanswer = 0;

    displayResult = result?.map((info,idx)=>{
        
        if(parseInt(info.userinput)===info.answer)
        {
            correctanswer++;
            return (
                <div className={classes.correct+" mb-1"} key={Math.random()}>
                    <span className={"me-1"}>Question</span><span className={"me-2"}>{idx+1}:</span><span className={"me-1"}>{info.firstOperand}</span><span className={"me-1"}>{operators[info.operator]}</span><span className={"me-1"}>{info.secondOperand}</span><span>=?</span>
                    <div className={classes.answer}>
                        <div className={"me-1"}>Correct Answer : </div>
                        <div>{info.answer}</div> 
                    </div> 
                    <div className={classes.answer}>
                        <div className={"me-1"}>Your Answer : </div>
                        <div>{info.userinput}</div> 
                    </div>
                    <hr />
                </div>
            )
        }
        else
        {
            return(
                <div className={classes.wrong+" mb-1"} key={Math.random()}>
                    <span className={"me-1"}>Question</span><span className={"me-2"}>{idx+1}:</span><span className={"me-1"}>{info.firstOperand}</span><span className={"me-1"}>{operators[info.operator]}</span><span className={"me-1"}>{info.secondOperand}</span><span>=?</span>
                    <div className={classes.answer}>
                        <div className={"me-1"}>Correct Answer : </div>
                        <div>{info.answer}</div> 
                    </div>
                    <div className={classes.answer}>
                        <div className={"me-1"}>Your Answer : </div>
                        <div>{info.userinput}</div> 
                    </div>
                    <hr />
                </div>
            )
        }
    })

    return(
        <div className={classes.Resultsection+" mt-4 mb-4"}>
            <div className={classes.wrapper+" p-2"}>
                <div className={classes.heading+" mb-1"}>Quiz Result</div>
                {displayResult}
                <div className={classes.result}>
                    <div className={"me-1"}>
                        Number of Correct answers:
                    </div>
                    <div>
                        {correctanswer}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Result;