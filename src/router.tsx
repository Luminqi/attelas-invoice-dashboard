import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Dashboard } from './pages/dashboard'
import { Detail } from './pages/detail'
import { NotFound } from './pages/404'

const router = createBrowserRouter([
  {
    path: '/dashboard',
    element: <Dashboard />
  },
  {
    path: '/dashboard/detail/:invoiceId',
    element: <Detail />
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export function Router() {
  return <RouterProvider router={router} />
}