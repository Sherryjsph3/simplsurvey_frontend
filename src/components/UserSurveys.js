import Survey from "./Survey";
import {useState, useEffect} from "react";
function Surveys({ surveys, handleDeleteSurvey, history, setEditFocus, surveyById, editFocus }) {

    function deleteSurvey (id) {
        handleDeleteSurvey(id);
    }
    
    function redirect (){
        history.push(`/edit_question`)
    }
    function editSurvey (id) {
        setEditFocus(id);
        setTimeout(redirect, 1400)
        
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