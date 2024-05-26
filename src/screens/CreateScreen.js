import { useNavigation } from "react-router-dom";
import { Router } from "../types/Types";
import { CreateOption } from "../components/CreateOption";

export const CreateScreen = () => {
    const navigate = useNavigation()

    const onCreateClick = (route) => {
        navigate(route)
    }

    return (
        <div>
            <CreateOption optionName="Create Location" onClick={onCreateClick(Router.createLocation)}/>
            <CreateOption optionName="Create Event" onClick={onCreateClick(Router.createEvent)}/>
        </div>
    )
};
