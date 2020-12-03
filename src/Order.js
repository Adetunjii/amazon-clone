import React from "react";
import "./Order.css";
import moment from "moment";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  const [{ basket }, dispatch] = useStateValue();

  const getSubTotal = () => {
    let total = 0;
    basket?.forEach((item) => {
      total += item.price;
    });
    return total;
  };
  return (
    <div className="order">
      <h2>Order</h2>
      <p> {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p>
        <p className="order__id">
          <small>{order.id}</small>
        </p>
      </p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton={true}
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default Order;
