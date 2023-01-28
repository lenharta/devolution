import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LocalStateContextProvider from "./app/local/AppContext";
import { Layout, PageWrapper } from "./components/layout";
import { About, Admin, Contact, Home, NotFound } from "./routes";
import "./scss/_main.scss";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <PageWrapper id="pageId?=home" title="Home" content={<Home />} />
        ),
      },
      {
        path: "about",
        element: (
          <PageWrapper id="pageId?=about" title="About" content={<About />} />
        ),
      },
      {
        path: "contact",
        element: (
          <PageWrapper
            id="pageId?=contact"
            title="Contact"
            content={<Contact />}
          />
        ),
      },
      {
        path: "admin",
        element: (
          <PageWrapper
            id="pageId?=admin"
            title="Admin Toolbox"
            content={<Admin />}
          />
        ),
      },
      {
        path: "*",
        element: (
          <PageWrapper
            id="pageId?=notFound"
            title="ERROR: 404 | Page Not Found"
            content={<NotFound />}
          />
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LocalStateContextProvider>
      <RouterProvider router={router} />
    </LocalStateContextProvider>
  </React.StrictMode>
);
