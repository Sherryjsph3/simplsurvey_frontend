import { useState, useEffect } from "react";


function Form(props) {
    const [formState, setFormState] = useState({
        user_id: '',
        categories: '',
        survey_question_text: ''
    })
}

useEffect(() => {
    if(props.survey) {
        setFormState(props.survey)
    }
}, [props.survey])

function handleChange(event) {
    setFormState(prevState => ({
        ...prevState,
        [event.target.id]: event.target.value
    }));
}

function handleSubmit(event) {
    event.preventDefault();
    if(props.survey) {
        props.handleUpdate(formState)
        props.toggleForm()
    } else {
        props.handleAdd(formState);
    }
}

return (
    <form onSubmit={handleSubmit}>
        <input
        handleChange={handleChange}
        name='user_id'
        placeholder='user_id'
        type='text'
        value={formState.user_id}
        id='user_id'
        />
        <input
        handleChange={handleChange}
        name='categories'
        placeholder='categories'
        type='text'
        value={formState.categories}
        id='categories'
        />
        <input
        handleChange={handleChange}
        name='survey_question_text'
        placeholder='survey_question_text'
        type='text'
        value={formState.survey_question_text}
        id='survey_question_text'
        />
         <input type="submit" value={props.survey ? "Edit" : "Add"} />
    </form>
)


export default Form;