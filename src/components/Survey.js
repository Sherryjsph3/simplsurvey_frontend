import { useState, useEffect } from 'react';


function Survey({ survey }) {

    const [surveyFormState, setSurveyFormState] = useState(null)
    // create req
    async function createChosenAnswer(chosenAnswer) {
        try {
            const options = await fetch(`http://localhost:3000/survey_questions/1/answer_options/1/chosen_answers`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(chosenAnswer)
            }).then
            let data = (res => res.json())
            setSurveyFormState({ data });
        } catch (error) {
            console.log(error)
        }
        createChosenAnswer();
    }

    function handleSubmitAnswer(event) {
        event.preventDefault();
        console.log("SUBMITTED ANSWER");
    }

    return (
        <div className="survey">
            <h3>{survey.survey_question_text}</h3>
            <div className="pollSelectionArea">
                <div className="selectYourOptionText">Select your choice:</div>
                <form onSubmit={handleSubmitAnswer} className="surveyForm">
                    <div>
                        {survey.answer_options.map(option => {
                            // console.log(option)
                            return (
                                <>
                                    <button
                                        key={option.answer_option_id}
                                        type="submit"
                                        className="pollButton"
                                        // textDefaultValue={option.answer_text}
                                        // textAltValue="AFTER CLICK"
                                        value={option.id}
                                    >
                                        <span className="GraphicOrIconHere">
                                        </span>
                                        <span className="buttonText">{option.answer_text}
                                        </span>
                                    </button> <br />
                                </>
                            )
                        })}
                    </div>
                </form>
            </div>
        </div >
    )
}


export default Survey;