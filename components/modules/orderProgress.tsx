import React from "react";
import { Typography } from "../ui/Typograhy";

function OrderProgress() {
  const listStyle = "list-disc marker:text-green-600";
  return (
    <div>
      <Typography variant="title" color="primary">
        How to Order?
      </Typography>
      <ul className="p-4">
        <li className={listStyle}>
          Sign in (or create an account) and set your delivery address.
        </li>
        <li className={listStyle}>
          Choose the restaurant you want to order from.
        </li>
        <li className={listStyle}>Select your items and tap “Add to Cart”.</li>
        <li className={listStyle}>
          To place your order, select “View cart” or “Checkout”.
        </li>
        <li className={listStyle}>
          Review your order and tap “Place Order”...
        </li>
        <li className={listStyle}>Track your order progress.</li>
      </ul>
    </div>
  );
}

export default OrderProgress;
