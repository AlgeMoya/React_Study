import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'; // * BrowserRouter 불러오기
import App from './App'
import './index.css'

// * App 을 BrowserRouter 로 감싸기
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
