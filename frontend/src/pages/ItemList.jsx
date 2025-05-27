import React, {useEffect, useState} from 'react';
import API from '../services/api';

// {items.map(item => (<p>{item._id}</p>))}

function ItemList(){
    const [items, setItems] = useState([]);

    const fetchItems = async (e) => {
        try {
            const response = await API.get('/items/food');
            setItems(response.data);
            console.log("Items fetched successfully:", response.data);
        } catch (error) {
            console.error("Error fetching items:", error);
        }
    }

    useEffect(() => {
        fetchItems();
    }, []);

    return(
      <div>
        {items.map(item => 
          <div key={item._id} style={{display:'inline-block', margin:'10px'}}>
            <div className='bg-white rounded-2xl shadow p-4' style={{width:'400px'}}>
              <img src="https://images.pexels.com/photos/144248/potatoes-vegetables-erdfrucht-bio-144248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt={item.name} className="w-full h-48 object-cover rounded-xl mb-2" />
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <h3>{item.description}</h3>
              <p className="text-gray-600">${item.price.toFixed(2)}</p>
            </div>
          </div>
        )}
      </div>
    );
    
}

export default ItemList;