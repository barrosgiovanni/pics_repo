// to run React properly ...
import React from "react";
import ReactDOM from "react-dom/client";

// importing the App component ...
import App from "./App";

// importing searchImages function (api request) ...
// import searchImages from "./api";

// importing the sass file to apply style ...
import "./App.scss";

// running searchImages function ...
// searchImages();

// getting the element with id='root' as a reference ...
const el = document.getElementById("root");

// using ReactDOM to create the root ...
const root = ReactDOM.createRoot(el);

// rendering the App component ...
root.render(<App />);
