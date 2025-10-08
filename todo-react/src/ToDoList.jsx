import React, {useState} from "react";

function ToDoList() {
    // create a state variable to store the list of tasks
    const [task, setTask] = useState([]);
    // create a state variable to store the new task
    const [newTask, setNewTask] = useState("");

    function addTask() {
        // check if the new task is not empty
        if (newTask.trim() !== "") {
            // create a new array that is the old task one,
            const newTaskObject = {text: newTask, completed: false}
            const updatedTask = [...task, newTaskObject]
            setTask(updatedTask)
            // clear the input field after adding
            setNewTask("")
        }
    }

    function deleteTask(index) {
        // e.g. task [0, 1], I want to delete item no. 1.
        // index = 1.
        // 0 !== 1 -> true. So the element will be kept.
        // 1 !== 1 -> false. So the element will be removed
        const updatedTask = task.filter((_, i) => {
            return i !== index;
        })
        setTask(updatedTask)
    }

    function markTaskAsCompleted(index) {
        // create a new array that is the old task one,
        const updatedTask = task.map((taskItem, i) => {
            if (i === index) {
                // console.log('taskItem.completed: ' + taskItem.completed)
                return {...taskItem, completed: !taskItem.completed}
            } else {
                // return the original task item
                return taskItem
            }
        })
        setTask(updatedTask)
    }

    return (
        <div className="to-do-list">
            <h1>To Do List</h1>
            <input
                type="text"
                placeholder="Add a new task..."
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                onKeyDown={e => {
                    if (e.key === 'Enter') addTask();
                }}
            />
            <button type="button"
                    className="add-button"
                    onClick={addTask}
            >Add
            </button>

            <ol>{
                // map through tasks and create list items for each task
                task.map((task, index) =>
                    <li key={index}>
                        <input type="checkbox"
                               className="mark-completed-button"
                               onClick={() => markTaskAsCompleted(index)}
                        ></input>
                        <span className={`text ${task.completed ? "completed" : "not-completed"}`}>{task.text}</span>
                        <button className="delete-button"
                                onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                    </li>
                )
            }</ol>
        </div>
    )
}

export default ToDoList;
