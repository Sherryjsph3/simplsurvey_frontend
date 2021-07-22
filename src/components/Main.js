import { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Categories from '../pages/Categories.js';
import CategoryResults from '../pages/CategoryResults';
import Form from './Form.js';
import MySurveys from '../pages/MySurveys';
import MyAnswers from '../pages/MyAnswers';
import Surveys from './Surveys.js';
import Survey from './Survey.js';
import NewSurvey from "../pages/NewSurvey.js";

function Main({ surveys, handleCreateSurvey, handleDeleteSurvey, handleUpdateSurvey, getSurveys, existingUser, user }) {
    const [selectedCategory, setSelectedCategory] = useState(null)

    return (
        <>
            <main>
                <Switch>
                    <Route exact path='/'>
                        <Surveys
                            existingUser={existingUser}
                            surveys={surveys}
                        />
                    </Route>
                    <Route
                        path='/categories'
                        render={(rp) => (
                            <Categories
                                category={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                                surveys={surveys}
                                {...rp}
                            />

                        )}
                    />
                    <Route path='/category'>
                        <CategoryResults
                            surveys={surveys}
                            category={selectedCategory}
                        />
                    </Route>
                    <Route path='/new_survey'>
                        <NewSurvey
                        existingUser={existingUser}
                        user={user}
                        handleCreateSurvey={handleCreateSurvey}
                        />
                    </Route>
                    <Route path='/my_surveys'>
                        <MySurveys 
                        existingUser={existingUser}
                        user={user}
                        handleDeleteSurvey={handleDeleteSurvey}
                        handleUpdateSurvey={handleUpdateSurvey}
                        surveys={surveys}
                        />
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