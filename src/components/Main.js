import {Route, Switch} from 'react-router-dom'
import Categories from '../pages/Categories.js';
import MySurveys from '../pages/MySurveys.js'
import Surveys from './Surveys.js';
import Survey from './Survey.js'
 
function Main ({surveys}) {
    return (
        <>
        <div>
            <h1>Main</h1>
            <Surveys 
            surveys={surveys}
            />
        </div>
        <main>
        <Switch>
            {/* <Route exact path='/'>
                
            </Route> */}
            <Route path='/categories'>
                <Categories/>
            </Route>
            <Route path='/mysurveys'>
                <MySurveys/>
            </Route>
            <Route path='/survey_questions'>
                <Surveys/>
            </Route>
            <Route path='/answer_options'>
                <Survey/>
            </Route>
        </Switch>
        </main>
</>
    )
}

export default Main;