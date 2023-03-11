import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();

  return (
    <>
      <h1>Product details </h1>
      <p>{params.productId}</p>
      <p>
        <Link to=".." relative="path">
          Go back
        </Link>
      </p>
    </>
  );
};

export default ProductDetail;
