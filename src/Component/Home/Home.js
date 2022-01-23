import React,{createContext} from 'react';
import classes from './Home.module.css';
import Quiz from './Quiz/Quiz';
import {Row,Col} from 'react-bootstrap';

const QuizContext = createContext();

const Home = (props) => {
    
    console.log(Math.ceil(Math.random()*9));
    return(
        <div className={classes.home}>
            <Row className={classes.quizwrapper}>
                <Col xs="12" sm="6" className={classes.quizborder+" "+classes.quiz}>
                    <QuizContext.Provider value={{id:1}}>
                        <Quiz />
                    </QuizContext.Provider>
                </Col>
                <Col xs="12" sm="6" className={classes.quiz}>
                    <QuizContext.Provider value={{id:2}}>
                        <Quiz />
                    </QuizContext.Provider>
                </Col>
            </Row>
        </div>
    )
}

export default Home;
export {QuizContext};