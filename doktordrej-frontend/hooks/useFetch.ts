import { useEffect, useState } from "react";
import { useRefetchToken } from "./refetchToken";

const useFetch = (url: string) => {
  let baseUrl: string;

  url.includes("?")
    ? (baseUrl = `https://api.storyblok.com/v2/cdn/stories/${url}&token=${process.env.token}`)
    : (baseUrl = `https://api.storyblok.com/v2/cdn/stories/${url}?token=${process.env.token}`);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState(false);
  const { refetch } = useRefetchToken();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(baseUrl + `&cv=${Date.now()}`);
        const json = await res.json();

        setData(json);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
        refetch();
      }
    };
    fetchData();
  }, [url]);

  return { data, error, loading };
};
export default useFetch;
