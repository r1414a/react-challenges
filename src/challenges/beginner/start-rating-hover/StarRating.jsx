import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function StarRating() {
    const [rating, setRating] = useState(0); //select rating on click
    const [hover, setHover] = useState(0); //this is just to show on hover star
    console.log("rating", rating, "hover", hover);

    return (
        <div className="flex p-4">
            {
                [...Array(5)].map((_, i) => {
                    const value = i + 1;
                    console.log(value)
                    const isActive = value <= (rating || hover);
                    return (
                        <span
                            key={i}
                            className="cursor-pointer transition-all hover:scale-120"
                            style={{ color: isActive ? "#ffc107" : "#ccc" }}
                            onClick={() => setRating(value)}
                            onMouseEnter={() => setHover(value)}
                            onMouseLeave={() => setHover(0)}
                            title={`${value} stars`}
                        >
                            {
                                isActive ? <FaStar size={30} /> : <FaRegStar size={30} />
                            }
                        </span>
                    )
                })
            }
        </div>
    )
}