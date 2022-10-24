import React, { useCallback, useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import { useHttp } from './hooks/use-http';

function App() {
	// const [isLoading, setIsLoading] = useState(false);
	// const [error, setError] = useState(null);
	const [tasks, setTasks] = useState([]);

	const applyData = (data) => {
		const loadedTasks = [];

		for (const taskKey in data) {
			loadedTasks.push({ id: taskKey, text: data[taskKey].text });
		}

		setTasks(loadedTasks);
	};

	const { sendRequest: fetchTasks, isLoading, error } = useHttp();

	useEffect(() => {
		console.log('test');
		fetchTasks({ url: 'https://react-tutorial-4b8c0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', method: 'get' }, applyData);
	}, [fetchTasks])

	const refreshTasks = () => {
		fetchTasks({ url: 'https://react-tutorial-4b8c0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json', method: 'get' }, applyData);
	}


	// const fetchTasks = async (taskText) => {
	//   setIsLoading(true);
	//   setError(null);
	//   try {
	//     const response = await fetch(
	//       'https://react-tutorial-4b8c0-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'
	//     );

	//     if (!response.ok) {
	//       throw new Error('Request failed!');
	//     }

	//     const data = await response.json();

	//     const loadedTasks = [];

	//     for (const taskKey in data) {
	//       loadedTasks.push({ id: taskKey, text: data[taskKey].text });
	//     }

	//     setTasks(loadedTasks);
	//   } catch (err) {
	//     setError(err.message || 'Something went wrong!');
	//   }
	//   setIsLoading(false);
	// };

	// useEffect(() => {
	//   fetchTasks();
	// }, []);

	const taskAddHandler = (task) => {
		setTasks((prevTasks) => prevTasks.concat(task));
	};

	return (
		<React.Fragment>
			<NewTask onAddTask={taskAddHandler} />
			<Tasks
				items={tasks}
				loading={isLoading}
				error={error}
				onFetch={refreshTasks}
			/>
		</React.Fragment>
	);
}

export default App;
