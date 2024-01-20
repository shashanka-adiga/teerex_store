"use client";

import { useSelector, useDispatch } from "react-redux";
import { addCartItem } from "@/Redux/features/cart/cartSlice";
import styles from "./search.module.css";
import Image from "next/image";



export default function SearchedItem({ products }) {
  const dispatch = useDispatch();
  const searchStr = useSelector(
    (state) => state.search.searchString
  ).toLowerCase();

  const isSearch = useSelector((state) => state.search.searchString);
  const filterStates = useSelector((state) => state.filter);

  const isColor = useSelector((state) => state.filter.colors).length;
  const isGender = useSelector((state) => state.filter.genders).length;
  const isType = useSelector((state) => state.filter.types).length;
  const isPrice = useSelector((state) => state.filter.prices).length;

  const colorFilteredProducts = filterStates.colors
    .map((color) => {
      const searchedItems = products?.filter((product) => {
        let value = Object.values(product)
          .map((val) => {
            if (typeof val == "string") {
              return val.toLowerCase();
            }
          })
          .indexOf(color);

        if (value > -1) {
          return product;
        }
      });
      console.log({searchedItems})
      return searchedItems;
    })
    .flat();

  const genderFilteredProducts = filterStates.genders
    .map((gender) => {
      const searchedItems = products?.filter((product) => {
        let value = Object.values(product)
          .map((val) => {
            if (typeof val == "string") {
              return val.toLowerCase();
            }
          })
          .indexOf(gender);
        console.log({ value });

        if (value > -1) {
          return product;
        }
      });
      return searchedItems;
    })
    .flat();

  const priceFiltered = filterStates.prices
    .map((price) => {
      if (price == 250) {
        const filteredItem = products?.filter((product) => product.price < 251);
        return filteredItem;
      } else if (price == 251) {
        const filteredItem = products?.filter(
          (product) => product.price > 250 && product.price < 451
        );
        return filteredItem;
      } else {
        const filteredItem = products?.filter((product) => product.price > 450);
        return filteredItem;
      }
    })
    .flat();

  const colorgenderFiltered = filterStates.genders
    .map((gender) => {
      const searchedItems = colorFilteredProducts?.filter((product) => {
        let value = Object.values(product)
          .map((val) => {
            if (typeof val == "string") {
              return val.toLowerCase();
            }
          })
          .indexOf(gender);

        if (value > -1) {
          return product;
        }
      });
      return searchedItems;
    })
    .flat();

  const typeFilteredProducts = filterStates.types
    .map((type) => {
      const searchedItems = products?.filter((product) => {
        let value = Object.values(product)
          .map((val) => {
            if (typeof val == "string") {
              return val.toLowerCase();
            }
          })
          .indexOf(type);

        if (value > -1) {
          return product;
        }
      });
      return searchedItems;
    })
    .flat();

    // const colorpriceFiltered = filterStates?.colors.map(color => {
    //   const searchedItems = priceFiltered?.filter(product => {
    //     let value = Object.values(product)
    //       .map((val) => {
    //         if (typeof val == "string") {
    //           return val.toLowerCase();
    //         }
    //       })
    //       .indexOf(color);
    //     console.log(value)
    //     if (value > -1) {
    //       return product;
    //     }
    //   })
    //   return searchedItems;
    // }).flat()
    // console.log({colorpriceFiltered})

  const colortypeFiltered = filterStates.colors
    .map((color) => {
      const searchedItems = typeFilteredProducts?.filter((product) => {
        let value = Object.values(product)
          .map((val) => {
            if (typeof val == "string") {
              return val.toLowerCase();
            }
          })
          .indexOf(color);

        if (value > -1) {
          return product;
        }
      });
      return searchedItems;
    })
    .flat();

  const gendertypeFiltered = filterStates.genders
    .map((gender) => {
      const searchedItems = typeFilteredProducts?.filter((product) => {
        let value = Object.values(product)
          .map((val) => {
            if (typeof val == "string") {
              return val.toLowerCase();
            }
          })
          .indexOf(gender);

        if (value > -1) {
          return product;
        }
      });
      return searchedItems;
    })
    .flat();
   

  const colorgendertypeFilter = filterStates.genders
    .map((gender) => {
      const searchedItems = colortypeFiltered?.filter((product) => {
        let value = Object.values(product)
          .map((val) => {
            if (typeof val == "string") {
              return val.toLowerCase();
            }
          })
          .indexOf(gender);

        if (value > -1) {
          return product;
        }
      });
      return searchedItems;
    })
    .flat();

  const filteredProducts = [
    ...colorFilteredProducts,
    ...typeFilteredProducts,
    ...genderFilteredProducts,
    ...priceFiltered,
  ];

  const searchedProducts = products?.filter((product) => {
    let value = Object.values(product)
      .map((val) => {
        if (typeof val == "string") {
          return val.toLowerCase();
        }
      })
      .indexOf(searchStr);

    if (value > -1) {
      return product;
    }
  });

  const searchedResult = searchedProducts.map((product) => (
    <div key={product.id} className={`${styles.product}`}>
      <Image
        src={`${product.imageURL}`}
        width={120}
        height={100}
        alt="Picture of the product"
      />
      <div>
        <h4>{product.name}</h4>
        <h4>{product.price}rs</h4>
      </div>

      <button
      className={`${styles.button_style}`}
        onClick={() =>
          dispatch(
            addCartItem({
              name: product.name,
              id: product.id,
              maxQuantity: product.quantity,
              price: product.price,
              imageURL: product.imageURL,
            })
          )
        }
      >
        Add To Cart
      </button>
    </div>
  ));

  const filteredResult = filteredProducts.map((product) => (
    <div key={product.id} className={`${styles.product}`}>
      <Image
        src={`${product.imageURL}`}
        width={120}
        height={100}
        alt="Picture of the product"
      />
      <div>
        <h4>{product.name}</h4>
        <h4>{product.price}rs</h4>
      </div>
      {console.log("world ahoy")}
      <button
      className={`${styles.button_style}`}
        onClick={() =>
          dispatch(
            addCartItem({
              name: product.name,
              id: product.id,
              maxQuantity: product.quantity,
              price: product.price,
              imageURL: product.imageURL,
            })
          )
        }
      >
        Add To Cart
      </button>
    </div>
  ));

  let result;
  if (isSearch) {
    result = searchedResult;
  } else if (isGender && isColor && isType) {
    result = colorgendertypeFilter.map((product) => (
      <div key={product.id} className={`${styles.product}`}>
         <Image
        src={`${product.imageURL}`}
        width={120}
        height={100}
        alt="Picture of the product"
      />
        <div>
          <h4>{product.name}</h4>
          <h4>{product.price}rs</h4>
        </div>
        <button
        className={`${styles.button_style}`}
          onClick={() =>
            dispatch(
              addCartItem({
                name: product.name,
                id: product.id,
                maxQuantity: product.quantity,
                price: product.price,
                imageURL: product.imageURL,
              })
            )
          }
        >
          Add To Cart
        </button>
      </div>
    ));
  }   else if (isColor && isGender) {
    result = colorgenderFiltered.map((product) => (
      <div key={product.id} className={`${styles.product}`}>
         <Image
        src={`${product.imageURL}`}
        width={120}
        height={100}
        alt="Picture of the product"
      />
        <div>
          <h4>{product.name}</h4>
          <h4>{product.price}rs</h4>
        </div>
        <button
        className={`${styles.button_style}`}
          onClick={() =>
            dispatch(
              addCartItem({
                name: product.name,
                id: product.id,
                maxQuantity: product.quantity,
                price: product.price,
                imageURL: product.imageURL,
              })
            )
          }
        >
          Add To Cart
        </button>
      </div>
    ));
  } else if (isColor && isType) {
    result = colortypeFiltered.map((product) => (
      <div key={product.id} className={`${styles.product}`}>
         <Image
        src={`${product.imageURL}`}
        width={120}
        height={100}
        alt="Picture of the product"
      />
        <div>
          <h4>{product.name}</h4>
          <h4>{product.price}rs</h4>
        </div>
        <button
        className={`${styles.button_style}`}
          onClick={() =>
            dispatch(
              addCartItem({
                name: product.name,
                id: product.id,
                maxQuantity: product.quantity,
                price: product.price,
                imageURL: product.imageURL,
              })
            )
          }
        >
          Add To Cart
        </button>
      </div>
    ));
  } else if (isGender && isType) {
    result = gendertypeFiltered.map((product) => (
      <div key={product.id} className={`${styles.product}`}>
         <Image
        src={`${product.imageURL}`}
        width={120}
        height={100}
        alt="Picture of the product"
      />
        <div>
          <h4>{product.name}</h4>
          <h4>{product.price}rs</h4>
        </div>

        <button
        className={`${styles.button_style}`}
          onClick={() =>
            dispatch(
              addCartItem({
                name: product.name,
                id: product.id,
                maxQuantity: product.quantity,
                price: product.price,
                imageURL: product.imageURL,
              })
            )
          }
        >
          Add To Cart
        </button>
      </div>
    ));
  } else {
    result = filteredResult;
  }

  return <div className={`${styles.products_container}`}>{result}</div>;
}
