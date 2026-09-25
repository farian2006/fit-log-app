import React from 'react';
import Image from 'next/image'
import Link from 'next/link';

const Banner = () => {
    return (
        <section className='mx-auto'>
            <div className='flex justify-between items-center bg-gray-900 rounded-3xl mt-20 ml-20 mr-20'>
            <div className='max-w-xl m-15'>
                <p className='text-[#C2F800] mb-4'>WORKOUT LIBRARY</p>
                <h1 className='text-white font-extrabold text-5xl mb-4'>TRAIN WITH IINTENT. LOG EVERY SET</h1>
                <p className='text-gray-400 mb-4'>FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
                    into today's plan, and watch the week's work add up.</p>
                  <Link href='/home'>
                    <button className="btn btn-success bg-[#C2F800]">BROWSE WORKOUTS</button>
                  </Link>
            </div>
            <Image src='/assests/banner.png' width={400} height={400} alt='Banner Image' className='object-contain m-15'></Image>
            </div>
        </section>
    );
};

export default Banner;