import { useState } from 'react';
import Form from './Form';

function Survey(props) { // { survey, handleDelete, handleUpdate}

    // function toggleForm() {
    //     setEditFormVisible(!editFormVisible)
    // }

    const [editFormVisible, setEditFormVisible] = useState(false)
    return (
        <div className="survey">
            <h1>Survey</h1>
        </div>
    )
}

export default Survey;