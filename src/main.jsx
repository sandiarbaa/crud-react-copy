import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./pages/login.jsx";
import DashboardPage from "./pages/dashboard";
import AddPage from "./pages/add.jsx";
import UpdatePage from "./pages/update.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/crud-react-copy/",
    element: <App />,
    children: [
      {
        path: "/crud-react-copy/",
        element: <LoginPage />,
      },
      {
        path: "/crud-react-copy/dashboard",
        element: <DashboardPage />,
      },
      {
        path: "/crud-react-copy/tambah",
        element: <AddPage />,
      },
      {
        path: "/crud-react-copy/edit/:nim",
        element: <UpdatePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
