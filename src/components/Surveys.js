import Survey from "./Survey";

function Surveys ({surveys}) {
    return (
        <div>
            <h1>Surveys</h1>
            <Survey 
            surveys={surveys}
            />
            
        </div>
    )
}

export default Surveys;