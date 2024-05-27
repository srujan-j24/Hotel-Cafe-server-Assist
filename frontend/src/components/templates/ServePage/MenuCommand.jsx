import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";
import { handler } from "tailwindcss-animate";


function MenuCommand({className}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const [item, setItem] = useState(false);
    const inputRef = useRef(null);
    const btnRef = useRef(null);
    const menu  = [
  "Butter Chicken",
  "Tandoori Chicken",
  "Dosa",
  "Idli",
  "Samosa",
  "Palak Paneer",
  "Dal Makhani",
  "Biryani",
  "Naan",
  "Roti",
  "Vada",
  "Pav Bhaji",
  "Chole Bhature",
  "Aloo Gobi",
  "Rajma Masala",
  "Gulab Jamun",
  "Jalebi",
  "Rasmalai",
  "Samosa Chaat",
  "Chicken Tikka Masala",
  "Saag Paneer",
  "Masala Dosa",
  "Chicken 65",
  "Filter Coffee",
  "Aloo Tikki",
  "Bhel Puri",
  "Pani Puri",
  "Dahi Vada",
  "Lassi",
  "Pongal"
];
    const selectItem = (item) =>{
        setOpen(false);
        setValue(item);
        setItem(true);
    }
    const handleInput = (e) =>{
        e.stopPropagation();
        setValue(e.target.value);
        item ? setItem(false) : null;
    }
    const handleClear = () =>{
        setOpen(false);
        setValue('');
        setItem(false);
    }
    const handleBlur = () =>{
    }
    return (
        <>
            <div className={`relative ${className} `}>
                <Input ref={inputRef} onFocus={()=>{setOpen(true)}} onBlur={handleBlur} placeholder="Search Menu" value={value} onChange={handleInput}/>
                <div className={`${open? '':'hidden'} mt-2 absolute max-h-[300px] overflow-y-auto overflow-x-hidden w-full z-10 [&::-webkit-scrollbar]:hidden border rounded-md shadow-lg`}>
                    {
                        menu
                            .filter((item)=>{return item.toLowerCase().includes(value.toLowerCase())})
                            .map(item => (<div className="relative flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 border border-x-0 border-t-0 hover:bg-secondary bg-background" key={item} value={item} onClick={()=>{selectItem(item)}}>{item}</div>))
                    }
                </div>
            </div>
            <div className="flex items-center relative">
                <Button size='s_r' variant='ghost' className="absolute -left-2/3" onClick={handleClear}>
                    <Cross1Icon></Cross1Icon>
                </Button>
                <Button ref={btnRef} disabled={!item}>Add</Button>
            </div>
        </>
    );
}

export default MenuCommand;