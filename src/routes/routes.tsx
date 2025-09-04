import Layout from "./Layout";
import Home from "./Home";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
];

export default routes;
