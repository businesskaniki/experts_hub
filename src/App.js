import { useEffect, useState } from 'react';
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
import Reservations from './pages/reservation/Reservation';
import Technicians from './pages/technician/Technicians';
import AddReservation from './pages/reservation/AddReservation';

function App() {
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
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('expert-current-user'));

    useEffect(() => {
      setCurrentUser(localStorage.getItem('expert-current-user'));
    }, []);

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
          path: '/technicians',
          element: <Technicians />,
        },
        {
          path: '/technician/:id',
          element: <TechnicianDetails />,
        },
        {
          path: 'reservations',
          element: <Reservations />,
        },
        {
          path: 'add_reservations/:id',
          element: <AddReservation />,
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
