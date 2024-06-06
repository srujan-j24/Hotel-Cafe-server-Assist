/* eslint-disable react/prop-types */
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useTheme } from "@/ThemeProvider";

function ThemeToggle({className}) {
    const {setTheme} = useTheme()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className={className}>
                <Button variant='ghost' size='icon' >
                    <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:rotate-0 dark:scale-0"></SunIcon>
                    <MoonIcon className=" absolute h-[1.2rem] w-[1.2rem] rotate-0 scale-0 transition-all dark:rotate-90 dark:scale-100"></MoonIcon >
                    <span className="sr-only">Toggle theme</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem onClick={()=> setTheme('light')}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme('dark')}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={()=> setTheme('system')}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>        
    );
}

export default ThemeToggle;