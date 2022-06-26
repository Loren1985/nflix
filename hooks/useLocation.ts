import { useEffect, useState } from "react";

const useLocation = () => {
  const [country, setCountry] = useState(``);
  const [error, setError] = useState<boolean | any>(false);
  const [loading, setLoading] = useState(false);
  const api = `https://api.country.is`;

  useEffect(() => {
    let cancelled = false;
    const fetchAPI = async () => {
      try {
        setLoading(true);
        const res = await fetch(api);

        if (!res.ok) {
          throw Error(res.statusText);
        }

        const response = await res.json();

        if (response && response.country && !cancelled)
          setCountry(response.country);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAPI();

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { country, error, loading };
};

export default useLocation;
