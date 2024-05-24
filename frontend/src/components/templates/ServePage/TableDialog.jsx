import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";


function TableDialog(props, ref) {
    const tableNo = useSelector(state => state.currentTable);
    const inputRef = useRef(null);
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="hidden" ref={ref}>serve</Button>
            </DialogTrigger>
                <DialogContent className="w-[90vw] rounded">
                    <DialogHeader>
                        <DialogTitle className="pb-2">
                            Table : {tableNo.toString().padStart(3, '0')}
                        </DialogTitle>
                        <DialogDescription className="flex items-center space-x-4 justify-center">
                            <span>People : 4</span>
                            <span> | </span>
                            <span>Total : 240</span>
                        </DialogDescription>
                        <Separator/>
                        <div className="flex gap-2 text-lg pt-2">
                            <div className=" flex grow relative items-center">
                                <Input className="text-lg" ref={inputRef}/> 
                                <Button className="shadow-none absolute right-1 bg-primary-background rounded-full " size="s_r" variant="ghost" onClick={()=>{inputRef.current.value = '';inputRef.current.focus()}}>
                                    <Cross1Icon />
                                </Button>
                            </div>
                            <Button>Add</Button>
                        </div>
                    </DialogHeader>
                    <ScrollArea className="h-[55svh]">
                        
                    </ScrollArea>
                </DialogContent>
        </Dialog>
    );
}

export default React.forwardRef(TableDialog);