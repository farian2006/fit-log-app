
import React from 'react';
import Banner from './components/Banner';
import Library from  './components/Library';


const getData = async() =>{
    const res= await fetch('https://api.abcz.workers.dev/api/fitlog');
    return res.json();
}

const page = async() => {
    const gymProducts=await getData();
    return (
       <main>
        <Banner></Banner>
        <Library gymProducts={gymProducts}></Library>
       </main>
    );
};

export default page;