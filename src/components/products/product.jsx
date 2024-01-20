"use client";

import styles from "./product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addCartItem } from "@/Redux/features/cart/cartSlice";
import Image from "next/image";

export default function product({ product }) {
  const dispatch = useDispatch();
  const isSearch = useSelector((state) => state.search.searchString);
  const isFilterSearch = useSelector(state => state.filter)

  let isLookedUp
  if(isSearch){
    isLookedUp = true
  }else if(isFilterSearch.colors.length > 0 || isFilterSearch.genders.length > 0 || isFilterSearch.types.length > 0 || isFilterSearch.prices.length > 0){
    isLookedUp = true
  }else{
    isLookedUp = false
  }


  function clickHandler() {
    dispatch(
      addCartItem({
        name: product.name,
        id: product.id,
        maxQuantity: product.quantity,
        price: product.price,
        gender:product.gender,
        imageURL:product.imageURL
      })
    );
  }

  return (
    <>
      {isLookedUp ? (
        ""
      ) : (
        <div className={styles.product}>
          <Image 
          src={`${product.imageURL}`}
          width={120}
          height={100}
          alt="Picture of the product"
          
          />
          <div className={`${styles.product_details}`}>
            <h4>{product.name}</h4>
            <h4>{product.price}.rs</h4>
          </div>
            <button className={`${styles.button_style}`} onClick={clickHandler}>Add To Cart</button>
         
         
        </div>
      )}
    </>
  );
}
