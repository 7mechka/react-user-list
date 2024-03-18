import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { BrowserRouter } from 'react-router-dom'
import { PageRouter } from './components/PageRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <PageRouter/>
    </BrowserRouter>
)
