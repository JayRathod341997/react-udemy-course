import { Link } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <h1>HomePage</h1>
      <Link to="/product">Go to Product</Link>
    </>
  );
};

export default HomePage;
