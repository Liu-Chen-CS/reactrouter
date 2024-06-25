import {createBrowserRouter} from "react-router-dom";
import Login from "../page/Login/index";
import Article from "../page/Article/index";
import Layout from "../page/Layout";
import About from "../page/About";
import Dashboard from "../page/Dashboard";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/article/:id",
        element: <Article/>
    },
    {
      path:"/",
      element: <Layout/>,
      children:[
          {
              index: true,
              element: <About/>
          },
          {
              path: "dashboard",
              element: <Dashboard/>
          },
      ],
    },
]);

export default router;



