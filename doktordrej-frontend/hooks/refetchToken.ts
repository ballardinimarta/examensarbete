import { useState } from "react";

export const useRefetchToken = () => {
  const [data, setData] = useState<any>();
  const [error, setError] = useState<any>();

  const refetch = async () => {
    try {
      const res = await fetch(
        `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${process.env.accessToken}`
      );
      const json = await res.json();
      process.env["accessToken"] = json.access_token;
      setData(json.expires_in);
    } catch (error) {
      setError(error);
    }
  };
  return { data, error, refetch };
};
