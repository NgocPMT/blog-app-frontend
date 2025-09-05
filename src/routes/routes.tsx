import Layout from "./Layout";
import Home from "./Home";
import ErrorPage from "./ErrorPage";
import SignUp from "./SignUp";

const routes = [
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        children: [
          {
            path: "sign-up",
            element: <SignUp />,
          },
        ],
      },
    ],
  },
];

export default routes;
