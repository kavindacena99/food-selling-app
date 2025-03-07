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
        <h2>Food Menu</h2>
        <ul>
            {foods.map((food) => (
            <li key={food._id}>
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <p>${food.price}</p>
            </li>
            ))}
        </ul>
        </div>
    );
};

export default Dashboard;