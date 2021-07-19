import Surveys from "./Surveys";

function Main ({surveys}) {
    return (
        <div>
            <h1>Main</h1>
            <Surveys 
            surveys={surveys}
            />
        </div>

    )
}

export default Main;