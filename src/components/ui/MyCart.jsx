import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const MyCart = () => {
  return (
    <div className="my-cart-container">
      <div className="count">0</div>
      <FontAwesomeIcon icon={faCartShopping} />
      <Link>My Cart</Link>
    </div>
  );
};

export default MyCart;
