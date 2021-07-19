//=========COMPONENT IMPORTS=========
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
//===========CSS IMPORT===============
import './App.css';
// ==========HOOKS====================
import {useState, useEffect} from "react"


function App() {
  const [surveyState, setSurveyState] = useState({
    surveys: []});

  useEffect(() => {
    async function getSurveys() {
      try {
        const surveys = await fetch('http://localhost:3000/surveyquestions').then(response => response.json()) 
        setSurveyState({surveys})
      } catch (error) {
        console.log(error)
      }
    }
    getSurveys();
  }, []);

  return (
    <div className="App">
      <Header />
      <Nav />
      <Main />
    </div>
  );
}

export default App;
