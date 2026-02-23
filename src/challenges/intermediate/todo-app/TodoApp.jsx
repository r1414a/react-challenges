import { useMemo, useRef, useState } from "react"
import ShowTodo from "./ShowTodo"
import AddTodo from "./AddTodo"

const ALLTODOS = [
    {
        id: 1,
        task: 'Go for walk',
        done: false
    },
    {
        id: 2,
        task: 'Feed cat',
        done: false
    },
    {
        id: 3,
        task: 'Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.',
        done: true
    }
]

export default function TodoApp() {
    const [allTodos, setAllTodos] = useState(ALLTODOS);
    const [userText, setUserText] = useState('');
    const [status,setStatus] = useState('all');

    function handleAddTodo(e) {
        e.preventDefault();
        let todo = userText.trim()
        if (!todo) return;
        const newId = allTodos.length > 0 ? allTodos[allTodos.length - 1].id + 1 : 1

        setAllTodos(prev => [...prev, { id: newId, task: todo, done: false }])
        setUserText('')
    }

    function updateTask(id, text) {
        let todo = text.trim()
        if (!todo) return;
        const newTodo = allTodos.map((todo) => todo.id === id ? { ...todo, task: text } : todo)
        setAllTodos(newTodo)
    }

    function deleteTask(id) {
        const newTodo = allTodos.filter(todo => todo.id !== id);
        setAllTodos(newTodo);
    }

    function taskComplete(e, id) {
        const check = e.target.checked;
        const newTodo = allTodos.map((todo) => todo.id === id ? { ...todo, done: check } : todo);
        setAllTodos(newTodo)
    }

    const filteredTodos = useMemo(() => {
        return allTodos.filter((item) => {
            if(status === 'active') return !item.done;
            if(status === 'completed') return item.done;
            return true;
        })
    },[status, allTodos])

 
    console.log(allTodos);

    return (
        <div className="p-4 space-y-4">
            <div className="flex items-center gap-2">
                <AddTodo
                    addTask={handleAddTodo}
                    value={userText}
                    onChange={(e) => setUserText(e.target.value)}
                />
                <label htmlFor="status">Status:</label>
                <select 
                    name="status" 
                    id="status" 
                    className="border"
                    value={status}
                    onChange={({target:{value}}) => setStatus(value)}
                >
                    {
                        ["all", "active", "completed"].map(s => (
                            <option key={s} value={s} className="text-black">{s}</option>
                        ))
                    }
                </select>
            </div>
            <ShowTodo allTodos={filteredTodos} taskComplete={taskComplete} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
    )
}