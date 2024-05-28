import { Button } from "../ui/button";
import { newTable } from "@/store/tableSlice";
import { useDispatch } from "react-redux";
function AddTable({className}) {
    const dispatch = useDispatch();
    const handleClick = ()=>{
        dispatch(newTable());
    }
    return (
        <>
            <Button className={`${className}`} variant='ghost' onClick={handleClick}>Add Table</Button>
        </>
    );
}

export default AddTable;