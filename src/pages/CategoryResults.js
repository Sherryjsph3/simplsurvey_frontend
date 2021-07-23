import {useEffect, useState} from "react";
import Surveys from "../components/Surveys";
function CategoryResults ({category, surveys}) {
    const [surveysByCategory, setSurveysByCategory] = useState([]);
    useEffect(() => {
        async function filterSurveys() {
            const surveysByCategory = surveys.filter(function(survey) {
                return survey.categories === category
            })
            setSurveysByCategory(surveysByCategory);
            }
            filterSurveys();
    }, []);


    
    return (
        <div>
            <h1 className='categoryResults'>{category}</h1>
            <Surveys 
            surveys={surveysByCategory}
            />
        </div>
    )
}

export default CategoryResults;