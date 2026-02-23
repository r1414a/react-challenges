import { useState } from "react";
import DeleteTodo from "./DeleteTodo"
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa6";

export default function ShowTodo({ allTodos, deleteTask, updateTask, taskComplete }) {
    const [editTodo, setEditTodo] = useState(null);

    return (
        <div className="space-y-2 w-full">
            {
                allTodos.map((todo) => (
                    <div key={todo.id} className="flex items-center gap-4">
                        {
                            todo.id === editTodo
                                ?
                                <input 
                                    autoFocus 
                                    value={todo.task} 
                                    onChange={({target: {value}}) => updateTask(todo.id,value)}
                                    onBlur={() => setEditTodo(null)}
                                    className="w-full border text-white text-sm p-1" />
                                :
                                <>
                                <input
                                    type="checkbox"
                                    // value={todo.done}
                                    checked={todo.done}
                                    onChange={(e) => taskComplete(e,todo.id)}
                                />
                                <p className={`${todo.done ? 'bg-green-600 text-white' : 'bg-white text-black'}  flex-1 p-1 text-sm`}>{todo.task}</p>
                                </>
                        }

                        <button onClick={() => setEditTodo(todo.id)} className="bg-red-600 p-1 rounded-xs">{
                            todo.id === editTodo ? <FaCheck size={15} /> : <MdEdit size={15} />}</button>
                        <DeleteTodo id={todo.id} deleteTask={deleteTask} />
                    </div>
                ))
            }
        </div>
    )
}