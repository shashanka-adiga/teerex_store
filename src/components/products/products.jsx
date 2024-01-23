import Product from "./product"
import styles from "./product.module.css"


async function getProducts(){
    try {
        const response = await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}


export default async function Products(){

    const products = await getProducts()
   

    return(
        <main>
            <h1>list of all products</h1>
            <div className={`${styles.products_container}`}> 
            {
                products.map(product => (
                    <Product key={product.id} product={product}/>
                ))
            }
            </div>
            
        </main>
    )
}