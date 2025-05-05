import { useState } from "react";
import Task from "./Task";
export default function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Jugar a la pelota", completed: true },
    { id: 2, name: "Viciar al Fortnite", completed: false },
    { id: 3, name: "Ir al gym", completed: true },
    { id: 4, name: "Pasear al perro", completed: false },
    { id: 5, name: "Escuchar musica", completed: true },
  ]);
  const completar = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      } else {
        return task;
      }
    });

    setTasks(newTasks);
  };
  return (
    <>
      <h1 className="centrar">Lista de Tareas</h1>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onClick={() => completar(task.id)}
        ></Task>
      ))}
    </>
  );
}
