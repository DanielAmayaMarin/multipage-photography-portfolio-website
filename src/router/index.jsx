import React, { Children } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from '../App';
import LayoutPages from '../layouts/LayoutPages';
import AnimRoutes from '../components/AnimRoutes';
import Home from '../pages/Home';
import About from '../pages/About';
import Portfolio from '../pages/Portfolio';
import Contact from '../pages/Contact';



function Rutas() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            children: [
                {
                    element: <LayoutPages />,
                    children: [
                        {
                            element: <AnimRoutes />,
                            children: [
                                {
                                    index: true,
                                    element: <Home />
                                },
                                {
                                    path: "/about",
                                    element: <About />
                                },
                                {
                                    path: "/portfolio",
                                    element: <Portfolio />
                                },
                                {
                                    path: "/contact",
                                    element: <Contact />
                                },
                            ]
                        }
                    ]
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router} />
    )
}

export default Rutas;

