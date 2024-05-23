import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

function ServePage() {
    const tables = Array.from({length: 120}).map((_, i)=> `Table ${i+1}`);
    console.log(tables);
    return (
        <>
            <ScrollArea className="h-svh pt-12">
                <div className="flex flex-wrap w-full gap-6 justify-evenly pt-8 transition-all">
            {
                tables.map((table) => (
                        <Card key={table} className='w-72 shrink-0'>
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    {table}
                                </CardTitle>
                                <CardDescription>
                                    Status: 
                                </CardDescription>
                            </CardHeader>
                            <CardContent>

                            </CardContent>
                            <CardFooter className="">
                                <Button className="px-6">Serve</Button>
                            </CardFooter>
                        </Card>
                ))
            }</div>
            </ScrollArea>
            {/* <main className="grid grid-flow-row  gap-4 p-4">
            {
                tables.map((table) => (
                        <Card key={table}>
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    {table}
                                </CardTitle>
                            </CardHeader>
                        </Card>
                ))
            }
            </main> */}
        </>
    );
}

export default ServePage;