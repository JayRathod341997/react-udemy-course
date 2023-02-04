import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const Cart = (props) => {
  const CartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <CartItem />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {CartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.12</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
