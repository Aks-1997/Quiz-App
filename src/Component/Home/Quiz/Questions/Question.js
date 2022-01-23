import React,{useState,useEffect,useContext} from 'react';
import classes from './Question.module.css';
import {useDispatch} from 'react-redux';
import {setQuizDetails,setQuizId} from '../../../../store/actions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import {QuizContext} from '../../Home';
import {useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';

const Question = (props) => {

    const operators = useSelector(state=>state.operators);
    const operandsrange = useSelector(state=>state.operandsrange);
    const noOfQuestions = useSelector(state=>state.noOfQuestions);

    const navigate = useNavigate();

    const quizid = useContext(QuizContext);
    const Dispatch = useDispatch();

    const [firstOperand,setFirstOperand] = useState(null);
    const [secondOperand,setSecondOperand] = useState(null);
    const [operator,setOperator] = useState(null);
    const [answer,setAnswer] = useState(null);
    const [userinput,setUserInput] = useState("");
    const [questionno,setQuestionNo] = useState(1);

    useEffect(()=>{
        let firstnum = Math.ceil(Math.random()*operandsrange);
        let secondnum = Math.ceil(Math.random()*operandsrange);
        let currentoperator = Math.floor(Math.random()*operators.length);
        let correctanswer = 0;
        if(currentoperator==0)
        {
            correctanswer = firstnum+secondnum;
        }
        else if(currentoperator==1)
        {
            correctanswer = firstnum-secondnum;
        }
        else if(currentoperator==2)
        {
            correctanswer = Math.floor(firstnum/secondnum);
        }
        else if(currentoperator==3)
        {
            correctanswer = firstnum*secondnum;
        }
        setFirstOperand(firstnum);
        setSecondOperand(secondnum);
        setOperator(currentoperator);
        setAnswer(correctanswer);
    },[]);

    const handleInput = (event) => {
        setUserInput(event.target.value);
    }

    const handleAnswer = (event) => {
        let details = {
            quizid : quizid.id,
            firstOperand : firstOperand,
            secondOperand : secondOperand,
            operator : operator,
            answer : answer,
            userinput : userinput
        }
        Dispatch(setQuizDetails(details))
        let firstnum = Math.ceil(Math.random()*operandsrange);
        let secondnum = Math.ceil(Math.random()*operandsrange);
        let currentoperator = Math.floor(Math.random()*operators.length);
        let correctanswer = 0;
        if(currentoperator==0)
        {
            correctanswer = firstnum+secondnum;
        }
        else if(currentoperator==1)
        {
            correctanswer = firstnum-secondnum;
        }
        else if(currentoperator==2)
        {
            correctanswer = Math.floor(firstnum/secondnum);
        }
        else if(currentoperator==3)
        {
            correctanswer = firstnum*secondnum;
        }
        setFirstOperand(firstnum);
        setSecondOperand(secondnum);
        setOperator(currentoperator);
        setAnswer(correctanswer);
        setUserInput("");
        setQuestionNo(questionno+1);
    }

    const handleSubmit = (event) => {
        let details = {
            quizid : quizid.id,
            firstOperand : firstOperand,
            secondOperand : secondOperand,
            operator : operator,
            answer : answer,
            userinput : userinput
        }
        Dispatch(setQuizDetails(details));
        Dispatch(setQuizId(quizid.id));
        navigate('/Result');
    }

    const handleEnter = (event) => {
        if(event.key=="Enter"&&questionno<noOfQuestions)
        {
            let details = {
                quizid : quizid.id,
                firstOperand : firstOperand,
                secondOperand : secondOperand,
                operator : operator,
                answer : answer,
                userinput : userinput
            }
            Dispatch(setQuizDetails(details))
            let firstnum = Math.ceil(Math.random()*operandsrange);
            let secondnum = Math.ceil(Math.random()*operandsrange);
            let currentoperator = Math.floor(Math.random()*operators.length);
            let correctanswer = 0;
            if(currentoperator==0)
            {
                correctanswer = firstnum+secondnum;
            }
            else if(currentoperator==1)
            {
                correctanswer = firstnum-secondnum;
            }
            else if(currentoperator==2)
            {
                correctanswer = Math.floor(firstnum/secondnum);
            }
            else if(currentoperator==3)
            {
                correctanswer = firstnum*secondnum;
            }
            setFirstOperand(firstnum);
            setSecondOperand(secondnum);
            setOperator(currentoperator);
            setAnswer(correctanswer);
            setUserInput("");
            setQuestionNo(questionno+1);
        }
        else if(event.key=="Enter"&&questionno==noOfQuestions)
        {
            let details = {
                quizid : quizid.id,
                firstOperand : firstOperand,
                secondOperand : secondOperand,
                operator : operator,
                answer : answer,
                userinput : userinput
            }
            Dispatch(setQuizDetails(details));
            Dispatch(setQuizId(quizid.id));
            navigate('/Result');
        }
    }

    let displayQuestion = (
        <div>
           <span>{firstOperand}</span><span>{operators[operator]}</span><span>{secondOperand}</span><span> = ?</span> 
        </div>
    )

    return (
        <div className={classes.questionsection}>
            <div className={classes.question+" mb-1"}>
                <div className={"me-1"}>Question</div>
                <div className={"me-2"}>{questionno}:</div>
                <React.Fragment>{displayQuestion}</React.Fragment>
            </div>
            <div className={"mb-3"}>
                (Ignore Decimal in answer)
            </div>
            <div className={"mb-4"}>
                <TextField variant="outlined" label="User Answer" placeholder="Enter your answer here" value={userinput} onChange={handleInput} onKeyDown={handleEnter} autoFocus />
            </div>
            <div>
                {questionno==noOfQuestions?(<Button variant="contained" onClick={handleSubmit}>Submit Quiz</Button>):(<Button variant="contained" onClick={handleAnswer}>Submit Question</Button>)}
            </div>
        </div>
    )
}

export default Question;