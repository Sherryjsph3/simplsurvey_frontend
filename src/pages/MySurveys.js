import { useEffect,useState } from "react";
import Surveys from "../components/Surveys";

function MySurveys ({existingUser, handleUpdateSurvey, handleDeleteSurvey, surveys}) {
    const [surveysByUserState, setSurveysByUserState] = useState([]);

    useEffect(() => {
        function filterSurveys() {
            const surveysByUser = surveys.filter(function(survey) {
                return survey.user_id === existingUser
            })
            setSurveysByUserState(surveysByUser);
            }
            filterSurveys();
    }, []);
    return (
        <div>
            <h1 className='mySurveys'>Mysurveys</h1>
            <Surveys 
            surveys={surveysByUserState}
            />
            
        </div>
    )
}

export default MySurveys;