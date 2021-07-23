import Survey from "./Survey";
import {useState} from "react";
function Surveys({ surveys, handleDeleteSurvey, filterSurveys, history, setEditFocus }) {

    function deleteSurvey (id) {
        handleDeleteSurvey(id);
        filterSurveys();
    }

    function editSurvey (id) {
        setEditFocus(id);
        history.push(`/edit_question`);
    }

    return (
        <div>
            {surveys.map(survey =>

                <div>
                    <Survey
                        key={survey.id}
                        survey={survey}
                    />
                <button className='delete'
                    onClick={() => deleteSurvey(survey.id)}
                >Delete</button>
                <button className='edit'
                    onClick={() => editSurvey(survey.id)}
                >Edit</button>
                </div>
            )
            }
        </div >
    );
}

export default Surveys;