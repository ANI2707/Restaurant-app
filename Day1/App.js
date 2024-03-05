import React from 'react';
import ReactDOM from 'react-dom/client';



//This is the core of React 



// const heading = React.createElement(
//   "h2",
//   { id: "heading", xyz: "abc" },
//   "Hello World React!"
// );




/*
what if the structure of html document is

<div id="parent">  
    <div id="child">
        <h1>Hi</h1>
        <h1>iam Aniket</h1>
    </div>
</div>
*/

// ReactElement(Object) => HTML(Browser understands)

const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "hi amit"),
    React.createElement("h1", {}, "iam aniket"),
  ])
);
console.log(heading); // return an OBJECT

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
