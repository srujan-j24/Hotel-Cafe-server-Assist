import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";


function MenuCommand({className}) {
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState("");
    const inputRef = useRef(null);
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
    return (
        <>
            {/* <div className="relative grow" >
                <Command>
                    <CommandInput onFocus={()=>setOpen(true)} ref={inputRef}/>
                        <CommandList className={`absolute z-50 w-full top-full [&::-webkit-scrollbar]:hidden ${open? '': 'hidden'}`}> 
                            {
                                menu.map(item => (<CommandItem className='cmd-item' key={item} value={item} onSelect={(val)=>{setValue(val);inputRef.current.value = val}}>{item}</CommandItem>))
                            }
                        </CommandList>
                </Command>
            </div> */}
            <div className={`relative ${className} `}>
                <Input ref={inputRef} onFocus={()=>{setOpen(true)}} onBlur={()=>setOpen(false)}/>
                <div className={`${open? '':'hidden'} mt-2 absolute max-h-[300px] overflow-y-auto overflow-x-hidden w-full z-10 [&::-webkit-scrollbar]:hidden border rounded-md shadow-lg`}>
                    {
                        menu.map(item => (<div className="relative flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none aria-selected:bg-accent aria-selected:text-accent-foreground data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 border border-x-0 border-t-0 hover:bg-secondary bg-background" key={item} value={item} onSelect={(val)=>{setValue(val);inputRef.current.value = val}}>{item}</div>))
                    }
                </div>
            </div>
            <Button>Add</Button>
        </>
    );
}

export default MenuCommand;