"use client";

import styles from "./modal.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setColor,
  setGender,
  setPrice,
  setType,
} from "@/Redux/features/filter/filterSlice";
import { setModal } from "@/Redux/features/modal/modalSlice";

export default function FilterModal() {
  const isOpen = useSelector((state) => state.modal.modal);
  const dispatch = useDispatch();

  function colorHandler(e) {
    dispatch(setColor(e.target.value));
  }

  function genderHandler(e) {
    dispatch(setGender(e.target.value));
  }

  function typeHandler(e) {
    dispatch(setType(e.target.value));
  }

  function priceHandler(e) {
    dispatch(setPrice(e.target.value));
  }

  function modalHandler(){
    dispatch(setModal(false))
  }

  return (
    <>
      {isOpen ? (
        <div>
          <div className={`${styles.filter_container}`}>
            <div >
            <button className={`${styles.close_button}`} onClick={modalHandler}>close</button>
            </div>
           
            <h4>Color</h4>
            <ul className={`${styles.filter}`}>
              <li>
                <input type="checkbox" value="red" onClick={colorHandler} />
                <span>Red</span>
              </li>
              <li>
                <input type="checkbox" value="green" onClick={colorHandler} />
                <span>Green</span>
              </li>
              <li>
                <input type="checkbox" value="blue" onClick={colorHandler} />
                <span>Blue</span>
              </li>
            </ul>
            <h4>Gender</h4>
            <ul className={`${styles.filter}`}>
              <li>
                <input type="checkbox" value="men" onClick={genderHandler} />
                <span>Male</span>
              </li>
              <li>
                <input type="checkbox" value="women" onClick={genderHandler} />
                <span>Female</span>
              </li>
            </ul>
            <h4>types</h4>
            <ul className={`${styles.filter}`}>
              <li>
                <input type="checkbox" value="polo" onClick={typeHandler} />
                <span>Polo</span>
              </li>
              <li>
                <input type="checkbox" value="hoodie" onClick={typeHandler} />
                <span>Hoodie</span>
              </li>
              <li>
                <input type="checkbox" value="basic" onClick={typeHandler} />
                <span>Basic</span>
              </li>
            </ul>
            <h4>price</h4>
            <ul className={`${styles.filter}`}>
              <li>
                <input type="checkbox" value="250" onClick={priceHandler} />
                <span>0-250</span>
              </li>

              <li>
                <input type="checkbox" value="251" onClick={priceHandler} />
                <span>251-450</span>
              </li>

              <li>
                <input type="checkbox" value="451" onClick={priceHandler} />
                <span>451+</span>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
