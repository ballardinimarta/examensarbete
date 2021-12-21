import { useEffect, useState } from "react"

const useFetch = (url: string) => {
    const production = process.env.NODE_ENV === "production";

    const baseUrl = production ? "https://www.yoursite.com" : "http://localhost:3001";
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
    }, [url])

    return {data , error, loading}
}
export default useFetch