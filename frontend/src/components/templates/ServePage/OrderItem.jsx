import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import { useState } from "react";

function OrderItem() {
    let name = 'fried rice';
    let [quantity, setQuantity] = useState(0);
    let price = 60;
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell className="flex items-center space-x-2">
                <Button size='min' variant='ghost' className="bg-red-300 hover:bg-red-200 p-[1px]" onClick={()=>{setQuantity(quantity=>quantity-1)}}>
                    <TriangleLeftIcon/>
                </Button>
                <span>{quantity}</span>
                <Button size='min' variant='ghost' className="bg-green-300 hover:bg-green-200 p-[1px]" onClick={()=>{setQuantity(quantity=>quantity+1)}}>
                    <TriangleRightIcon/>
                </Button>
            </TableCell>
            <TableCell>{price * quantity}</TableCell>
        </TableRow>
    );
}

export default OrderItem;