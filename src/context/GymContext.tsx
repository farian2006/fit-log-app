'use client';

import React, { useState, createContext } from 'react';

export const GymDataContext =createContext({});


const GymProvider = ({children}:{children:React.ReactNode}) => {
    const [plan,setPlan]=useState([]);
    const [save,setSave]=useState([]);


    const sharedData={
        plan,
        setPlan,
        save,
        setSave,
    }
    return (
        <GymDataContext.Provider value={sharedData}>
            {children}
        </GymDataContext.Provider>
    );
};

export default GymProvider;