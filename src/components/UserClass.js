
import React from "react";
class UserClass extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
           userInfo : {
             name: " Dummy",
             location: "Default",
           }
        };
        console.log("Child Constructor");
    }
    
    async componentDidMount() {
        console.log(this.props.name + "Child Component Did Mount");
        // API CALL

        const data = await fetch("https://api.github.com/users/harika234");
        const json = await data.json();

        this.setState({
            userInfo : json
        })

        console.log(json);
        
    }

    componentDidUpdate() {
        console.log("component did update");
    }

    componentWillUnmount() {
        console.log("component unmount");
    }
    render() {
        const {name , location} = this.state.userInfo;
        
        console.log("Child render");
        
        return( <div className="user-card">
            <h2>Name:{name} </h2>

            <h3> Location : {location}</h3>
            <h3>Contact : harika@gmail.com</h3>
           
          
           
            </div>
        )
    }
}

export default UserClass;