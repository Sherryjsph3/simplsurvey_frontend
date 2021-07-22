import { useState, useEffect } from "react";

import AnswerOptionForm from './AnswerOptionForm';

function EditForm(props) {
    const [answerOptions, setAnswerOptions] = useState([])
    const [editFormState, setEditFormState] = useState({
        user_id: 0,
        categories: 'food',
        survey_question_text: '',
    });

    function filterSurveys() {
        const surveyById = props.surveys.filter(function(survey) {
            return props.survey.id === props.editFocus
        })
        setEditFormState({
            user_id: props.existingUser,
            categories: surveyById.categories,
            survey_question_text: surveyById.survey_question_text
        })
        }


// useEffect(() => {
//     setFormState(prevState => ({
//         ...prevState,
//         user_id: props.existingUser
//     }))
    
// },[props.existingUser]);

function handleChange(event) {
    setEditFormState(prevState => ({
        ...prevState,
        [event.target.id]: event.target.value
    }));
}

function handleSubmit(event) {
    // props.handleCreateSurvey(formState);
}


return (
    <>

    <h1 className='form-head'>New Surveys</h1>
    <div className='aside'>
    <form className='new-form' onSubmit={handleSubmit}>
        <input
        className='nw-sur'
        onChange={handleChange}
        name='user_id'
        type='text'
        value={props.existingUser}
        id='user_id'
        />
      
        <label className='select' for="category"></label>
        
        <select 
        id="categories" 
        name="categories"
        onChange={handleChange}
        >
            <option value="">choose a category:</option>
            <option value="food">food</option>
            <option value="pop culture">pop culture</option>
            <option value="travel">travel</option>
            <option value="art">art</option>
            <option value="sports">sports</option>
            <option value="misc">misc</option>
        </select>
        
        <input
        className='nw-sur'
        onChange={handleChange}
        name='survey_question_text'
        placeholder='survey_question_text'
        type='text'
        value={editFormState.survey_question_text}
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
    <button className='answerOption' onClick={() => setAnswerOptions(answerOptions.concat('option'))}> 
     Add Answer Option
     </button>
    </div>

    




    <img className='ques-img' src='https://i.imgur.com/5Iy2Z3X.png' alt='ques-img' style={{ width:350 }}/>

    
    </>
);
}

export default EditForm;