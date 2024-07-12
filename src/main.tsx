import { RouterProvider } from 'react-router-dom'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import './index.css'

import { register } from "swiper/element/bundle";

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/effect-fade'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
