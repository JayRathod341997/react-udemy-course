import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/product", element: <ProductPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
