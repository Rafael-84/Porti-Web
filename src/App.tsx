import { createBrowserRouter } from "react-router-dom";


import { Home } from './pages/home';
import { Projetos } from './pages/projetos';
import { Error } from './pages/error';

const router = createBrowserRouter([           
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/projetos",
      element: <Projetos/>
    },          
    {
      path: "*",
      element: <Error/>
   }
])

export { router };