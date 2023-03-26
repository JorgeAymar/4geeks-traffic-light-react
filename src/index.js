//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "./css/semaforo.css";

//import your own components
import Semaforo from "./components/semaforo.jsx";

//render your react application
ReactDOM.render(<Semaforo />, document.querySelector("#root"));
