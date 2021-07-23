import Survey from "./Survey";

function Surveys({ surveys, getSurveys }) {
    return (
        <div>
            {surveys.map(survey =>

                <div>
                    <Survey
                        getSurveys={getSurveys}
                        key={survey.id}
                        survey={survey}
                    />
                </div>
            )
            }
        </div >
    );
}

export default Surveys;