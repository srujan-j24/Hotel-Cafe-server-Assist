/* eslint-disable react/prop-types */
import { ScrollArea } from "@/components/ui/scroll-area";
import { useRef } from "react";
import { useSelector } from "react-redux";
import TableCard from "./TableCard";
import TableDialog from "./TableDialog";
function ServePage({scrollRef}) {
    const dialogRef = useRef(null);
    const tables  = useSelector(state => state.table.tables);
    const handleScroll = (e) =>{
        if(scrollRef.current){
            scrollRef.current.scrollTop = e.target.scrollTop;
        }
    }
    return (
        <>  
            <ScrollArea className="h-dvh pt-12" onScroll={handleScroll}>
                <div className="grid auto-fit-20 place-items-center gap-y-6 py-6 px-4 gap-x-4" id='tables-grid'>
                    {
                        tables.map((tableInfo, index)=> (
                            <TableCard key={tableInfo.no} tableInfo={{...tableInfo, index}} dialogRef={dialogRef}></TableCard>
                        ))
                    }
                </div>
                <TableDialog ref={dialogRef}></TableDialog>
            </ScrollArea>
        </>
    );
}

export default ServePage;