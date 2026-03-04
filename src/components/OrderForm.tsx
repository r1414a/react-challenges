import { useState } from "react"

interface OrderFormProps {
    onSubmit(order: {name: string; cups: number;}): void;
}

export default function OrderForm({ onSubmit }: OrderFormProps) {
    const [name, setName] = useState<string>("Masala");
    const [cups, setCups] = useState<number>(1);

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>){
        e.preventDefault();
        onSubmit({name,cups})
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name"> Chai Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value
            )} />

            <label htmlFor="cups"> Cups</label>
            <input type="number" value={cups} onChange={(e) => setCups(+e.target.value)} />

            <button type="submit">Submit</button>
        </form>
    )
}
