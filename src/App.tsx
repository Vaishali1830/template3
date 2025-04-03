import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Template } from "./components/Template";
import Menupage from "./components/Details/Menu/Menu";
import TemplateLayout from "./components/TemplateLayout";

function App() {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <TemplateLayout />,
      children: [
        {
          path: "/",
          element: <Template />,
        },
        {
          path: "/menu",
          element: <Menupage />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
