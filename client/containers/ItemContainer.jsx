import React from "react";
import GroceryBag from "./GroceryBag.jsx";
import { Button, FormLabel } from 'react-bootstrap';



const ItemContainer = (props) => {
    return (
    <div>
        <div className="input">
            <FormLabel className="enter">Enter here</FormLabel>
            <input id="itemName" placeholder="Apples, Bananas, etc..."></input>
            <Button type="button" className="button" onClick={() => console.log(document.getElementById('itemName').value)}>Add Item</Button>
        </div>
        <div>
            <GroceryBag />
        </div>
    </div>  
    )
}

export default ItemContainer;