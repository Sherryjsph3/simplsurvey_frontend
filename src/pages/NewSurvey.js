
import Form from "../components/Form";
function NewSurvey ({user, existingUser, handleCreateSurvey}) {
    return (
        <div>
            <Form
            handleCreateSurvey={handleCreateSurvey}
            existingUser={existingUser}
            user={user}
            />
        </div>
    )
}

export default NewSurvey;