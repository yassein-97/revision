import { useState, useEffect } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Gallery from "./components/Gallery/Gallery.jsx";
import Contact from "./components/Contact/Contact.jsx";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {path:"", element: <Layout />,children:[
    {index:true, element:<Home />},
    {path:'home', element:<Home />},
    {path:"about", element:<About />},
    {path:"gallery", element:<Gallery />},
    {path:"contact", element:<Contact />},
    {path:"*", element:<NotFoundPage />},
  ]}
])

function App() {
  return (
    <>
        <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
