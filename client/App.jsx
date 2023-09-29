import React from "react";
import ItemContainer from './containers/ItemContainer.jsx'
import { useSelector } from "react-redux";




const App = (props) => {

   return( 
   <div>
        <div className="header">
                <h1>Welcome to Grocery Getter</h1>
        </div>
        <div>
            <ItemContainer />
        </div>
    
    </div>)
}

export default App;