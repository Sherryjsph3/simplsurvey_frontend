import { useState } from "react";


function Survey({ survey }) {

    function getRandom(maxNum) {
        return Math.floor(Math.random() * 50);
    }
    const [votes, setVotes] = useState((getRandom()));

    function handleIncrement() {
        setVotes(votes + 1)
    }


    return (

        <div className="survey">
            <h3 className='ques-h3'>{survey.survey_question_text}</h3>
            <div className="pollSelectionArea">
                <div className="selectYourOptionText">Select your choice:</div>
                <div>
                    {survey.answer_options.map(option => {
                        return (
                            <>
                                <button
                                    onClick={handleIncrement}
                                    className="pollButton" default-value={option.answer_text}
                                    alt-value="AFTER CLICK"
                                    key={option.id}>
                                    <span className="GraphicHere"></span>
                                    <span className="buttonText">{option.answer_text}</span>
                                    <span className="voteCount">{votes}</span>
                                </button> <br />
                            </>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Survey;