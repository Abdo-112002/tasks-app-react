import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { RootRoutes } from './routes/AuthRouotes';
import { DashboardRoutes } from './routes/DashBordRoutes';

const router = createBrowserRouter([RootRoutes, DashboardRoutes]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
