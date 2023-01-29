import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppContextProvider from "./app/local/AppContext";
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
        element: <PageWrapper id="home" title="Home" content={<Home />} />,
      },
      {
        path: "about",
        element: <PageWrapper id="about" title="About" content={<About />} />,
      },
      {
        path: "contact",
        element: (
          <PageWrapper id="contact" title="Contact" content={<Contact />} />
        ),
      },
      {
        path: "admin",
        element: (
          <PageWrapper id="admin" title="Admin Toolbox" content={<Admin />} />
        ),
      },
      {
        path: "*",
        element: <PageWrapper id="notFound" content={<NotFound />} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppContextProvider>
      <RouterProvider router={router} />
    </AppContextProvider>
  </React.StrictMode>
);
