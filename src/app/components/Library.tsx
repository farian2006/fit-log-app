import { GymType } from '@/Types/type';
import Image from 'next/image'
import { FaRegStar } from "react-icons/fa";
import Link from 'next/link';
import { RxStopwatch } from "react-icons/rx";
import { LiaBurnSolid } from "react-icons/lia";


interface gymProps{
gymProducts:GymType[];
}
const Library = ({gymProducts}:gymProps) => {


    return (
        <div className='mr-30 ml-30 mt-6' id='library'>
          <p className='text-3xl font-bold'>THE LIBRARY</p>
          <p className='text-gray-400 mb-4'>Twelve lifts covering every major muscle group.</p>
          <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6'>
        {gymProducts.map((gymProducts) => (
          <div key={gymProducts.id}>
            <Link href={`/gymDetails/${gymProducts.id}`}>
           <div className="card bg-base-100 w-96 shadow-sm hover:bg-gray-800 mb-6 ">
  <figure>
    <Image 
      src={gymProducts.image}
      width={300} height={100}
      alt={gymProducts.name}>
      </Image>
  </figure>
  <div className="card-body">
    
    <h2 className="card-title">
      {gymProducts.muscleGroups.map((muscleGroup)=>(
        <span
        key={muscleGroup}
        className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
      >
        {muscleGroup}
      </span>
      ))}
    </h2>
    <p className='text-2xl font-extrabold'>{gymProducts.name}</p>
    <p className='text-gray-400'>{gymProducts.equipment}</p>
    <hr></hr>
    <div className="card-actions justify-end items-center text-gray-400">
      <RxStopwatch />
     <p> {gymProducts.duration} min </p>
     <LiaBurnSolid />
     <p>{gymProducts.caloriesBurned} kcal</p>
     <FaRegStar />
     <p>{gymProducts.rating}</p>
    </div>
  </div>
</div>
</Link>
          </div>
        ))}
        </div>
        </div>
    );
};

export default Library;