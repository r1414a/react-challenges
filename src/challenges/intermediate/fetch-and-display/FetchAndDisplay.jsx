import useGetData from "../../../hooks/useGetData"
import DataInTable from "./DataInTable"
import LoadingSpinner from "./LoadingSpinner";

export default function FetchAndDisplay() {
    const { data, loading, error } = useGetData('https://dummyjson.com/users');
    console.log(data);

    // if(loading){
    //     return <LoadingSpinner/>
    // }

    return (
        <section className="p-10 flex justify-center items-center">
            {
                loading ?
                    <LoadingSpinner />
                    :
                    !loading && error
                        ?
                        <p>{error}</p>
                        :
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
            }

        </section>
    )
}