import { useEffect,useState } from "react";
import UserSurveys from "../components/UserSurveys";

function MySurveys ({existingUser, handleUpdateSurvey, handleDeleteSurvey, surveys, history, setEditFocus, surveysByUser, surveyById, editFocus}) {


    return (
        <div>
            <h1 className='mySurveys'>My Surveys</h1>
            <UserSurveys 
            editFocus={editFocus}
            surveyById={surveyById}
            setEditFocus={setEditFocus}
            handleDeleteSurvey={handleDeleteSurvey}
            handleUpdateSurvey={handleUpdateSurvey}
            surveys={surveysByUser}
            history={history}
            />
            
        </div>
    )
}

export default MySurveys;