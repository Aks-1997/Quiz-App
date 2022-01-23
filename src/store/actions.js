export const Set_Quiz = "Set_Quiz1";
export const Set_Quiz_Id = "Set_Quiz_Id";
export const Set_Empty_Quiz = "Set_Empty_Quiz";

export const setQuizDetails = (details) => {

        return {
            type : Set_Quiz,
            details : details
        }   
}

export const setQuizId = (id) => {
    return {
        type : Set_Quiz_Id,
        id : id
    }
}

export const setEmptyQuiz = () => {
    return {
        type : Set_Empty_Quiz
    }
}
