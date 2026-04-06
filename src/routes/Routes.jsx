import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Books from "../pages/Books/Books";
import Homepage from "../pages/Homepage/Homepage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: 'Homepage',
    Component: MainLayout,
    children: [
      {
        index: true,
        Component:Homepage
      },
      {
        path: '/books',
        element: <Books/>
      },
      {

      }
    ],
    errorElement:<ErrorPage/>
  }
])