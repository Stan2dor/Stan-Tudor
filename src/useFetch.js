import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
          fetch(url)
            .then((res) => {
              console.log(res);
              if (!res.ok) {
                throw Error("couldnt fetch the data");
              }
              return res.json();
            })
            .then((data) => {
              // console.log(data);
              setData(data);
              setIsLoading(false);
              setError(null);
            })
            .catch((err) => {
              setIsLoading(false);
              setError(err.message);
            });
        }, 1000);
      }, [url]);

      return { data, setIsLoading, error }
}
 
export default useFetch;