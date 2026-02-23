import { MdClose } from "react-icons/md"

export default function DeleteTodo({id,deleteTask}){
    return(
        <button onClick={() => deleteTask(id)} className="bg-red-600 p-1 rounded-xs"><MdClose size={15}/></button>
    )
}