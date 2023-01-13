import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Contact, Home, PageNotFound } from "./pages";
import { Layout, Page } from "./layout";
import "./scss/_main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Page title="Home" content={<Home />} />,
      },
      {
        path: "about",
        element: <Page title="About" content={<About />} />,
      },
      {
        path: "contact",
        element: <Page title="Contact" content={<Contact />} />,
      },
      {
        path: "*",
        element: <Page title="Page Not Found" content={<PageNotFound />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
