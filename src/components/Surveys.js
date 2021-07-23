import Survey from "./Survey";

function Surveys({ surveys }) {
    return (
        <div>
            {surveys.map(survey =>

                <div>
                    <Survey
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