import CartItems from "./cartItems";
import styles from "./cart.module.css"

export default function Cart(){
  


    return(
        <div className={`${styles.cart}`}>
            <CartItems />
        </div>
    )
}