'use client'
import { GymDataContext } from '@/context/GymContext';
import Link from 'next/link';
import React, { useContext, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import Image from 'next/image'
import { RxCross1 } from "react-icons/rx";
import { IoMdCheckmark } from "react-icons/io";
import { MdOutlineWatchLater } from "react-icons/md";
import { LiaBurnSolid } from "react-icons/lia";
import { FaStar } from "react-icons/fa";



const Planspage = () => {

    const {
    plan,
    save,
    removeFromPlan,
    markAsDone,
    removeFromSaved,
    } =useContext(GymDataContext)

    const [sortBy,setSortBy] =useState("duration")

    const totalMiniutes =useMemo(() => {
        return plan.reduce(
            (total,item) => total+Number(item.duration || 0),
            0);
    },[plan]);

      const totalCalories = useMemo(() => {
    return plan.reduce(
      (total, item) => total + Number(item.caloriesBurned || 0),
      0
    );
  }, [plan]);

  const sortedPlan = useMemo(() => {
    return [...plan].sort((a, b) => {
      if (sortBy === "duration") {
        return Number(a.duration || 0) - Number(b.duration || 0);
      }

      if (sortBy === "calories") {
        return Number(a.caloriesBurned || 0) - Number(b.caloriesBurned || 0);
      }

      if (sortBy === "rating") {
        return Number(b.rating || 0) - Number(a.rating || 0);
      }

      return 0;
    });
  }, [plan, sortBy]);

  const handleDone = (id: string | number) => {
    markAsDone(id);
    toast.success("Workout completed");
  };

  const handleRemovePlan = (id: string | number) => {
    removeFromPlan(id);
    toast.success("Workout removed from today's plan");
  };

  const handleRemoveSaved = (id: string | number) => {
    removeFromSaved(id);
    toast.success("Workout removed from saved");
  };
return(
     <div className="w-full">
      <div className="mb-5">
        <h1 className="text-2xl font-bold">
          MY PLAN
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Cap of five lifts for today. Finish them, then load more.
        </p>
      </div>

      <div className="grid grid-cols-3 rounded-xl border border-base-300 bg-base-200 mb-6">
        <div className="px-5 py-6 border-r border-base-300">
          <p className="text-xs text-gray-400">
            Exercises
          </p>

          <p className="text-3xl text-[#C2F10D] font-bold mt-1">
            {plan.length}
          </p>
        </div>

        <div className="px-5 py-6 border-r border-base-300">
          <p className="text-xs text-gray-400">
            Minutes
          </p>

          <p className="text-3xl font-bold mt-1">
            {totalMiniutes}
          </p>
        </div>

        <div className="px-5 py-6">
          <p className="text-xs text-gray-400">
            Calories
          </p>

          <p className="text-3xl font-bold mt-1">
            {totalCalories}
          </p>
        </div>
      </div>

      <div className="flex justify-end mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs text-gray-500">
            Sort By
          </span>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-sm bg-base-200 border-base-300 text-xs"
          >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>
        </div>
      </div>

      <div className="tabs tabs-border">
        <input
          type="radio"
          name="plans_tabs"
          className="tab"
          aria-label="Today's Plan"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-base-100 p-4">
          {sortedPlan.length === 0 ? (
            <div className="border border-dashed border-base-300 rounded-xl py-16 text-center">
              <p className="font-bold text-sm">
                NOTHING HERE YET
              </p>

              <p className="text-xs text-gray-500 mt-2 mb-4">
                Browse the library and add a lift to get today moving.
              </p>

              <Link href="/#library">
                <button className="btn btn-success bg-[#C2F800]">
                  BROWSE WORKOUTS
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {sortedPlan.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-base-300 bg-base-200"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100} 
                    height={100}
                    className="w-28 h-16 rounded-lg object-cover"
                  />

                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-sm uppercase">
                      {item.name}
                    </h2>

                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.equipment}
                    </p>

                    <div className="flex items-center gap-4 mt-1.5 text-xs text-gray-400">
                      <span>
                  <MdOutlineWatchLater/>{item.duration} min
                      </span>
                      <span>
                         <LiaBurnSolid /> {item.caloriesBurned} kcal
                      </span>

                      <span>
                         <FaStar /> {item.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href={`/gymDetails/${item.id}`}>
                      <button className="btn btn-sm btn-outline rounded-full px-4 text-xs">
                        View Details
                      </button>
                    </Link>

                    <button
                      onClick={() => handleDone(item.id)}
                      className="btn btn-sm bg-[#CCFF00] text-black rounded-full px-4 text-xs"
                    >
                      <IoMdCheckmark />
                       Mark as Done
                    </button>

                    <button
                      onClick={() => handleRemovePlan(item.id)}
                      className="btn btn-sm btn-ghost btn-circle text-gray-500"
                    >
                      <RxCross1 />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          type="radio"
          name="plans_tabs"
          className="tab"
          aria-label="Saved"
        />

        <div className="tab-content border-base-300 bg-base-100 p-4">
          {save.length === 0 ? (
            <div className="border border-dashed border-base-300 rounded-xl py-16 text-center">
              <p className="font-bold text-sm">
                SAVED WORKOUTS
              </p>

              <p className="text-xs text-gray-500 mt-2 mb-4">
                Your saved exercises will appear here.
              </p>

              <Link href="/#library">
                <button className="btn btn-success bg-[#C2F800]">
                  BROWSE WORKOUTS
                </button>
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {save.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-base-300 bg-base-200"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={100}
                    height={100}
                    className="w-28 h-16 rounded-lg object-cover"
                  />

                  <div className="flex-1 min-w-0">
                    <h2 className="font-bold text-sm uppercase">
                      {item.name}
                    </h2>

                    <p className="text-xs text-gray-400 mt-0.5">
                      {item.equipment}
                    </p>

                    <div className="flex items-center gap-4 mt-1.5 text-xs text-gray-400">
                      <span>
                      <MdOutlineWatchLater/> {item.duration} min
                      </span>

                      <span>
                        <LiaBurnSolid /> {item.caloriesBurned} kcal
                      </span>

                      <span>
                       <FaStar />  {item.rating}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href={`/gymDetails/${item.id}`}>
                      <button className="btn btn-sm btn-outline rounded-full px-4 text-xs">
                        View Details
                      </button>
                    </Link>

                    <button
                      onClick={() => handleRemoveSaved(item.id)}
                      className="btn btn-sm btn-ghost btn-circle text-gray-500"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Planspage;