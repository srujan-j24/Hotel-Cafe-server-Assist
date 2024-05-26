import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Cross1Icon, MinusCircledIcon, PlusCircledIcon, TriangleDownIcon, TriangleUpIcon } from "@radix-ui/react-icons";
import { useSelector } from "react-redux";
import MenuCommand from "./MenuCommand";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


function TableDialog(props, ref) {
    const tableNo = useSelector(state => state.currentTable);
    useEffect(()=>{
        console.log(tableNo) 
    }, [tableNo])
    const inputRef = useRef(null);
    // const menu = ["hello", 'hi', 'bye', 'bi', 'fa', 'fasiu', 'fasklf', 'fasf', 'fa;lkf', 'fas;l', 'faslfk', 'fasf', 'faslk', 'fask', 'fasfsa', 'jvbask', 'fafasnva','fasiun', 'fasflkj', 'fasflk'];
    const menu = []
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
                        <div className="flex gap-2 text-lg items-start">
                            <MenuCommand className='grow'></MenuCommand>
                        </div>
                    </DialogHeader>
                    <ScrollArea className="h-[55svh]">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='w-7/12'>Items</TableHead>
                                    <TableHead>Quantity</TableHead>
                                    <TableHead>Price</TableHead>
                                    <TableHead></TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Paneer cheese roll</TableCell>
                                    <TableCell>2</TableCell>
                                    <TableCell>90</TableCell>
                                    <TableCell><TriangleUpIcon/><TriangleDownIcon/></TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </DialogContent>
        </Dialog>
    );
}

export default React.forwardRef(TableDialog);