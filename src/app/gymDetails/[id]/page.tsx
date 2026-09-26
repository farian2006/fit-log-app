import Image from 'next/image'
import AddButton from '@/app/components/buttons/AddButton';
import SavedButtons from '@/app/components/buttons/SavedButtons';

interface gymDetailsPageProps{
    params: Promise<{
        id:number
    }>
}

const page = async({params} :gymDetailsPageProps) => {
    const {id}=await params;
    const res=await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`)
    const data=await res.json();

 
    return (
        <div className="flex justify-center card card-side bg-base-100 shadow-sm">
          <div className="flex w-full max-w-5xl gap-7 mt-6 mb-6 items-center rounded-3xl">
  <figure>
    <div className="w-full w-[550px] h-[500px] shrink-0 rounded-3xl mt-1.5 mb-1.5">
      <Image
        src={data.image}
        alt={data.name}
        width={400}
        height={400}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  </figure>
  <div className="card-body container bg-black">
    <h2 className="card-title uppercase font-extrabold">{data.name}</h2>
    <p className='text-gray-400'>{data.description}</p>
     <h2 className="card-title">
      {data.muscleGroups.map((data)=>(
        <span
        key={data}
        className="rounded-full bg-lime-400 px-3 py-1 text-xs font-bold text-black"
      >
        {data}
      </span>
      ))}
    </h2>
    <div className="card w-96 bg-base-100 card-xs shadow-sm">
  <div className="card-body bg-base-300">
   <div className="flex flex-col gap-3 text-gray-400">
  <div className="grid grid-cols-[120px_1fr]">
    <span>EQUIPMENT</span>
    <span>{data.equipment}</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>DIFFICULTY</span>
    <span>{data.difficulty}</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>SETS</span>
    <span>{data.sets}</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>REPS</span>
    <span>{data.reps}</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>DURATION</span>
    <span>{data.duration} min</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>CALORIES</span>
    <span>{data.caloriesBurned} kcal</span>
  </div>

  <div className="grid grid-cols-[120px_1fr]">
    <span>RATING</span>
    <span>{data.rating}</span>
  </div>
</div>

    <p className='font-extrabold'>INSTRUCTONS</p>
    <div className='text-gray-400'>
        {data.instructions.map((instruction,index)=>(
            <li  className='list-none' key={index}>{index+1} {instruction}</li>
        ))}
    </div>
    <div className="flex justify-end card-actionsm m-2 gap-4">
        <AddButton data={data}/>
        <SavedButtons data={data}/>
    </div>
  </div>
</div>
  </div>
</div>
</div>
    );
};

export default page;