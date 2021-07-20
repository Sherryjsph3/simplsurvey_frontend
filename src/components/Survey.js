function Survey({ surveys, answerOptions }) { // { survey, handleDelete, handleUpdate}

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)

    return (
        <div className="survey">
            <h3>{surveys.question_text}</h3>
            {/* <Answers /> */}
            {answerOptions.map(option => {
                return (
                    <input type="button" key={option.answer_text} href={`/answer_options/${surveys.survey_question_id}`}>select</input>
                )
            })}
        </div>
    )
}

export default Survey;