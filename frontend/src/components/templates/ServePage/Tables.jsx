/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import TableCard from "./TableCard";


function Tables({dialogRef}) {
    const tables = useSelector(state => state.tables);
    return (
        <>
        {
            tables.map((tableInfo)=> (
                <TableCard key={tableInfo.no} tableInfo={tableInfo} dialogRef={dialogRef}></TableCard>
            ))
        }
        </>
    );
}

export default Tables;