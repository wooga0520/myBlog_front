import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";

import Home from "../pages/Home";
import Main from "../pages/Main";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostsDetail";
import Login from "../auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Main /> },
      { path: "posts", element: <Posts /> },
      { path: "posts/:id", element: <PostDetail /> },
    ],
  },

  {
    path: "/auth",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
    ],
  },
]);

export default router;
