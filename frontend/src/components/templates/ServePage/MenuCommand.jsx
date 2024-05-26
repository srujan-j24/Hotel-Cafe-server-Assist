import { Button } from "@/components/ui/button";
import { Command, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useRef, useState } from "react";


function MenuCommand() {
    const [open, setOpen] = useState(false);
    // const [value, setValue] = useState("");
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
            {/* <div className={`relative w-96 flex items-center bg-secondary`} onBlur={()=>{}}>
                <Input className='w-full text-lg bg-white z-10' ref={inputRef} onFocus={()=>{setOpen(true)}} ></Input>
                <Button className="shadow-none absolute right-1 bg-primary-background rounded-full z-20 " size="s_r" variant="ghost" onClick={()=>{inputRef.current.value = '';inputRef.current.focus()}}>
                    <Cross1Icon />
                </Button>
                <div className={`${open? '': 'hidden'}  border bg-background absolute w-full top-0 rounded-md`}>
                    <ScrollArea className=" max-h-[20rem] pt-9 box-content w-full rounded-md">
                        {
                            menu.map(item => (<div key={item}>{item}</div>))
                        }
                    </ScrollArea>
                </div>
            </div> */}
            <div className="relative grow ">
                <Command>
                    <CommandInput onFocus={()=>{setOpen(true)}} onBlur={()=>{setOpen(false)}}/>
                    {open && 
                        <CommandList className="absolute z-50 w-full top-full [&::-webkit-scrollbar]:hidden"> {
                                menu.map(item => (<CommandItem key={item}>{item}</CommandItem>))
                            }
                        </CommandList>
                    }
                </Command>
            </div>
            <Button>Add</Button>
        </>
    );
}

export default MenuCommand;