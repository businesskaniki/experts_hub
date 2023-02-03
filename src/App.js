
import Leftbar from "./components/leftbar/Leftbar";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Reservation from "./pages/reservation/Reservation";


import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";

function App() {

  const currentUser = true;

  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <Leftbar />
          <Outlet />
        </div>
        <Footer />
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/reservations",
          element: <Reservation />,
        },
        {
          path: "/technicians",
          element: <Register />,
        },
        {
          path: "/new-reservation",
          element: <Register />,
        },
        {
          path: "/new-techncian",
          element: <Register />,
        },
        {
          path: "/technician/:id",
          element: <Register />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
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
