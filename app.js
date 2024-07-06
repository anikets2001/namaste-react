import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div", //tag Name
  { id: "parent" }, //attributes
  [
    React.createElement(
      //children
      "div",
      { id: "childOne" },
      [
        React.createElement("h1", { id: "heading" }, "I am an h1 tag"),
        React.createElement("h2", { id: "heading" }, "I am an h2 tag"),
      ]
    ),
    React.createElement(
      //children
      "div",
      { id: "childTwo" },
      [
        React.createElement("h1", { id: "heading" }, "I am an h1 tag"),
        React.createElement("h2", { id: "heading" }, "I am an h2 tag"),
      ]
    ),
  ] //children (siblings)
); //{} takes attributes for an tag
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
