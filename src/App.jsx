import React, { useState, useEffect } from "react";
const App = () => {
  const MODES = {
    pomodoro: 25 * 60,
    shortBreak: 5 * 60, 
  };

  const [currentMode, setCurrentMode] = useState("pomodoro"); 
  const [timeLeft, setTimeLeft] = useState(MODES[currentMode]); 
  const [isRunning, setIsRunning] = useState(false); 
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState(""); 
  useEffect(() => {
    setTimeLeft(MODES[currentMode]);
    setIsRunning(false);
  }, [currentMode]);
  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      alert(`${currentMode === "pomodoro" ? "Time to take a break!" : "Time to focus!"}`);
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };
  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };
  return (
    <div className="text-center font-sans mt-12">
      <h1 className="text-3xl font-bold mb-8">Pomodoro Timer</h1>
      <div className="mb-6">
        <button
          onClick={() => setCurrentMode("pomodoro")}
          className={`px-4 py-2 mx-2 rounded ${currentMode === "pomodoro" ? "bg-red-700 text-white" : "bg-gray-300"}`}
        >Pomodoro
        </button>
        <button
          onClick={() => setCurrentMode("shortBreak")}
          className={`px-4 py-2 mx-2 rounded ${currentMode === "shortBreak" ? "bg-green-500 text-white" : "bg-gray-300"}`}
        >
          Short Break
        </button>
      </div>
      <div className="text-6xl font-mono mb-6">{formatTime(timeLeft)}</div>
      <button
        onClick={() => setIsRunning(!isRunning)}
        className={`px-6 py-2 rounded text-white ${isRunning ? "bg-red-500" : "bg-green-500"}`}
      >
        {isRunning ? "Pause" : "Start"}
      </button>
      <button
        onClick={() => setTimeLeft(MODES[currentMode])}
        className="ml-4 px-6 py-2 rounded bg-red-700 text-white"
      >
        Reset
      </button>
      <h2 className="text-2xl font-semibold mt-10">Tasks</h2>
      <form onSubmit={handleAddTask} className="mt-4 mb-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="px-4 py-2 w-80 border rounded mr-4"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Task
        </button>
      </form>
      <ul className="space-y-4">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="bg-gray-100 px-4 py-2 flex justify-between items-center rounded shadow-sm"
          >
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
