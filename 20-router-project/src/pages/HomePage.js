import { Link, useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("/product");
  };

  return (
    <>
      <h1>HomePage</h1>
      <Link to="/product">Go to Product</Link>
      <div>
        <button onClick={navigateHandler}> Product</button>
      </div>
    </>
  );
};

export default HomePage;
