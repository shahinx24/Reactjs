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

  function deleteItem(id, type) {
  if (type === "task") {
    setTasks(tasks.filter((t) => t.id !== id));
  } else if (type === "completed") {
    setCompletedTasks(completedTasks.filter((t) => t.id !== id));
  }
}

  function Done(id) {
    const doneTask = tasks.find((item) => item.id === id);
    if (!doneTask) return;

    setTasks(tasks.filter((item) => item.id !== id));
    setCompletedTasks([...completedTasks, doneTask]);
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
        <ul className="ul1">
          {tasks.map((item) => (
            <li key={item.id} className="li">
              <span>{item.text}</span>
              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => Done(item.id)}
                >
                  Done
                </button>
                <button className="btn btn-danger btn-sm" onClick={() => deleteItem(item.id, "task")}>Delete</button>
              </div>
            </li>
          ))}
        </ul>

        <h3 className="mt-5">Completed Tasks</h3>
        {completedTasks.length === 0 ? (
          <p className="p">No tasks completed yet</p>
        ) : (
          <ul className="ul2">
            {completedTasks.map((item) => (
              <li key={item.id} className="li">
                <span>
                  {item.text}
                </span>
                <button className="btn btn-danger btn-sm" onClick={() => deleteItem(item.id, "completed")}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
export default App;