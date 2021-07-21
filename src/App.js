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

  useEffect(() => {
    async function getSurveys() {
      try {
        const surveys = await fetch('http://localhost:3000/survey_questions').then(response => response.json())
        setSurveyState({ surveys })
      } catch (error) {
        console.log(error)
      }
    }
    getSurveys();
    const unsubscribe = auth.onAuthStateChanged((user) => setUser(user))
    // cleanup effect
    // return unsubscribe();
  }, []);

  async function handleCreateSurvey(formInputs) {
    try {
      const surveys = await fetch('http://localhost:3000/survey_questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/json'
        },
        body: JSON.stringify(formInputs)
      }).then(res => res.json())

      setSurveyState({ surveys });

    } catch (error) {
      console.log(error)
    }
  }

  async function handleDeleteSurvey(surveyId) {
    try {
      const surveys = await fetch(`http://localhost:3000/survey_questions/${surveyId}`, {
        method: 'DELETE',
      }).then(res => res.json());

      setSurveyState({ surveys });

    } catch (error) {
      console.log(error)
    }
  }

  async function handleUpdateSurvey(formInputs) {
    try {
      const { categories, survey_question_text, id } = formInputs;
      const surveys = await fetch(`http://localhost:3000/survey_question/${id}`, {
        method: 'PUT',
        headers: {
          "Content-Type": "Application/json"
        },
        body: JSON.stringify({ categories, survey_question_text }),
      }).then(res => res.json())
      setSurveyState({ surveys })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div className="container">
        <Header />
        <Nav
          user={user}
        />
        <Main
          surveys={surveyState.surveys}
        />

      </div>
    </div>
  );
}

export default App;
