import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img className="checkout__Image" src="./images/clogo.png" alt="" />

        {basket?.length === 0 ? (
          <div>
            <h2>Your Cart is Empty</h2>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Items In your Cart</h2>
            {/**list out all the checkout products */}
            {basket.map((item) => (
              // eslint-disable-next-line react/jsx-no-undef
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
