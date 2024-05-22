/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

function Header() {
    const ClientName = "Roll's Corner";
    const [nav, setNav] = useState(false)
    useEffect(()=>{
        // setNav(true)
    }, [])
    return (
        <>
            <nav className="flex bg-primary w-full items-center mt-0 sm:px-6  px-4 h-12">
                <h1 className="font-semibold text-foreground text-2xl">{ClientName}</h1>
                { nav && 
                <Sheet>
                    <SheetTrigger asChild className="ml-auto  transition-all">
                        <Button variant='ghost' size='icon' className='transition-all'>
                            <HamburgerMenuIcon className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle className='flex gap-2 items-center'>
                                <Avatar className=''>
                                    <AvatarImage src='https://avatars.githubusercontent.com/u/111697674?v=4' alt=''/>
                                    <AvatarFallback>AD</AvatarFallback>
                                </Avatar>
                                Navigate
                            </SheetTitle>
                            <Separator/>
                        </SheetHeader>
                        <SheetFooter></SheetFooter>
                    </SheetContent>
                </Sheet>
                }       
            </nav>
        </>
    );
}

export default Header;