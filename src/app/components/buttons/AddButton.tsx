'use client'
import { GymDataContext } from "@/context/GymContext";
import { GymType } from "@/Types/type";
import { useContext } from "react";
import { MdOutlineAddComment } from "react-icons/md";
import { toast } from "react-toastify";

const AddButton = ({data}:{data:GymType}) => {
   
    const {addToPlan,plan} = useContext(GymDataContext);
   
    const handleAdd = () => {

        if(!data){
            toast.error('Excercise data is missing')
            return
        }

        const added = addToPlan(data);

        if(!added){
        toast.error("This excerside is already in today's plan");
        return
       }

     toast.success("Added to today's plan successfully")
   }
    return (
         <button className="btn btn-success bg-[#CCFF00]" onClick={()=>handleAdd()}>
            <MdOutlineAddComment />
            Add to today's plan
            </button>
    );
};

export default AddButton;