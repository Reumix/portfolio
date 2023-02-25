import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Valeurs from "./components/Valeurs.jsx";
import Creations from "./components/Creations.jsx";
import Projet from "./components/Projet.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/valeurs',
        element: <Valeurs/>
    },
    {
        path: '/creations',
        element: <Creations/>
    },
    {
        path: '/creations/:id',
        element: <Projet/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
