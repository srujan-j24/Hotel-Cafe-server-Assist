/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { recalculate, updateItem } from "@/store/tableSlice";
import { TriangleLeftIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

function OrderItem({item}) {
    const {name, quantity, index, price} = item;
    const dispatch = useDispatch();
    const [decreaseDisabled, setDecreaseDisabled] = useState(true); 
    const decrease = () =>{
        dispatch(updateItem({itemIdx: index, quantity: quantity-1}));
        dispatch(recalculate());
    }
    const increase = () =>{
        dispatch(updateItem({itemIdx: index, quantity: quantity+1}))
        dispatch(recalculate())
    }
    useEffect(()=>{
        quantity > 1 ? setDecreaseDisabled(false) : setDecreaseDisabled(true);
    },[quantity])
    return (
        <TableRow>
            <TableCell>{name}</TableCell>
            <TableCell >
                <div className="flex space-x-2 justify-center">
                <Button size='min' variant='ghost' className="bg-red-300 hover:bg-red-200 p-[1px] text-primary-foreground" onClick={decrease} disabled={decreaseDisabled}>
                    <TriangleLeftIcon/>
                </Button>
                <span>{quantity}</span>
                <Button size='min' variant='ghost' className="bg-green-300 hover:bg-green-200 p-[1px] text-primary-foreground" onClick={increase}>
                    <TriangleRightIcon/>
                </Button>
                </div>
            </TableCell>
            <TableCell className='text-center'>Rs. {price * quantity}</TableCell>
        </TableRow>
    );
}

export default OrderItem;