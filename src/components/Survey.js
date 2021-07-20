function Survey({ survey, answerOptions }) { // { survey, handleDelete, handleUpdate}

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)

    return (
        <div className="survey">
            <h3>{survey.survey_question_text}</h3>
        </div>
    )
}

export default Survey;