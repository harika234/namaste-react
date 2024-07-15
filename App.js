import React from "react";
import ReactDOM from "react-dom/client";


//DOM element = html elements
// React element
// react elements are objects when we elements objects in dom then it becomes HTMLElement(render)
// const heading = React.createElement("h1",{id:"heading"},"namaste recat");
// console.log(heading);
// JSX - is not html  inside javascript. it is HTML like or XML -like syntax
// JSX (transpiled before it reaches the JS) - PARCEL- BABEL
// JSX => Babel transpiles it to React.createElement => ReactElement-JS Object => HTMLElement(render)


const elem = <span>React Element</span>
const Title =() => (
    <h1 className="head" tabIndex="5">
        {elem}
        namaste react using JSX
    </h1>
);


// const data = api.getData();
// REACT Component
// Class based component and Functional based component
// class - old way , function - new way
// REACT Functional component = it is just a normal javascript function that return the react element 
const HeadingComponent = () => (
    <div id = "container">
    {Title()}
     <h1>Hi harry welcome!! to functional component</h1>
     </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);
