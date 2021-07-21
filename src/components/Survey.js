function Survey({ survey }) {

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)

    return (
        <div className="survey">
            <h3>{survey.survey_question_text}</h3>
            <div className="pollSelectionArea">
                <div className="selectYourOptionText">Select your choice:</div>
                <form class="pollForm">
                    <div>
                        {survey.answer_options.map(option => {
                            return (
                                <>
                                    <button onClick="vote"
                                        className="pollButton" default-value={option.answer_text}
                                        alt-value="AFTER CLICK">
                                        <span className="GraphicHere"></span>
                                        <span className="buttonText">{option.answer_text}</span>
                                    </button> <br />
                                </>
                            )
                        })}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Survey;