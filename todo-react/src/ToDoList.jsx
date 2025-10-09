import React, { useState } from "react";

function ToDoList() {
    // Array of all task objects
    const [tasks, setTasks] = useState([]);
    // Typed text for a new task
    const [newTaskText, setNewTaskText] = useState("");

    function addTask() {
        if (newTaskText.trim() !== "") {
            const newTask = { text: newTaskText, completed: false };
            const updatedTasks = [...tasks, newTask];
            setTasks(updatedTasks);
            setNewTaskText("");
        }
    }

    function deleteTask(taskIndex) {
        const updatedTasks = tasks.filter((_, i) => i !== taskIndex);
        setTasks(updatedTasks);
    }

    function toggleTaskCompleted(taskIndex) {
        const updatedTasks = tasks.map((task, i) => {
            if (i === taskIndex) {
                return { ...task, completed: !task.completed };
            } else {
                return task;
            }
        });
        setTasks(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <input
                type="text"
                placeholder="Add a new task..."
                value={newTaskText}
                onChange={e => setNewTaskText(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') addTask();
                }}
            />
            <button
                type="button"
                className="add-button"
                onClick={addTask}
            >
                Add
            </button>

            <ol>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <input
                            type="checkbox"
                            className="mark-completed-button"
                            checked={task.completed}
                            onChange={() => toggleTaskCompleted(index)}
                        />
                        <span className={`text ${task.completed ? "completed" : "not-completed"}`}>{task.text}</span>
                        <button
                            className="delete-button"
                            onClick={() => deleteTask(index)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default ToDoList;
