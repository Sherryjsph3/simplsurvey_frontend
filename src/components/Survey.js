import { useState } from 'react';
import Form from './Form';
import Surveys from './Surveys'

function Survey(props) { // { survey, handleDelete, handleUpdate}

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)

    return (
        <div className="survey">
            <h3>{question.question_text}</h3>
            <Answers />
            {props.answer_options.map(option => {
                return (
                    <input type="button" href={`/answer_options/${option.answer_option_id}`}>select</input>
                )
            })}
        </div>
    )
}

export default Survey;