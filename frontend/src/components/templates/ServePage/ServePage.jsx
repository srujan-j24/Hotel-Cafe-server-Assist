import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import TableCard from "./TableCard";
import { useState } from "react";

function ServePage() {
    const tables = Array.from({length: 12}).map((_, i)=> i+1);
    return (
        <>
            <ScrollArea className="h-svh pt-12">
                <div className="flex flex-wrap w-full gap-y-6 gap-x-1 justify-evenly py-8 transition-all ">
                {
                    tables.map((table) => (
                        <TableCard key={table} num={table}></TableCard>
                    ))
                }   
                </div>
            </ScrollArea>
        </>
    );
}

export default ServePage;