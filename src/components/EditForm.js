import { useState, useEffect } from "react";

import AnswerOptionForm from './AnswerOptionForm';

function EditForm({editfocus, existingUser, handleUpdateSurvey, surveys, user, history, surveyById}) {
    const [answerOptions, setAnswerOptions] = useState([])
    const [editFormState, setEditFormState] = useState({
        user_id: 0,
        categories: 'food',
        survey_question_text: '',
    });
    useEffect(() => {
        console.log(surveyById);
        setEditFormState({
            user_id: existingUser,
            categories: surveyById[0].categories,
            survey_question_text: surveyById[0].survey_question_text
        })
    }, [surveyById])

  




function handleChange(event) {
    setEditFormState(prevState => ({
        ...prevState,
        [event.target.id]: event.target.value
    }));
}

function handleSubmit(event) {
    handleUpdateSurvey(editFormState);
    history.push('/my_surveys')
}


return (
    <>

    <h1 className='form-head'>Edit Survey</h1>
    <div className='aside'>
    <form className='new-form' onSubmit={handleSubmit}>
        <input
        className='nw-sur'
        onChange={handleChange}
        name='user_id'
        type='text'
        value={existingUser}
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
         <input className='nw-sub' type="submit" value="edit" />
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