import { useState } from 'react';
import Form from './Form';
import Surveys from './Surveys'

function Survey({ Surveys }) { // { survey, handleDelete, handleUpdate}

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    // const [editFormVisible, setEditFormVisible] = useState(false)

    return (
        <div className="survey">
            <h3>{Surveys.question_text}</h3>
            {/* <Answers /> */}
            {Surveys.answer_options.map(option => {
                return (
                    <input type="button" href={`/answer_options/${option.answer_option_id}`}>select</input>
                )
            })}
        </div>
    )
}

export default Survey;