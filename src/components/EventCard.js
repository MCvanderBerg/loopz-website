import { useNavigate } from "react-router-dom"
import "./EventCard.css"
import { Router } from "../types/Types"

const EventCard = ({ id, img, title, category, date }) => {
    const navigate = useNavigate()
    const onClick = () => {
        navigate(`${Router.EventDetail}/${id}`)
    }

    return (
        <>
            <div key={id} className="eventCard" onClick={onClick}>
                <img src={img} alt="" className="eventImage"/>
                <div className="eventInfo">
                    <p className="eventText">{title}</p>
                    <p className="eventText">{category}</p>
                    <p className="eventText">{date}</p>
                </div>
            </div>
        </>
    )
}

export default EventCard;