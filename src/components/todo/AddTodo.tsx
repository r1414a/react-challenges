import type { Add_todo } from "../../types/types";

interface AddTodoProp {
    onAddTodo: Add_todo;
    text: string;
    onChange(e: React.ChangeEvent<HTMLInputElement>):void;
}

function AddTodo({onAddTodo, text, onChange}: AddTodoProp) {
    
  return (
    <form onSubmit={(e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        onAddTodo(text)
    }} className="space-x-2">
        <input
            type="text"
            value={text}
            onChange={onChange}
            className="border text-white"
            placeholder="Add a task to do...."
            required
        />
        <button type="submit" className="border border-amber-300 px-2"> Add +</button>
    </form>
  )
}

export default AddTodo