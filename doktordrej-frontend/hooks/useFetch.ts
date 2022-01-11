import { useEffect, useState } from "react"

const useFetch = (url: string) => {
    const baseUrl = "https://doktordrej-backend.herokuapp.com"

    const [data, setData] = useState<any>()
    const [error, setError] = useState<any>()
    const [loading, setLoading] = useState(false)
    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true)
            try {
                const res = await fetch(baseUrl+ url);
                const json = await res.json();

                setData(json)
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false)

            }
        }
        fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return {data , error, loading}
}
export default useFetch