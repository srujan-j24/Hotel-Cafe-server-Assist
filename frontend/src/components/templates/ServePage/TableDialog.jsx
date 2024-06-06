import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { useSelector } from "react-redux";
import MenuCommand from "./MenuCommand";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import OrderItem from "./OrderItem";
import React, { useEffect } from "react";



function TableDialog(props, ref) {
    const tableInfo = useSelector(state => state.table.tables[state.table.currentTableIdx]);
    useEffect(()=>{
        console.log("open");
        return ()=>{console.log("close")}
    }, [])
    return tableInfo &&  (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="hidden" ref={ref}>Serve</Button>
            </DialogTrigger>
                <DialogContent className="w-[90vw] rounded">
                    <DialogHeader>
                        <DialogTitle className="pb-2 text-foreground">
                            Table : {tableInfo.no}
                        </DialogTitle>
                        <DialogDescription className="flex items-center space-x-4 justify-center">
                            <span>People : {tableInfo.people}</span>
                            <span> | </span>
                            <span>Total : {tableInfo.items.reduce((acc, item) => acc + (item.price * item.quantity) , 0)}</span>
                        </DialogDescription>
                        <Separator/>
                        <div className="flex gap-2 text-lg items-center">
                            <MenuCommand className='grow'></MenuCommand>
                        </div>
                    </DialogHeader>
                    <ScrollArea className="h-[55svh]">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead className='w-7/12'>Items</TableHead>
                                    <TableHead className="text-center">Quantity</TableHead>
                                    <TableHead className='text-center'>Price</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {
                                    tableInfo.items.map((item, index)=> <OrderItem key={item.name} item={{...item, index}}></OrderItem>)
                                }
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </DialogContent>
        </Dialog>
    );
}

export default React.forwardRef(TableDialog);