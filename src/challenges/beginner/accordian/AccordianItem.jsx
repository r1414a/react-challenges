import { FaMinus, FaPlus } from "react-icons/fa"

export default function AccordianItem({title, content, isOpen, onToggle}){
    //to make smooth transition on toggle, we can give height, but we have to give fixed height, but it will not work if content is large, so that's why using grid
    return(
        <div>
            <button onClick={onToggle} className="bg-black w-full flex items-center justify-between p-2">{title} { isOpen ? <FaMinus size={15}/> : <FaPlus size={15}/>}</button>
            <div className={`grid transition-all duration-500 bg-white text-black ${isOpen ? 'grid-rows-[1fr] p-2' : 'grid-rows-[0fr] p-0'}`}>
                <p className="overflow-hidden ">{content}</p>
                </div>
        </div>
    )
}