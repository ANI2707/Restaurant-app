import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        // earlier state variables before the hooks introduced in  reactJs
        this.state ={//state variable is an big objects of state variables

            // count:0, 
            // count1:2,     
            // count2:2,  
            
            userInfo:{
                name:"Dummy",
                location:"Default",
                avatar_url:"http://dummy-photo.com",
            },
        }

        // console.log(props);



        console.log(this.props.name+ "child constructor");
    }

    async componentDidMount(){
        console.log(this.props.name+"child Component did Mount");

        //we makes APIS calls it is similar to useEffect 
        const data=await fetch("https://api.github.com/users/ani2707");
        const json =await data.json();
        console.log((json));
        this.setState({
            userInfo : json,
        })


    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    componentWillUnmount(){
        console.log("componentWillUnmount");
    }
    render(){
        console.log(this.props.name+" child render");
        //destructuring
        const {name,location,avatar_url}=this.state.userInfo;


        // debugger;
        // const {name} = this.props;

        // const {count} = this.state;
        return(
            <div className="user-card">
                {/* <h1>{this.state.count}</h1> */}

                {/* <h1>{count}</h1> */}

                {/* <button onClick={()=>{
                    //Never update state variables in class based components eg.this.state.count++;

                    this.setState({
                        count:this.state.count+1,
                        // count2:this.state.count2+1,
                    })
                }}>Count increase</button> */}
               <img src={avatar_url} alt="" />
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: @aniket</h4>

            </div>
        )
    }
}

export default UserClass;


/*
----Mounting----------
-Constructor (dummy data)
-Render (Dummy data)

 <HTML>Dummy</HTML>

 -Component did mount
    <API calls></API>
    <this.setState></this.setState> -> state variable updated



-------Update------------

    -render(API data)
     -<HTML>(NEW API data)</HTML>

     -componentDidUpdate

*/