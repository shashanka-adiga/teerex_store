"use client";

import { useSelector, useDispatch } from "react-redux";
import { removeCartItem, addCartItem } from "@/Redux/features/cart/cartSlice";
import Image from "next/image";
import styles from "./cart.module.css";

export default function CartItems() {
  const cartItems = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  let totalPrice = useSelector((state) => state.cart.totalCartAmount);

  return (
    <div>
      {totalPrice > 0 ? (
        <h3>
          total amount:<strong>{totalPrice}₹</strong>
        </h3>
      ) : (
        ""
      )}
      <div className={`${styles.products_container}`}>
        {cartItems.map((item) => (
          <div key={item.id} className={`${styles.product}`}>
            <Image
              src={`${item.imageURL}`}
              width={120}
              height={100}
              alt="Picture of the product"
            />
            <div className={`${styles.product_details}`}>
              <h4>name:{item.name}</h4>
              <h4>price:{item.price}</h4>
              <h4>
                quantity:{item.quantity}{" "}
                <span>
                  <button
                    onClick={() =>
                      dispatch(
                        addCartItem({
                          name: item.name,
                          id: item.id,
                          maxQuantity: item.maxQuantity,
                          price: item.price,
                          gender: item.gender,
                          imageURL: item.imageURL,
                        })
                      )
                    }
                  >
                    +
                  </button>
                </span>
              </h4>
            </div>

            <button
              className={`${styles.button_style}`}
              onClick={() =>
                dispatch(
                  removeCartItem({
                    id: item.id,
                    price: item.price,
                    quantity: item.quantity,
                  })
                )
              }
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
