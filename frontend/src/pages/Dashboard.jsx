import { useEffect, useState } from "react";
import API from "../services/api";

const Dashboard = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try{
                const { data } = await API.get("/food");
                setFoods(data);
            }catch(error){
                console.error("Error fetching foods", error);
            }
        };

        fetchFoods();
    },[]);

    return(
        <div>
            <h1>This is home</h1>
            <h2>Food menu</h2>
        </div>
    );
};

export default Dashboard;