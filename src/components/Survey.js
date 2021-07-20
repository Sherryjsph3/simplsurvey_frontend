function Survey({ surveys }) { // { survey, handleDelete, handleUpdate}

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)

    return (
        <div className="survey">
            <h3>{surveys.question_text}</h3>
            {/* <Answers /> */}
            {surveys.answer_options.map(option => {
                return (
                    <input type="button" key={option.answer_text} href={`/answer_options/${option.answer_option_id}`}>select</input>
                )
            })}
        </div>
    )
}

export default Survey;