import {useState} from "react";
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories.js';
import CategoryResults from '../pages/CategoryResults';
import Form from './Form.js';
import Surveys from './Surveys.js';
import Survey from './Survey.js';

function Main({ surveys, answerOptions }) {
    const [selectedCategory, setSelectedCategory] = useState(null)

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
               
           </Route>
            <Route 
            path='/categories'
            render={(rp) => (
                <Categories
                setSelectedCategory={setSelectedCategory}
                surveys={surveys}
                {...rp}
                />

            )}
            />
            <Route path='/category'>
                <CategoryResults 
                category={selectedCategory}
                />
            </Route>
            <Route path='/form'>
                <Form/>
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