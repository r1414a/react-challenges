import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const LIMIT = 20

export default function TablePagination({pagination, setPagination, total}){
    return(
        <div className="max-w-4xl w-full mt-2 flex gap-4 justify-end">
            <span className="text-md">{pagination + 1}-{LIMIT + pagination} of {total}</span>
            {/* <div> */}
                <button type="button" className="border cursor-pointer"><IoIosArrowBack size={24}/></button>
                <button type="button" className="border cursor-pointer" onClick={() => setPagination(prev => prev + 20)}><IoIosArrowForward size={24}/></button>
            {/* </div> */}
        </div>
    )
}