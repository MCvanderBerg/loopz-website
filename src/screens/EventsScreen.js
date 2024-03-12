import sportsImage from "../assets/Sports.webp"
import comefyImage from "../assets/Comedy.webp"
import {useEffect, useState} from "react";
import bullvsShark from "../assets/bullsVSSharks.jpeg";
import daveChappelleShow from "../assets/daveChappelleShow.webp"
import "./EventsScreen.css";
import { useQuery, useEvents } from "../hooks/customHooks"



const EventsScreen = () => {
    const events = useEvents()

    return (
        <div className="MainContent">
            {events && events.length > 0 ? (
                events.map((event, index) => (
                    <div key={index}>
                        {/* Render each event */}
                        {event}
                    </div>
                ))
            ) : (
                <p>No events available</p>
            )}
        </div>
    )
}


export default EventsScreen;