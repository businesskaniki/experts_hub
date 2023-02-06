import {
  createBrowserRouter, Navigate, Outlet, RouterProvider,
} from 'react-router-dom';
import Leftbar from './components/leftbar/Leftbar';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';

import Home from './pages/home/Home';
import Profile from './pages/profile/Profile';
import AddTechnician from './pages/technician/technician';
import TechnicianDetails from './pages/technician/TechnicianDetail';

function App() {
  const currentUser = true;

  const Layout = () => (
    <div>
      <Navbar />
      <div style={{ display: 'flex' }}>
        <Leftbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/profile/:id',
          element: <Profile />,
        },
        {
          path: '/technician',
          element: <AddTechnician />,
        },
        {
          path: '/technician/:id',
          element: <TechnicianDetails />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
