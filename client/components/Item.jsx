import React from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity } from "../reducers/itemUpdate";

const Item = (prop) => {

  const dispatch = useDispatch();
  return (
    <div className="itemCard">
        <div className="cardHeader">
            <h4>{prop.name}</h4>
        </div>
        <div className="cardContent">
            <p>Quantity: {prop.quantity}</p> 
            <Button className="button" onClick={() => dispatch(incrementQuantity(prop.name))}>Add</Button>
            <Button className="button2" onClick={() => dispatch(decrementQuantity(prop.name))}>Remove</Button>
        </div>
    </div>
  )
}

export default Item;