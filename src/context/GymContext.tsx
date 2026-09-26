'use client';

import { GymType } from '@/Types/type';
import React, { useState, createContext } from 'react';
import { Id, toast } from 'react-toastify';

interface GymContextType {
  plan: GymType[];
  save: GymType[];
  addToPlan: (data: GymType) => boolean;
  saveForLater: (data: GymType) => boolean;
  removeFromPlan: (id: string | number) => void;
  markAsDone: (id: string | number) => void;
  removeFromSaved: (id: string | number) => void
}

export const GymDataContext = createContext<GymContextType>({}  as GymContextType)


const GymProvider = ({children}:{children:React.ReactNode}) => {
    const [plan,setPlan]=useState<GymType[]>([]);
    const [save,setSave]=useState<GymType[]>([]);

      const addToPlan = (data: GymType):boolean => {
    if (!data) {
      toast.error("No Data Found!!") 
      return false;
    }

    const alreadyAdded =plan.some((item) => String(item.id) === String(data.id));
    
    if(alreadyAdded){
      toast.error("Items already added to today's plan");
      return false;
    }

    setPlan((previousPlan) => [...previousPlan,data]);

    return true;
  };
    const saveForLater = (data:GymType) => {
      if(!data){
        return false;
      }

      const alreadySaved =save.some(
        (item) => String(item.id) === String(data.id)
      )

      if(alreadySaved){
        return false;
      }

      setSave((previousSave) => [...previousSave,data]);
      toast.success("Plan Saved Successfully")
      return true;   
    }

  const removeFromPlan = (id: string | number) => {
    setPlan((previousPlan) =>
      previousPlan.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

   const markAsDone = (id: string | number) => {
    setPlan((previousPlan) =>
      previousPlan.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };

  const removeFromSaved = (id: string | number) => {
    setSave((previousSave) =>
      previousSave.filter(
        (item) => String(item.id) !== String(id)
      )
    );
  };


    const sharedData={
        plan,
        save,
        addToPlan,
        saveForLater,
        removeFromPlan,
        markAsDone,
        removeFromSaved,
    }
    return (
        <GymDataContext.Provider value={sharedData}>
            {children}
        </GymDataContext.Provider>
    );
};

export default GymProvider;