import User from "./User"
import UserClass from "./UserClass"
import React from "react";
class About extends React.Component{
  constructor(props){
    super(props);

    console.log("Parent constructor");
  }
  componentDidMount(){
    console.log("Parent Component did Mount");
  }
  render(){
    console.log("Parent Render");
    return (
      <div>
        <h1>About</h1>
        {/* <User name={"Aniket Bhosale (function)"}/> */}
        <UserClass name={"Aniket Bhosale (class)"}/>
      </div>
    )
  }
}

//class based component
// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       {/* <User name={"Aniket Bhosale (function)"}/> */}
//       <UserClass name={"Aniket Bhosale (class)"}/>
//     </div>
//   )
// }

export default About