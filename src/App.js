import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from './components/Error';
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
//lazy loading = on demand loading.
const Grocery = lazy(()=> import("./components/Grocery"));
const About = lazy(()=> import("./components/About"));
const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout/>,
    children : [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path : "/about",
        element: (
          <Suspense fallback={<h1>loading ....</h1>}>
            <About/>
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path : "/restaurants/:resId",
        element:<RestaurantMenu/>
      },

      {
        path : "/grocery",
        element: (
          <Suspense fallback={<h1>loading ....</h1>}>
            <Grocery/>
          </Suspense>
        ),
      }
    ],
    errorElement:<Error/>
  },
  

])
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router = {appRouter} />);
