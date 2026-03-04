import { useEffect, useState } from "react";
import useGetData from "../../../hooks/useGetData"
import DataInTable from "./DataInTable"
import LoadingSpinner from "./LoadingSpinner";
import TablePagination from "./TablePagination";
//limit=20, skip=10

export default function FetchAndDisplay() {
     const [pagination, setPagination] = useState(0);
    // let data,loading,error;
    // useEffect(() => {
    //     let r = useGetData(`https://dummyjson.com/users?limit=20&${pagination}`);
    //     data = r.data;
    //     loading = r.loading;
    //     error = r.error
    // },[pagination])

    const {data,loading, error}= useGetData(`https://dummyjson.com/users?limit=20&skip=${pagination}`,[pagination]);
    
    // useEffect(() => {
    //     setPagination({skip: data.skip, total: data.total})
    // },[data])
    
    console.log(data, pagination);

    return (
        <section className="p-10 flex flex-col justify-center items-center">
            {
                loading ?
                    <LoadingSpinner />
                    :
                    !loading && error
                        ?
                        <p>{error}</p>
                        :
                        <>
                            <table className="max-w-4xl w-full mx-auto">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Email</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <DataInTable allUsers={data.users} />
                                </tbody>
                            </table>
                            <TablePagination pagination={pagination} setPagination={setPagination} total={data.total}/>
                        </>
            }

        </section>
    )
}