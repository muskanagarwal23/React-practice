import User from "./User";
import UserClass from "./UserClass";
import React,{ Component } from "react";

class About extends Component{
    constructor(props){
    super(props);
    
    
    }
    componentDidMount(){
        
        
    }

   
     
    render(){
       
        
        return(
    <div>
        <h1>About</h1>
        <h2>Learning React from Namaste React by Akshay Saini</h2>
        <UserClass name = {"Class-based"} location = {"Jaipur"}/>

        
    </div>
    );

    }
}

// const About = () => {
//     return(
//     <div>
//         <h1>About</h1>
//         <h2>Learning React from Namaste React by Akshay Saini</h2>
        
//         <UserClass name = {"Class-based"} location = {"Jaipur"}/>
//     </div>
//     );
// };

export default About;