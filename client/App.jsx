import React from "react";
import { Button, FormLabel } from 'react-bootstrap';

const App = () => {
   return( <div className="container">
        <div className="header">
        <h1>Welcome to Grocery Getter</h1>
        </div>
        <FormLabel>Enter here</FormLabel>
        <input placeholder="Apples, Bananas, etc..."></input>
        <button type="button" class="btn btn-primary">Primary</button>
    </div>)
}

export default App;