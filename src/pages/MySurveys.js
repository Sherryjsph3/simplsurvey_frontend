import { useEffect,useState } from "react";
import UserSurveys from "../components/UserSurveys";

function MySurveys ({existingUser, handleUpdateSurvey, handleDeleteSurvey, surveys, history, setEditFocus}) {
    const [surveysByUserState, setSurveysByUserState] = useState([]);

    useEffect(() => {
        filterSurveys();
  
    },[surveys]);

    function filterSurveys() {
        const surveysByUser = surveys.filter(function(survey) {
            return survey.user_id === existingUser
        })
        setSurveysByUserState(surveysByUser);
        }
    return (
        <div>
            <h1 className='mySurveys'>Mysurveys</h1>
            <UserSurveys 
            setEditFocus={setEditFocus}
            filterSurveys={filterSurveys}
            handleDeleteSurvey={handleDeleteSurvey}
            handleUpdateSurvey={handleUpdateSurvey}
            surveys={surveysByUserState}
            history={history}
            />
            
        </div>
    )
}

export default MySurveys;