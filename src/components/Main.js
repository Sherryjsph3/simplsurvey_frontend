import { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories.js';
import CategoryResults from '../pages/CategoryResults';
import Form from './Form.js';
import MySurveys from '../pages/MySurveys';
import MyAnswers from '../pages/MyAnswers';
import Surveys from './Surveys.js';
import Survey from './Survey.js';

function Main({ surveys }) {
    const [selectedCategory, setSelectedCategory] = useState(null)

    return (
        <>
            <main>
                <Switch>
                    <Route exact path='/'>
                        <Surveys
                            surveys={surveys}
                        />
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
                    <Route path='/new_survey'>
                        <Form />
                    </Route>
                    <Route path='/my_surveys'>
                        <MySurveys />
                    </Route>
                    <Route path='/my_answers'>
                        <MyAnswers />
                    </Route>
                </Switch>
            </main>
        </>
    )
}

export default Main;