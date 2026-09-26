'use client'

import { GymDataContext } from '@/context/GymContext';
import Link from 'next/link';
import React, { useContext } from 'react';

const PlanSaveCount = () => {
    const {plan,save} =useContext(GymDataContext);
    return (
       <div className="flex items-center gap-5 text-xs text-gray-300">
      <Link
        href="/plans"
        className="flex items-center gap-2 hover:text-white"
      >
        <span>Plan</span>

        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#CCFF00] text-black font-bold">
          {plan.length}
        </span>
      </Link>
      <Link
        href="/plans"
        className="flex items-center gap-2 hover:text-white"
      >
        <span>Saved</span>
        <span className="flex items-center justify-center w-5 h-5 rounded-full border border-gray-600 text-gray-300">
          {save.length}
        </span>
      </Link>
      </div>
    );
};

export default PlanSaveCount;