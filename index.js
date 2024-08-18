import { createRoot } from 'react-dom/client'
import App from './App'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import PageNotFound from './Components/PageNotFound'
import Header from './Components/Header'
import CountryDetails from './Components/CountryDetails'

const router=createBrowserRouter([
    {
      path:'/',
      element:<App/>
    },
    {
      path:'/contact',
      element:<div>Hellow world Contact</div>
    },
    {
      path:'/:country',
      element:<CountryDetails/>
    },
    {
      path:'*',
      element:<PageNotFound/>
    },
  ])
const root=createRoot(document.querySelector('#root'))


root.render(
    <>
    <Header/>
<RouterProvider router={router}/>
    </>
)