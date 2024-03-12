import {ArrowBack} from "@mui/icons-material";
import "../App.css"
import {useNavigation} from "../context/NavigationContext";
import {useNavigate} from "react-router-dom";


const GoBackButton = () => {
    const navigate = useNavigate()
    return (
        <div
            onClick={() => {
                navigate(-1)
            }}
            className="goBackButton">
            <ArrowBack/>
        </div>
    )
}


export default GoBackButton;