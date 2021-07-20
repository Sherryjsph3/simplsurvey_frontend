function Survey({ survey, answerOptions }) { // { survey, handleDelete, handleUpdate}

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)

    return (
        <div className="survey">
            <h3>{survey.survey_question_text}</h3>
            {/* {answerOptions.map(option => {
                return (
                    <input type="button" href={`/answer_options/${option.answer_option_id}`}>select</input>
                )
            })} */}
        </div>
    )
}

export default Survey;