import { useState } from "react";
import Nav from "./Nav";
import Debounce from "./components/Debounce";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
  },
  {
    path:"/1",
    element:<Debounce/>
  }
]);

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
