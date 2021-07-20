function Survey({ survey, answerOptions }) { // { survey, handleDelete, handleUpdate}

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)

    return (
        <div className="survey">
            <h3>{survey.survey_question_text}</h3>
            <div className="pollSelectionArea">
                <div className="selectYourOptionText">Select your choice</div>
                <form class="pollForm">
                    <div>
                        {/* {answerOptions.map(option => {
                            return ( */}

                        <button onClick="vote"
                            className="pollButton" default-value="DEFAULT TEXT"
                            alt-value="AFTER CLICK">
                            <span className="GraphicHere"></span>
                            <span className="buttonText">DEFAULT</span>
                        </button>

                        {/* )
                        })} */}
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Survey;