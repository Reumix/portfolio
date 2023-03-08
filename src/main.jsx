import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import Valeurs from "./components/Valeurs.jsx";
import Creations from "./components/Creations.jsx";
import Projet from "./components/Projet.jsx";
import Competences from "./components/Competences.jsx";

const router = createBrowserRouter([
    {
        path: '/portfolio',
        element: <App/>,
    },
    {
        path: '/portfolio/contact',
        element: <Contact/>
    },
    {
        path: '/portfolio/valeurs',
        element: <Valeurs/>
    },
    {
        path: '/portfolio/creations',
        element: <Creations/>
    },
    {
        path: '/portfolio/creations/projet/:id',
        element: <Projet/>
    },
    {
        path: '/portfolio/competences',
        element: <Competences/>
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)
