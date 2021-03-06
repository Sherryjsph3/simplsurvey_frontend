//=========COMPONENT IMPORTS=========
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
//===========CSS IMPORT===============
import './App.css';
// ==========HOOKS====================
import { useState, useEffect } from "react"
// ==========FIREBASE IMPORTS=========
import { auth } from './services/firebase';

function App() {
  const [surveyState, setSurveyState] = useState({
    surveys: []
  });
  const [user, setUser] = useState(null);

  const [existingUser, setExistingUser] = useState(false);

  const [editfocus, setEditFocus] = useState(null)

  // this is for the edit survey
  const [surveyById, setSurveyById] = useState([]) 

  // this is for the mysurveys page 
  const [surveysByUser, setSurveysByUser] = useState([])



  useEffect(() => {
    getSurveys();
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user))
    // cleanup effect
    // return unsubscribe();
  }, []);

  useEffect(() => {
    filterSurveysById();
  }, [editfocus]);
  useEffect(() => {
  }, [surveyById]);
  useEffect(() => {
    filterSurveysByUser();
  }, [existingUser]);

  async function getSurveys() {
    try {
      const surveys = await fetch('https://simplsurvey-api.herokuapp.com/survey_questions').then(response => response.json())
      setSurveyState({ surveys })
    } catch (error) {
      console.log(error)
    }
    if (surveyById.id !== editfocus) {
      filterSurveysById();
    }
    filterSurveysByUser();
  }

  function filterSurveysById() {
    const surveyById = surveyState.surveys.filter(function (survey) {
      return survey.id === editfocus
    })
    setSurveyById(surveyById);
  }
  function filterSurveysByUser() {
    const surveysByUser = surveyState.surveys.filter(function (survey) {
      return survey.user_id === existingUser
    })
    setSurveysByUser(surveysByUser);
  }

  async function handleCreateSurvey(formInputs) {
    console.log(formInputs);
    try {
      const surveys = await fetch('https://simplsurvey-api.herokuapp.com/survey_questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(formInputs)
      }).then(res => res.json())
    } catch (error) {
      console.log(error)
    }
    getSurveys();
  }

  async function handleDeleteSurvey(surveyId) {
    try {
      const surveys = await fetch(`https://simplsurvey-api.herokuapp.com/survey_questions/${surveyId}`, {
        method: 'DELETE',
      }).then(res => res.json());
      
    } catch (error) {
      console.log(error)
    }
    getSurveys();
  }

  async function handleUpdateSurvey(editFormInputs) {
    try {
      const { categories, survey_question_text, id } = editFormInputs;
      const surveys = await fetch(`https://simplsurvey-api.herokuapp.com/survey_questions/${editfocus}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({ categories, survey_question_text }),
      }).then(res => res.json())
      getSurveys();

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Nav
          existingUser={existingUser}
          setExistingUser={setExistingUser}
          user={user}
        />
        <Main
          getSurveys={getSurveys}
          existingUser={existingUser}
          user={user}
          surveys={surveyState.surveys}
          handleCreateSurvey={handleCreateSurvey}
          handleDeleteSurvey={handleDeleteSurvey}
          handleUpdateSurvey={handleUpdateSurvey}
          editfocus={editfocus}
          setEditFocus={setEditFocus}
          surveyById={surveyById}
          surveysByUser={surveysByUser}
        />

      </div>
    </div>
  );
}

export default App;
