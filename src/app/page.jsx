import Filter from "@/components/filter/filter";
import Products from "@/components/products/products";
import Search from "@/components/search/search";
import SearchedItems from "@/components/search/searchedItems";
import styles from "./home.module.css";
import FilterModal from "@/components/modal/fiterModal";

export default function Home() {
  return (
    <div className={`${styles.home}`}>
      <div className={`${styles.search}`}>
      <Search />
      </div>
       
      <div className={`${styles.filter}`}>
        <Filter />
      </div>
      <FilterModal />
      <div className={`${styles.searched}`}>
      <SearchedItems  />
      </div>
       
      <div className={`${styles.products}`}>
        <Products />
      </div> 
    </div>
  );
}
