import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, {
  loader as rootLoader,
  action as logoutAction,
} from "./routes/root";
import ErrorPage from "./ErrorPage";
import Login, { action as loginAction } from "./routes/auth/Login";
import Signup, { action as signupAction } from "./routes/auth/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthProvider from "./contexts/AuthContext";
import PostList, { loader as postLoader } from "./routes/posts/PostList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: logoutAction,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <PostList />
          </ProtectedRoute>
        ),
        loader: postLoader,
      },
      {
        path: "/login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "/signup",
        element: <Signup />,
        action: signupAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
