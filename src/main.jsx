import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { RouterProvider, } from "react-router-dom";
import router from './components/Routes/Routes';


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="height: 100% w-[1480px] mx-auto">
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </div>
)
