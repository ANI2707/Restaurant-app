import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'


// const heading = React.createElement(
//     "h2",
//     { id: "heading", xyz: "abc" },
//     "Hello World React!"
//   );

//   console.log(heading);//we gets output as object

  //Jsx

//   const jsxHeading=<h1>Hello world</h1>
//   console.log(jsxHeading);//we get same output as heading

// Food application
/*

*Header-
    -logo
    -navItems
*Body-
    -search bar
    resturant container
    -resturant card
        -img
        -name of res,star rating,cuisine    ,delery tie
*Footer-
    -copyright
    -address
    -contact    



*/
const Header=()=>{
        return (
            <div className='header'>
                <div className='logo'>
                    <img src="https://media.istockphoto.com/id/1356778093/vector/delicious-burger-flat-logo-icon-sticker-vector.jpg?s=612x612&w=0&k=20&c=KhrQagy_iVz9nzWLZ_EIy9-zIkVexVhqbpZSbKfFRuI="/>
                </div>
                <div className='nav-list'>
                    <ul>
                        <li>Home</li>                            
                        <li>About</li>                            
                        <li>blog</li>                            
                        <li>pages</li>                            

                        
                    </ul>
                </div>

            </div>
        )
}
const ResturantCard=(props)=>{
    const {resName,cuisine}=props;//destructuring
        return(
            <div className='card' style={{backgroundColor:"#f0f0f0"}}>
                <img src='https://images.herzindagi.info/image/2021/Jul/expensive-ffod-in-inida-main.jpg' className='res-logo'/>
                {/* <h3>{props.resName}</h3> */}
                <h3>{resName}</h3>
                {/* <h4>{props.cuisine}</h4> */}
                <h4>{cuisine}</h4>
                <h4>3.5 stars</h4>
                <h4>38 minutes</h4>
            </div>
        )
}
const Body=()=>{
    return(
        <div className='container'>
            <div className='search'>Search</div>
            <div className='res-card'>
                {/* Resturant card */}
                <ResturantCard resName="Sairat biryani" cuisine="Biryani,North indian,Food"/>
                <ResturantCard resName="KFC" cuisine="Burger,Food"/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
                <ResturantCard/>
            </div>
        </div>
    )
}
const AppLayout=()=>{
        return (
            <div className='app'>
                <Header/>
                <Body/>
            </div>
        )
}

  const root=ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout/>);

  




















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

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "hi amit"),
//     React.createElement("h1", {}, "iam aniket"),
//   ])
// );
// console.log(heading); // return an OBJECT





// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
