import {useEffect, useState} from "react";
import sport from "../assets/Sports.webp"
import EventCard from "../components/EventCard";
import useQuery from "./useQuery";

const useEvents = () => {
    const [events, setEvents] = useState(null)
    const eventsData = useQuery("http://localhost:4000/api/event/events")

    useEffect(() => {
        const processData = () => {
            const temp = (eventsData || []).map((event) => {
            
                const {
                    date,
                    id,
                    location,
                    name,
                } = event

          
                return(
                    <EventCard
                        img={sport}
                        id={id}
                        title={name}
                        date={date}
                        category="sport"
                    />
                )
            })

            setEvents(temp)
        }

        processData()
    }, []);

    return events
}

export default useEvents