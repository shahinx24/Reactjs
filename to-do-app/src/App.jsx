import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  function addTask() {
    if (task.trim() === "") return;
    const newTask = { id: Date.now(), text: task };
    setTasks([...tasks, newTask]);
    setTask("");
  }

  function deleteTask(id) {
    const updated = tasks.filter((item) => item.id !== id);
    setTasks(updated);
  }

  function markDone(id) {
    const doneTask = tasks.find((item) => item.id === id);
    if (!doneTask) return;

    setTasks(tasks.filter((item) => item.id !== id));
    setCompletedTasks([...completedTasks, doneTask]);
  }

  function deleteCompleted(id) {
    const updated = completedTasks.filter((item) => item.id !== id);
    setCompletedTasks(updated);
  }

  return (
    <div className="div0">
      <nav className="navbar navbar-dark bg-dark">
        <div className="div1">
          <h1 className="navbar h1navbar-brand text-white">Todo App 📃</h1>
        </div>
      </nav>
 
      <div className="div2">
        <div className="div3">
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <button className="btn btn-primary mt-2" onClick={addTask}>
            Add Task
          </button>
        </div>

        <h3 className="mt-4">Tasks</h3>
        <ul className="div4">
          {tasks.map((item) => (
            <li key={item.id} className="div5">
              <span>{item.text}</span>
              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => markDone(item.id)}
                >
                  Done
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteTask(item.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-4">Completed Tasks</h3>
        {completedTasks.length === 0 ? (
          <p>No tasks completed yet</p>
        ) : (
          <ul className="div6">
            {completedTasks.map((item) => (
              <li key={item.id} className="div5">
                <span className="text-decoration-line-through">
                  {item.text}
                </span>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteCompleted(item.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default App;