import Survey from "./Survey";

function Surveys({ surveys, answerOptions }) {
    return (
        <div>
            {surveys.map(survey =>
                <Survey
                    key={survey.id}
                    survey={survey}
                    answerOptions={answerOptions}
                />
            )}
        </div>
    );
}

export default Surveys;