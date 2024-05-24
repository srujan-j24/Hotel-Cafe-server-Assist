/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { setCurrentTable } from "@/store/tableSlice";
import { useDispatch } from "react-redux";
function TableCard({tableInfo, className, dialogRef}) {
    const {no, status, people} = tableInfo;
    const dispatch = useDispatch();
    return (
        <>
            <Card key={no} className={`w-80 min-w-56 ${className}`}>
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Table : {no.toString().padStart(3, '0')}
                    </CardTitle>
                    <CardDescription className=''>
                        Status : <span className={status == 'vacant'? 'text-green-400': 'text-orange-500'}>&nbsp;{status}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex items-center space-x-4 '>
                    <div>People : {people}</div>
                    <Separator orientation="vertical"/>
                    <div>Total : 240</div>
                </CardContent>
                <CardFooter className="">
                    <Button onClick={()=>{dispatch(setCurrentTable(no));dialogRef.current.click()}}>Serve</Button>
                </CardFooter>
            </Card>
        </>
    );
}

export default TableCard;