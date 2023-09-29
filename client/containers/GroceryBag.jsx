import React from "react";
import Item from '../components/Item.jsx'
import { useSelector } from "react-redux";



const GroceryBag = (props) => {

    const currItems = useSelector((state) => state.item.currentItems)
    const itemArr = [];
    for(let i = 0; i < currItems.length; i++) {
        itemArr.push(<Item key={currItems[i].name} name={currItems[i].name} quantity={currItems[i].quantity} grabbed={currItems[i].grabbed}/>)
    }

    return (
    <div className="groceryBag">
        <div className="header">
            <header >Grocery Basket</header>
        </div>
        <div className="cardContainer">
            {itemArr}
        </div>
        
    </div>     
    )
}

export default GroceryBag;