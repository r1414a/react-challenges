import { useEffect, useState } from "react"

export default function useGetData(url){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(url, {
                    method: 'GET'
                });
                const result = await response.json();
                setData(result);
            }catch(err){
                console.log("Error while fetching data: ",err);
                setError(err.message || "Something went wrong....")
            }finally{
                setLoading(false);  
            }
        }

        const delayTime = setTimeout(() => {
            fetchData();
        }, 2000);

        return () => {
            clearTimeout(delayTime);
        }
    },[]);

    return {
        data,
        loading,
        error
    }
}