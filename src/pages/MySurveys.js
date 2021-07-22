import { useEffect,useState } from "react";
import UserSurveys from "../components/UserSurveys";

function MySurveys ({existingUser, handleUpdateSurvey, handleDeleteSurvey, surveys}) {
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
            filterSurveys={filterSurveys}
            handleDeleteSurvey={handleDeleteSurvey}
            handleUpdateSurvey={handleUpdateSurvey}
            surveys={surveysByUserState}
            />
            
        </div>
    )
}

export default MySurveys;