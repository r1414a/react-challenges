import { useState } from "react"
import AccordianItem from "./AccordianItem";


const ACCORDIAN = {
    "Types": "Major types include piano accordions (keyboard), chromatic button accordions, and diatonic accordions.",
    "Mechanism": "The sound is created by air flowing through metal tongues (reeds), with the bellows acting similarly to a bow on a string instrument.",
    "History": "Patented in 1829 by Cyrill Demian in Vienna, though earlier versions were developed by Friedrich Buschmann in 1822.",
    "Structure": "It consists of a right-hand melody section, a left-hand bass/chord section, and bellows.",
    "Usage": "It is used globally in both classical and modern music, with smaller, lighter versions available for beginners."
}

export default function Accordian() {
    const [accOpen, setAccOpen] = useState("Types")
    console.log(accOpen);

    return (
        <div className="p-4 space-y-4">
            
            {
                Object.entries(ACCORDIAN).map(([k, v]) => (

                    <AccordianItem
                        key={k}
                        title={k}
                        content={v}
                        isOpen={accOpen === k}
                        onToggle={() => setAccOpen(prev => prev === k ? null : k)}
                    />
                    // <details key={k} open={accOpen === k}>
                    //     <summary 
                    //     className="bg-black p-2" 
                    //     onClick={(e) => {
                    //         e.preventDefault();
                    //         setAccOpen(prev => prev === k ? null : k)
                    //         }}>{k}</summary>
                    //     <p className="bg-white text-black p-2">
                    //         {v}
                    //     </p>
                    // </details>
                ))
            }
        </div>
    )
}