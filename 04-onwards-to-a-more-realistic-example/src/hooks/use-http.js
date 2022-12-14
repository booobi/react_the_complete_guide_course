import { useCallback, useState } from "react";

export const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendRequest = useCallback(async (requestConfig, applyDataFn) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(
                requestConfig.url, { method: requestConfig.method, headers: requestConfig.headers, body: JSON.stringify(requestConfig.body) }
            );

            if (!response.ok) {
                throw new Error('Request failed!');
            }

            const data = await response.json();

            applyDataFn(data);

        } catch (err) {
            setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    }, []);

    return { sendRequest, isLoading, error, }
}