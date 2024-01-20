"use client"

import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa"
import styles from "./navbar.module.css"
import { useSelector } from "react-redux";
import { useState } from "react";

export default function NavBar() {
  
  const cartItems = useSelector(state => state.cart.cart)

  let totalItems = 0
  function calculateCartItems(){
    for(let i=0; i < cartItems.length;i++){
      totalItems = totalItems + 1
    }
    return totalItems
  }

  const itemCount = calculateCartItems()


  return (
    <nav>
      <div className={`${styles.nav_container}`}>
        <div>
            <h2><Link className={`${styles.nav_links}`}  href="/">TeeRex store</Link></h2>
        </div>
        <div className={`${styles.nav_links_container}`} >
           <h3><Link className={`${styles.nav_links}`}  href="/">Products</Link></h3> 
           <h3><Link className={`${styles.nav_links}`}  href="/cart"><FaShoppingCart /><span>({itemCount})</span></Link></h3> 
        </div>   
      </div>
    </nav>
  );
}
