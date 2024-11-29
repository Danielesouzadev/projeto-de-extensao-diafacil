import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import { v4 } from "uuid";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const calculateTotalValue = () => {
      const total = tasks.reduce(
        (acc, task) => acc + parseFloat(task.valor || 0),
        0
      );
      setTotalValue(total);
    };
    calculateTotalValue();
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description, data, valor) {
    const newTask = {
      id: v4(),
      title,
      description,
      data,
      valor: parseFloat(valor) || 0,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w.screen h-screen bg-fuchsia-900 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          DiaFácil
        </h1>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
        <div className="bg-slate-200 p-4 rounded-md shadow text-center">
          <p className="text-slate-600 text-lg font-bold">
            Valor total dos serviços: R$ {totalValue.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
