import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);

        // earlier state variables before the hooks introduced in  reactJs
        this.state ={//state variable is an big objects of state variables

            count:0, 
            // count1:2,     
            // count2:2,     
        }

        // console.log(props);



        console.log("child constructor");
    }

    componentDidMount(){
        console.log("child Component did Mount");

        //we makes APIS calls it is similar to useEffect 
    }
    render(){
        console.log(" child render");
        //destructuring
        const {name} = this.props;

        const {count} = this.state;
        return(
            <div className="user-card">
                {/* <h1>{this.state.count}</h1> */}

                <h1>{count}</h1>

                <button onClick={()=>{
                    //Never update state variables in class based components eg.this.state.count++;

                    this.setState({
                        count:this.state.count+1,
                        // count2:this.state.count2+1,
                    })
                }}>Count increase</button>
               
                <h2>Name:{name}</h2>
                <h3>Location: Pune</h3>
                <h4>Contact: @aniket</h4>

            </div>
        )
    }
}

export default UserClass;