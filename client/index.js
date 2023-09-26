import React from "react";
import { createRoot} from "react-dom/client"
import { Provider } from "react-redux";
import App from "./components/App.jsx";
import styles from '../public/styles/styles.scss'


const root = createRoot(document.getElementById('root'));

root.render(
    <App />
)