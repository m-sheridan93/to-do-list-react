import {useState} from "react";
import './App.css'

function App() {
    const [todoList, setTodoList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        const newTodoList = [...todoList, newTask]; // allows to expand an array or object into individual elements.
        setTodoList(newTodoList);
        setNewTask(''); // Clear the input field
        console.log(JSON.stringify(todoList))
    };

    return (
        <main>
            <h1>To-Do</h1>
            {
                <label>
                    <input name="myInput" placeholder="Add a To-Do Here"/>
                    <button type="submit" onClick={addTask}>Add</button>
                    <br/>
                    <ul>
                        <li>{todoList}</li>
                    </ul>
                </label>
            }
        </main>
    );
}

export default App;
