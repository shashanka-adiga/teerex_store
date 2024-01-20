"use client"
import { setModal } from "@/Redux/features/modal/modalSlice";
import { FaFilter } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";

export default function FilterButton(){

    const dispatch = useDispatch()
    const currentState = useSelector(state => state.modal.modal)
   

    function modalHandler(){
        dispatch(setModal(currentState))
    }

    return(
        <>
            <button onClick={modalHandler}>
              <FaFilter />
            </button>
        </>
    )
}