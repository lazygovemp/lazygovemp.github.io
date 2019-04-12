import React from "react";
import ReactDOM from "react-dom";
import MyHeader from "./MyHeader.js";
import MyFooter from "./MyFooter.js";
import MyMenu from "./MyMenu.js";
import LoginForm from "./LoginForm.js";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute.js";



import "./styles.css";

function App() {

return (
  <div>
        <MyHeader />
        <MyMenu />
        <ProtectedRoute />
        <MyFooter />

 </div>
  ); 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
