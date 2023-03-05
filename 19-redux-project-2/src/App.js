import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import {} from "./store/index";
import { useSelector } from "react-redux";
function App() {
  const isVisible = useSelector((state) => state.ui.isVisible);
  return (
    <Layout>
      {isVisible &&<Cart />}
      <Products />
    </Layout>
  );
}

export default App;
