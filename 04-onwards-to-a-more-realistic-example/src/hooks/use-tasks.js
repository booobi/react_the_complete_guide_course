import { useState } from "react";

export const useFetchTasks = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    setIsLoading(true);
    setError(null);
    const response = fetch(
        'https://react-tutorial-4b8c0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
    ).then(r => r.json()).then(data => {
        const loadedTasks = [];

        for (const taskKey in data) {
            loadedTasks.push({ id: taskKey, text: data[taskKey].text });
        }

        setIsLoading(false);

        return loadedTasks;
    }).catch(err => {
        setError(err.message || 'Something went wrong!');
        setIsLoading(false);
    });

    return { isLoading, error, response }
}