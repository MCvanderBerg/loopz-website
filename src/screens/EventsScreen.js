import sportsImage from "../assets/Sports.webp"
import comefyImage from "../assets/Comedy.webp"
import {useEffect, useState} from "react";
import bullvsShark from "../assets/bullsVSSharks.jpeg";
import daveChappelleShow from "../assets/daveChappelleShow.webp"
import "./EventsScreen.css";
import { useQuery, useEvents } from "../hooks/customHooks"


const EventsScreen = () => {
    const [events, setEvents] = useState(null)
    
    useEvents(setEvents)

    if ((events || []).length == 0) {
        return <>Nothing to show</>
    }


    return (
        <div className="MainContent">
            {events.map((event, index) => (
                <div key={index}>
                    {/* Render each event */}
                    {event}
                </div>
            ))}
        </div>
    )
}


export default EventsScreen;