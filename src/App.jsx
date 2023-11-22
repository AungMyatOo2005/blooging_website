import React from 'react'
import styles from './styles'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout/Layout'
const App = () => {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>

      </Route>
    )
  )
  return (
    <div className={`${styles.boxWidth} bg-primary min-h-screen`}>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App
