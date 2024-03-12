import {useEffect, useState} from "react";

const useQuery = (url) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const query = () => {
            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Failed to fetch from ${url}`)
                    }
                    return response.json()
                })
                .then(result => {
                    setData(result)
                })
                .catch(error => {
                    console.log(error)
                })
        }

        query()
    }, []);

    return data
}

export default useQuery;