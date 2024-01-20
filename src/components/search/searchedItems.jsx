import SearchedItem from "./searchItem"

async function getProducts(){
    try {
        const response = await fetch(`https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json`)
        const data = await response.json()
        return data
    } catch (error) {
        throw new Error(error)
    }
}




export default async function SearchedItems() {

 const products = await getProducts()


  return (
    <>
      <SearchedItem products={products} />
    </>
  )
}
