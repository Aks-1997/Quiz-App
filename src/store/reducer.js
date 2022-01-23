import * as actions from './actions';

const initialstate={
    quiz : [],
    quizsubmitted : null,
    operandsrange : 9,
    operators : ["+","-","/","*"],
    noOfQuestions : 20
}

const reducer = (state=initialstate,action) => {
    switch(action.type)
    {
        case actions.Set_Empty_Quiz:
            return{
                ...state,
                quiz : []
            }
            break;

        case actions.Set_Quiz:
            
            return {
                ...state,
                quiz : [...state.quiz,action.details]
            }
            break;

        case actions.Set_Quiz_Id:
            return {
                ...state,
                quizsubmitted : action.id
            }
            break;

    }
    return state;
}

export default reducer;