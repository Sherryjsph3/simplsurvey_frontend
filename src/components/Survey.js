import { useState } from 'react';


function Survey({ survey }) {

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)
    const [surveyFormState, setSurveyFormState] = useState({
        buttonText: '',
    })

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
                            return (
                                <>
                                    <button
                                        key={option.answer_option_id}
                                        type="submit"
                                        className="pollButton"
                                        textDefaultValue={option.answer_text}
                                        textAltValue="AFTER CLICK"
                                        value={option.id}
                                    >
                                        <span className="GraphicOrIconHere">Graphic or Icon?
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