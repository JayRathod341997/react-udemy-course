import React, { useEffect, useState } from "react";
import Tasks from "./components/Tasks/Tasks";
import NewTask from "./components/NewTask/NewTask";
import useHttp from "./hooks/http-hook";
function App() {
  const [tasks, setTasks] = useState([]);

  const transformData = (dataObj) => {
    const loadedTasks = [];
    console.log(dataObj);
    for (const taskKey in dataObj) {
      loadedTasks.push({ id: taskKey, text: dataObj[taskKey].text });
    }
    setTasks(loadedTasks);
  };

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp({ url: "https://add-new-tasks-default-rtdb.firebaseio.com/tasks.json", },
    transformData
  );

  useEffect(() => {
    fetchTasks();
  }, []);

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
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
