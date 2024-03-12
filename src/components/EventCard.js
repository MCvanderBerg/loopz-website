import "./EventCard.css"

const EventCard = ({ id, img, title, category }) => {

    return (
        <div key={id} className="eventCard">
            <img src={img} alt="" className="eventImage"/>
            <div className="eventInfo">
                <p className="eventText">{title}</p>
                <p className="eventText">{category}</p>
            </div>
        </div>

    )
}

export default EventCard;