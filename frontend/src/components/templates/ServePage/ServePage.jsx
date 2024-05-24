import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef } from "react";
import TableDialog from "./TableDialog";
import Tables from "./Tables";

function ServePage() {

    const dialogRef = useRef(null);

    return (
        <>  
            <ScrollArea className="h-svh pt-12">
                <div className="grid auto-fit-20 place-items-center gap-y-6 py-6 px-4 gap-x-4" id='tables-grid'>
                    <Tables dialogRef={dialogRef}></Tables>
                </div>
                <TableDialog ref={dialogRef}></TableDialog>
            </ScrollArea>
        </>
    );
}

export default ServePage;