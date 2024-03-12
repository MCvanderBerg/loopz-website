import { useEffect, useState } from "react"
import useQuery from "../hooks/useQuery"
import EventCard from "../components/EventCard"
import sport from "../assets/Sports.webp"
import baseUrl from "../configs/connect"
import { useParams } from "react-router-dom"
import GoBackButton from "../components/goBackButton"

const EventDetailScreen = () => {
    const [event, setEvent] = useState(null)
    const { id } = useParams()

   
    const eventData = useQuery(`${baseUrl}/event?id=${id}`)
    useEffect(() => {
        setEvent((eventData || [])[0])
    },[eventData])

    console.log(event)
    console.log((event || []).length === 0)

    if((event || []).length === 0) {
        return(
            <>
                Nothing to show
            </>
        )
    }


    //These are all the values that are available

    // "id": 1,
    // "name": "van der Berg wees fees",
    // "description": "Christiaan en Noeline trou",
    // "date": "2024-02-24T23:42:38.000Z",
    // "created_at": "2024-02-24T23:42:38.000Z",
    // "phone_number": "0760610287",
    // "email_address": "christiaan26c@gmail.com",
    // "location_id": 3,
    // "location": "Morgansvlei Country Estate",
    // "longitude": -33.2913685,
    // "latitude": 19.1140692,
    // "user_id": 1,
    // "user_username": "Seabass"


    // id, img, title, category, date


    return (
        <div>
            <GoBackButton/>
            <p>{event.description}</p>
            <EventCard
                id={event.id}
                category="sport"
                date={event.date}
                img={sport}
                title={event.name}
            />
        </div>
    )
}

export default EventDetailScreen