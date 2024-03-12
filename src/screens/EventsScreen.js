import sportsImage from "../assets/Sports.webp"
import comefyImage from "../assets/Comedy.webp"
import {useEffect, useState} from "react";
import bullvsShark from "../assets/bullsVSSharks.jpeg";
import daveChappelleShow from "../assets/daveChappelleShow.webp"
import EventCard from "../components/EventCard";
import "./EventsScreen";

const eventsData = [
    {
        id: 1,
        title: "Bulls vs Sharks",
        category: "Sports",
        img:  bullvsShark
    },
    {
        id: 2,
        title: "Dave Chappelle",
        category: "Comedy",
        img:  daveChappelleShow
    },
    {
        id: 3,
        title: "Drinks at peer",
        category: "Social",
        img:  comefyImage
    },
    {
        id: 4,
        title: "Bulls vs Sharks",
        category: "Sports",
        img:  sportsImage
    },
];


const EventsScreen = () => {

    const [events, setEvents] = useState(null)

    useEffect(() => {
        const eventsJSX = eventsData.map(event => {
            return (
                    <EventCard
                        title={event.title}
                        id={event.id}
                        category={event.category}
                        img={event.img}/>
            )
        })

        setEvents(eventsJSX)
    }, []);


    return (
        <div className="MainContent">
            {events && events.map(event => event)}
        </div>
    )
}


export default EventsScreen;