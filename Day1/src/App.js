import React, { lazy } from 'react';
import ReactDOM from 'react-dom/client';
import {Header} from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import { createBrowserRouter , Outlet, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import { Suspense } from 'react';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';


//  const styleCard = {
//   backgroundColor: '#f0f0f0',
// };

// * Props :

// * prop -> is Just a JS Object

// * Note: When you have to dainamically pass in a data to a component, you pass in prop

// const RestaurantCard = (props) => {
// console.log(props);

// * Note We can also destructure props on the fly by wrapping them in between {}, this is like...

// * const { resName, cuisine } = props;

// const RestaurantCard = ({ resName, cuisine }) => {
//   console.log({ resName, cuisine });




// * not using keys (not acceptable) <<<< index as a key <<<<<<<<<< unique id (is the best  practice)



// * What is Config-driven-UI -> A "config-driven UI" is a user interface that is built and configured using a declarative configuration file or data structure, rather than being hardcoded.

// * Every company now-a-days follows these approach, because our Appications need to be Dynamic These Days

// * Note: A Good Senior Frontend engineer is - who is a good UI Layer Engineer and a good Data Layer Engineer


//chunking
//code spittting
//dynamic bundling
//lazy loading
//on demand loading
//dynamic import

const Grocery = lazy(()=> import ('./components/Grocery'))

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
      <Footer />

      
    </div>
  );
};

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    children:[
      {
        path:'/',
        element:<Body/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h2>Shimmer</h2>}><Grocery/></Suspense>
      },
      {
        path:'/restaurants/:resId',
        element:<RestaurantMenu/>
      },

    ],
    errorElement:<Error/>
  },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
