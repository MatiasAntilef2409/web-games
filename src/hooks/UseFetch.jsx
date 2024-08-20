import { useEffect, useState } from "react";

function UseFetch({ url }) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [controller, setController] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();
    setController(abortController);

    const promise = fetch(
      url,
      { signal: abortController.signal },
      { mode: "no-cors" }
    );

    promise
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => {
        if (err.name == "AbortError") {
          console.log("Peticion cancelada");
        } else {
          setError(err);
        }
      })
      .finally(() => setIsLoading(false));

    return () => abortController.abort();
  }, [url]);

  const handleCancelRequest = () => {
    if (controller) {
      controller.abort();
      setError("Request canceled");
    }
  };

  return { data, isLoading, error, handleCancelRequest };
}

export default UseFetch;
