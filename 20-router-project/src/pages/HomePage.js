import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/product");
  };

  return (
    <>
      <h1>HomePage</h1>
      <Link to="product">Go to Product</Link>
      <p>
        <button onClick={navigateHandler}> Product</button>
      </p>
    </>
  );
};

export default HomePage;
