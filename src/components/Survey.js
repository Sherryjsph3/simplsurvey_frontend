function Survey({ survey, getSurveys }) {

    function handleClick(option) {
        async function handleUpdateVote() {
            let addVote = option.answer_numeric + 1
            const vote = {
                answer_numeric: addVote
            }
            console.log(addVote)
            try {
                const { answer_numeric } = vote
                console.log(answer_numeric)
                const surveys = await fetch(`http://localhost:3000/survey_questions/${survey.id}/answer_options/${option.id}`, {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "Application/json"
                    },
                    body: JSON.stringify({ answer_numeric })
                })
            } catch (error) {
                console.log(error)
            }
        }
        handleUpdateVote();
        getSurveys();
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
                                    onClick={() => handleClick(option)}
                                    className="pollButton" default-value={option.answer_text}
                                    key={option.id}>
                                    <span className="buttonText">{option.answer_text}</span>
                                    <span className="voteCount">       {option.answer_numeric}</span>
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