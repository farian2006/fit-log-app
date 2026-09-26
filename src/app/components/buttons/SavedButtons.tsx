'use client'
import { GymDataContext } from '@/context/GymContext';
import { GymType } from '@/Types/type';
import React, { useContext } from 'react';
import { FaRegBookmark } from "react-icons/fa";
import { toast } from 'react-toastify';

const SavedButtons = ({data}:{data:GymType}) => {
   const{saveForLater}=useContext(GymDataContext);

   const handleSave =() =>{
    if(!data){
        toast.error("Workout data is missing")
        return
    }
    saveForLater(data);
   }
    return (
       <button
      className="btn btn-outline"
      onClick={handleSave}
    >
      <FaRegBookmark />
      Save for later
    </button>
    );
};

export default SavedButtons;