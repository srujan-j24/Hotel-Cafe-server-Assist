/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { additem } from "@/store/tableSlice";


function MenuCommand({className}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState({name: '', price: 0});
    const [item, setItem] = useState(false);
    const inputRef = useRef(null);
    const btnRef = useRef(null);
    const dispatch = useDispatch();
    const menu = useSelector(state => state.menu.foods);
    const selectItem = (item) =>{
        setOpen(false);
        setValue(item);
        setItem(true);
    }
    const handleInput = (e) =>{
        e.stopPropagation();
        setValue({name: e.target.value, price: 0});
        item ? setItem(false) : null;
    }
    const handleClear = () =>{
        setOpen(false);
        setValue({name: '', price: 0});
        setItem(false);
    }
    const handleBlur = () =>{
        setTimeout(()=>{setOpen(false)}, 300)
    }

    const handleAdd = () =>{
        dispatch(additem({...value, quantity: 1}));
    }
    return (
        <>
            <div className={`relative ${className} `}>
                <Input ref={inputRef} onBlur={handleBlur} onFocus={()=>{setOpen(true)}}  placeholder="Search Menu" value={value.name} onChange={handleInput}/>
                <div className={`${open? '':'hidden'} mt-2 absolute max-h-[300px] overflow-y-auto overflow-x-hidden w-full z-10 [&::-webkit-scrollbar]:hidden border rounded-md shadow-lg`}>
                    {
                        menu
                            .filter((item)=>{return item.name.toLowerCase().includes(value.name.toLowerCase())})
                            .map(item => (<div className="relative flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 border border-x-0 border-t-0 hover:bg-secondary bg-background " key={item.name} value={item.name} onClick={()=>{selectItem(item)}}>{item.name}</div>))
                    }
                </div>  
            </div>
            <div className="flex items-center relative">
                <Button size='s_r' variant='ghost' className="absolute -left-2/3" onClick={handleClear}>
                    <Cross1Icon></Cross1Icon>
                </Button>
                <Button ref={btnRef} disabled={!item} onClick={handleAdd}>Add</Button>
            </div>
        </>
    );
}

export default MenuCommand;