import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Error from './routes/error.tsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

//import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>,

  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);