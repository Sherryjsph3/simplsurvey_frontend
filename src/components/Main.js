import Surveys from "./Surveys";
import {Route, Switch} from 'react-router-dom'
import Categories from "../pages/Categories";
 
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
            <Route exact path='/'>
                <Nav/>
            </Route>
            <Route path='/categories'>
                <Categories/>
            </Route>
            <Route path='/form'>
                <Form/>
            </Route>
            <Route path='/get_survey_questions'>
                <Surveys/>
            </Route>
            <Route path='/get_chosen_answers'>
                <Survey/>
            </Route>
        </Switch>
        </main>
</>
    )
}

export default Main;