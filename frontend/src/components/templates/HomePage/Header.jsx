/* eslint-disable no-unused-vars */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

function Header(children) {
    //derive from state
    const ClientName = "Roll's Corner"
    const menu = false;
    return (
        <>
            <nav className="flex bg-primary w-full items-center mt-0 sm:px-6 sm:py-2 px-4 py-2 min-h-8">
                <h1 className="font-semibold text-2xl">{ClientName}</h1>
                { menu && 
                <Sheet>
                    <SheetTrigger asChild className="ml-auto  transition-all">
                        <Button variant='ghost' size='icon' className='transition-all'>
                            <HamburgerMenuIcon className="h-6 w-6"/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Navigate</SheetTitle>
                            <Separator/>
                        </SheetHeader>
                        <SheetFooter></SheetFooter>
                    </SheetContent>
                </Sheet>
                }       
                {/* <Avatar className='self-end ml-auto'>
                    <AvatarImage src='https://avatars.githubusercontent.com/u/111697674?v=4' alt=''/>
                    <AvatarFallback>AD</AvatarFallback>
                </Avatar> */}
            </nav>
        </>
    );
}

export default Header;