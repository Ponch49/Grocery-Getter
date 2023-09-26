import React from "react";
import { Button, FormLabel } from 'react-bootstrap';
import GroceryBag from './containers/GroceryBag.jsx'



// function addItem {
//     let input = document.getElementById('input');
    
// };

const App = (props) => {
   return( 
   <div>
        <div className="header">
            <h1>Welcome to Grocery Getter</h1>
        </div>
        <div className="input">
            <FormLabel className="enter">Enter here</FormLabel>
            <input id="itemName" placeholder="Apples, Bananas, etc..."></input>
            <button type="button" className="btn btn-primary">Add Item</button>
        </div>
        <fieldset className="container">
            <GroceryBag />
        </fieldset>
    </div>)
}

export default App;