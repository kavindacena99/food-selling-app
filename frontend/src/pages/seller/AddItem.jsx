import React from 'react';
import API from '../../services/api'; 

function AddItem(){
    const [itemname, setItemName] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [price, setPrice] = React.useState(0);
    //const [image, setImage] = React.useState(null);

    const itemAdd = async (e) => {
        e.preventDefault();
        try{
            const token = localStorage.getItem("token");

            await API.post("/items/food", { itemname, description, price }, { headers: { Authorization: `Bearer ${token}` } });

            alert("Item added successfully!");
            setItemName('');
            setDescription('');
            setPrice(0);
        }catch(error){
            alert("Item addition failed!");
        }
    };

    return(
        <div>
            <form onSubmit={itemAdd}>
                <div className="mb-6">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Item Name</label>
                    <input type="text" className="w-200 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300" placeholder="Enter item name" value={itemname} onChange={(e) => setItemName(e.target.value)} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Item Description</label>
                    <input type="text" className="w-200 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300" placeholder="Enter item description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                </div>
                <div className="mb-6">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                    <input type="number" className="w-200 px-3 py-2 border rounded focus:outline-none focus:ring focus:border-green-300" placeholder="Enter item description" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Add Item</button>
                </div>
            </form>
        </div>
    );
}

export default AddItem;