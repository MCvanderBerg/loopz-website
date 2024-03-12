import {useEffect, useState} from "react";
import sport from "../assets/Sports.webp"
import EventCard from "../components/EventCard";
import useQuery from "./useQuery";
import baseUrl from "../configs/connect"

const useEvents = (setEvents) => {
    const eventsData = useQuery(`${baseUrl}/event/events`)
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
    }, [eventsData]);
}

export default useEvents