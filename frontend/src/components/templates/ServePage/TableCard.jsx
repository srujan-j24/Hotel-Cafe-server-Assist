/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
function TableCard({num}) {
    const [status, setStatus] = useState({val: 'vacant', color: 'text-green-400'})
    return (
        <>
            <Card key={num} className='w-80'>
                <CardHeader>
                    <CardTitle className="text-2xl">
                        Table : {num.toString().padStart(3, '0')}
                    </CardTitle>
                    <CardDescription className=''>
                        Status : <span className={status.color}>&nbsp;{status.val}</span>
                    </CardDescription>
                </CardHeader>
                <CardContent className='flex items-center space-x-4 '>
                    <div>People : 4</div>
                    <Separator orientation="vertical"/>
                    <div>Total : 240</div>
                </CardContent>
                <CardFooter className="">
                    <Dialog>
                        <DialogTrigger>
                            <Button className="px-6">Serve</Button>
                        </DialogTrigger>
                        <DialogContent className="h-4/5 w-[90vw] rounded">
                            <DialogHeader>
                                <DialogTitle className="pb-2">
                                    Table : {num.toString().padStart(3, '0')}
                                </DialogTitle>
                                <DialogDescription className="flex items-center space-x-4 justify-center">
                                    <div>People : 4</div>
                                    <Separator orientation="vertical"/>
                                    <div>Total : 240</div>
                                </DialogDescription>
                                <Separator/>
                                <div className="flex gap-2 text-lg pt-2">
                                    <Input className="text-lg"/>
                                    <Button>Add</Button>
                                </div>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                </CardFooter>
            </Card>
        </>
    );
}

export default TableCard;