/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { setCurrentTable } from "@/store/tableSlice";
import { useDispatch } from "react-redux";

function TableCard({tableInfo, className, dialogRef}) {
    const {no, status, people, index, items} = tableInfo;
    const dispatch = useDispatch();
    return (
        <>
            <Card key={no} className={`w-80 min-w-56 ${className} shadow hover:border-primary`}>
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Table : {no}
                    </CardTitle>
                    <CardDescription className=''>
                        Status : <span className={status == 'vacant'? 'text-green-400': 'text-orange-500'}>&nbsp;{status}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex justify-between h-12'>
                    <div>
                        People: {people}
                    </div>
                    <Separator orientation="vertical"/>
                    <div>Items : {items.reduce((acc, val)=> acc + val.quantity, 0)}</div>
                    <Separator orientation="vertical"/>
                    <div>Total : {items.reduce((acc, val)=> acc + (val.price * val.quantity), 0)}</div>
                </CardContent>
                <CardFooter className="grid grid-cols-2 gap-4">
                    <Button onClick={()=>{dispatch(setCurrentTable(index));dialogRef.current.click()}}>Serve</Button>
                    <Button variant="secondary" >Billing</Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default TableCard;