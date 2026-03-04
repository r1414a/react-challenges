import { useState } from "react"
import type { Add_todo, Todo } from "../../types/types"
import AddTodo from "./AddTodo"
import AllTodos from "./AllTodos"

const TODOS: Todo[] = [
    {id: 1, task: 'Feed cat', isDone: true},
    {id: 2, task: 'Go for walk', isDone: false},
]

export default function TodoWrapper(){
    const [todos, setTodos] = useState<Todo[]>(TODOS);
    const [text, setText] = useState<string>('');

    const handleAddtodo: Add_todo = function(task) {
        setTodos((prev) => [...prev, {id: prev.length > 0 ? prev[prev.length - 1].id + 1 : 1, isDone: false, task}])
        setText('')
    }

    function handleTaskDone(value: boolean,ID: number): void{
        const newTodo = todos.map((t) => t.id === ID ? {...t, isDone: value} : t)
        setTodos(newTodo)
    }

    function handleTaskDelete(ID:number): void{
        const newTodo = todos.filter((t) => t.id !== ID)
        setTodos(newTodo);
    }

    function handleTaskEdit(value:string,ID:number): void{
        const newTodo = todos.map((t) => t.id === ID ? {...t, task: value} : t)
        setTodos(newTodo)
    }
    
    console.log(todos);
    
    return(
        <>
            <AddTodo 
                text={text}
                onChange={e => setText(e.target.value)}
                onAddTodo={handleAddtodo}
            />
            <div className="mt-2 space-y-2">
                {
                    todos.map((todo) => (
                        <AllTodos 
                            key={todo.id} 
                            todo={todo} 
                            onTaskDone={handleTaskDone}
                            onTaskDelete={handleTaskDelete}
                            onTaskEdit={handleTaskEdit}
                        />
                    ))
                }
            </div>
        </>
    )
}