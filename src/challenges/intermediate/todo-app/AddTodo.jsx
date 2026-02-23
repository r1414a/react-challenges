export default function AddTodo({addTask, value, onChange}){
    
    return(
        <>
        <form onSubmit={addTask}>
        <input
            id="todo-text"
            type="text"
            className="border placeholder:text-sm"
            value={value}
            onChange={onChange}
            placeholder="Add some task...."
        />
        <button type="submit" className="bg-white text-black py-0.5 ms-2 px-2" 
        >Add task</button>
        </form>

        
        </>
    )
}