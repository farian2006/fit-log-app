import Image from 'next/image'
import { MdOutlineAddComment } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";

interface gymDetailsPageProps{
    params: Promise<{
        id:number
    }>
}

const page = async({params} :gymDetailsPageProps) => {
    const {id}=await params;
    const res=await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const gymData=await res.json();
    return (
        <div className="flex justify-center card card-side bg-base-100 shadow-sm">
          <div className="flex w-full max-w-5xl gap-7 mt-6 mb-6 items-center rounded-3xl">
  <figure>
    <div className="w-full w-[550px] h-[500px] shrink-0 rounded-3xl mt-1.5 mb-1.5">
      <Image
        src={gymData.image}
        alt={gymData.name}
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </figure>
  <div className="card-body container bg-black">
    <h2 className="card-title uppercase font-extrabold">{gymData.name}</h2>
    <p className='text-gray-400'>{gymData.description}</p>
     <h2 className="card-title">
      {gymData.muscleGroups.map((gymData)=>(
        <span
        key={gymData}
        className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
      >
        {gymData}
      </span>
      ))}
    </h2>
    <div className="card w-96 bg-base-100 card-xs shadow-sm">
  <div className="card-body bg-base-300">
   <div className="flex flex-col gap-3 text-gray-400">
  <div className="grid grid-cols-[120px_1fr]">
    <span>EQUIPMENT</span>
    <span>{gymData.equipment}</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>DIFFICULTY</span>
    <span>{gymData.difficulty}</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>SETS</span>
    <span>{gymData.sets}</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>REPS</span>
    <span>{gymData.reps}</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>DURATION</span>
    <span>{gymData.duration} min</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>CALORIES</span>
    <span>{gymData.caloriesBurned} kcal</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>RATING</span>
    <span>{gymData.rating}</span>
  </div>
</div>

    <p className='font-extrabold'>INSTRUCTONS</p>
    <p className='text-gray-400'>
        {gymData.instructions.map((instruction,index)=>(
            <li  className='list-none' key={index}>{index+1} {instruction}</li>
        ))}
    </p>
    <div className="flex justify-end card-actionsm m-2 gap-4">
        <button className="btn btn-success bg-[#CCFF00]">
            <MdOutlineAddComment />
            Add to today's plan
            </button>
        <button className="btn btn-outline bg-[#374151]">
            <FaRegBookmark />
            Save for later
            </button>
    </div>
  </div>
</div>
  </div>
</div>
</div>
    );
};

export default page;