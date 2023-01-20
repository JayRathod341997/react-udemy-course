import "./Card.css";

function Card(prop) {
  const classes = "card " + prop.className;

  return <div className={classes}>{prop.children}</div>;
}

export default Card;
