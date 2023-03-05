import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
const DUMMY_PRODUCT = [
  {
    id: "p1",
    description: "I read the first book",
    price: 6,
    title: "First Book",
  },
  {
    id: "p2",
    description: "and I read the second book",
    price: 60,
    title: "Second Book",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
