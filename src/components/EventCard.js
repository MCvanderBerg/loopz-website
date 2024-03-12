import "./EventCard.css"

const EventCard = ({ id, img, title, category, date }) => {

    return (
        <div key={id} className="eventCard">
            <img src={img} alt="" className="eventImage"/>
            <div className="eventInfo">
                <p className="eventText">{title}</p>
                <p className="eventText">{category}</p>
                <p className="eventText">{date}</p>
            </div>
        </div>

    )
}

export default EventCard;