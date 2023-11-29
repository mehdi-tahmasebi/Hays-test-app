import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/HomePage.jsx";
import DetailsPage from "./pages/DetailsPage.jsx";
import ErrorPage from "./error-page";
import EvolutionDetails from "./pages/EvolutionDetails.jsx";
import { Provider } from "react-redux";
import { store } from "./store.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path: ":id",
    element: <DetailsPage />,
  },
  {
    path: "evolution/:name",
    element: <EvolutionDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
