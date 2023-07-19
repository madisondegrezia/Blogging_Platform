import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./ErrorPage";
import Login from "./routes/auth/Login";
import Signup from "./routes/auth/Signup";
import ProtectedRoute from "./routes/ProtectedRoute";
import AuthProvider from "./contexts/AuthContext";
import PostList, { loader as postLoader } from "./routes/posts/PostList";
import Post, { loader as postDetailLoader } from "./routes/posts/post";
import AddPost, {
  action as addPostAction,
  loader as addPostLoader,
} from "./routes/posts/AddPost";
import EditPost, {
  loader as editPostLoader,
  action as editPostAction,
} from "./routes/posts/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
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
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "posts/:id",
        element: (
          <ProtectedRoute>
            <Post />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        loader: postDetailLoader,
      },
      {
        path: "posts/new",
        element: (
          <ProtectedRoute>
            <AddPost />
          </ProtectedRoute>
        ),
        action: addPostAction,
        loader: addPostLoader,
      },
      {
        path: "posts/:id/edit",
        element: (
          <ProtectedRoute>
            <EditPost />
          </ProtectedRoute>
        ),
        errorElement: <ErrorPage />,
        loader: editPostLoader,
        action: editPostAction,
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
