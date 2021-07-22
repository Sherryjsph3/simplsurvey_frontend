import { useState, useEffect } from "react";

import AnswerOptionForm from './AnswerOptionForm';

function Form(props) {
    const [answerOptions, setAnswerOptions] = useState([])
    const [formState, setFormState] = useState({
        user_id: '',
        categories: '',
        survey_question_text: '',
        answer_options: []
    });


useEffect(() => {
    if(props.survey) {
        setFormState(props.survey)
    }
}, [props.survey]);

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
    <>

    <h1 className='form-head'>New Surveys</h1>
    <div className='aside'>
    <form className='new-form' onSubmit={handleSubmit}>
        <input
        className='nw-sur'
        handleChange={handleChange}
        name='user_id'
        placeholder='user_id'
        type='text'
        value={formState.user_id}
        id='user_id'
        />
        <input
        className='nw-sur'
        handleChange={handleChange}
        name='categories'
        placeholder='categories'
        type='text'
        value={formState.categories}
        id='categories'
        />
        <input
        className='nw-sur'
        handleChange={handleChange}
        name='survey_question_text'
        placeholder='survey_question_text'
        type='text'
        value={formState.survey_question_text}
        id='survey_question_text'
        />
         <input className='nw-sub' type="submit" value={props.survey ? "Edit" : "Add a New Survey"} />
    </form>
    {
    
    answerOptions.map(index => 
      <div>
          <AnswerOptionForm 
              key={index}

          />
      </div>
      )
      
  }
    <button onClick={() => setAnswerOptions(answerOptions.concat('option'))}> 
     Add answer option
     </button>
    </div>

    




    <img className='ques-img' src='https://i.imgur.com/5Iy2Z3X.png' alt='ques-img' style={{ width:350 }}/>

    </>
);
}

export default Form;