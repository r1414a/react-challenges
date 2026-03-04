import { useState } from "react"
import type { Todo } from "../../types/types"

interface AllTodosProp {
    todo: Todo,
    onTaskDone(isChecked: boolean,id: number): void
    onTaskDelete(id:number): void
    onTaskEdit(value:string,id:number): void
}

function AllTodos({ todo, onTaskDone, onTaskDelete,onTaskEdit }: AllTodosProp) {
    const [isEdit, setIsEdit] = useState<boolean>(false);
    return (
        <div className="flex gap-2 space-y-2">
            <input
                type="checkbox"
                checked={todo.isDone}
                onChange={(e) => onTaskDone(e.target.checked,todo.id)}
            />
            {
                isEdit ?
                <input
                    type="text"
                    value={todo.task}
                    onChange={(e) => onTaskEdit(e.target.value, todo.id)}
                    onBlur={() => setIsEdit(false)}
                    className="flex-1 border border-white"
                    autoFocus
                />
                :
                <p style={{ textAlign: 'start' }} className={`flex-1 ${todo.isDone ? 'text-green-600': 'text-white'}`}>
                {todo.task}
            </p>
            }
            

            <button 
                type="button" 
                onClick={() => {
                    setIsEdit(!isEdit);
                    // onTaskEdit(todo.id);
                }}
                className="border border-amber-300 px-2"
            >{isEdit ? 'Done' : 'Edit'}</button>
            <button 
                type="button" 
                onClick={() => onTaskDelete(todo.id)}
                className="border border-amber-300 px-2"
            >Delete-</button>
        </div>
    )
}

export default AllTodos