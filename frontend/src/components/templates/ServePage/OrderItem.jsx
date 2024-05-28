import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";

function OrderItem({name, key, price, quantity}) {
    return (
        <TableRow key={key}>
            <TableCell>{name}</TableCell>
            <TableCell className="flex items-center space-x-2">
                <Button size='min' variant='ghost' className="bg-red-300 hover:bg-red-200 p-[1px]">
                    <TriangleLeftIcon/>
                </Button>
                <span>2</span>
                <Button size='min' variant='ghost' className="bg-green-300 hover:bg-green-200 p-[1px]">
                    <TriangleRightIcon/>
                </Button>
            </TableCell>
            <TableCell>{price * quantity}</TableCell>
        </TableRow>
    );
}

export default OrderItem;