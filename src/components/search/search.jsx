"use client";

import { FaSearch } from "react-icons/fa";
import styles from "./search.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSearchString } from "@/Redux/features/search/searchSlice";
import classNames from "classnames";
import FilterButton from "../filter/filterButton";



export default function Search() {
  const [searchStrings, setSearchStrings] = useState("");
  const dispatch = useDispatch();

  function searchHandler() {
    dispatch(setSearchString(searchStrings));
    setSearchStrings("");
  }

  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Search"
        value={searchStrings}
        onChange={(e) => setSearchStrings(e.target.value)}
        className={styles.input_style}
      />
 
      <button type="submit" onClick={searchHandler} className={classNames(styles.button_style,"search-button-container")}>
      Search
      </button>
      <span className={`${styles.filter_style}`}>
      <FilterButton />
      </span>
    </div>
  );
}
