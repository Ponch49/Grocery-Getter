import React from "react";
import GroceryBag from "./GroceryBag.jsx";
import { Button, FormLabel } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import { addItem } from "../reducers/itemUpdate.js";


const ItemContainer = (props) => {

    const dispatch = useDispatch()

    return (
    <div>
        <div className="input">
            <FormLabel className="enter">Enter here</FormLabel>
            <input id="itemName" placeholder="Apples, Bananas, etc..."></input>
            <Button type="button" className="button" onClick={() => dispatch(addItem(document.getElementById('itemName').value))}>Add Item</Button>
        </div>
        <div>
            <GroceryBag />
        </div>
    </div>  
    )
}

export default ItemContainer;