import User from "./User";
import UserClass from "./UserClass"
import React from "react";

class About extends React.Component {
    constructor(props) {
        super(props);

        console.log("Parent Constructor ");
    }

    componentDidMount() {
        console.log("Parent Component did mount");
    }

    render() {
        console.log("Parent render");
        return(
            
            <div>
                <h1>About Class components</h1>
                <h2>Namaste React</h2>
                {/* <User name={"harika (function)"}/> */}
                <UserClass name = {"Harika (class based component)"} location={"Vizag Class"}/>
                
            </div>
        );
    }
}
// const About = () => {
//     return(
//         <div>
//             <h1>About</h1>
//             <h2>Namaste React</h2>
//             {/* <User name={"harika (function)"}/> */}
//             <UserClass name = {"Harika (class based component)"} location={"Vizag Class"}/>

//         </div>
//     )
// }
export default About;