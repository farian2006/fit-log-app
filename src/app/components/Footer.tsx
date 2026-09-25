import Image from 'next/image'

const Footer = () => {
    return (
     <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 container mx-auto">
  <div className='flex justify-between gap-74'>
    <div className='flex gap-4 items-center'>
   <Image src='/assests/logo.png' width={50} height={50} alt='Logo Image'></Image>
   <p className='font-bold'>FITLOG</p>
   </div>
  <p className='text-gray-400'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
  </div>
</footer>
    );
};

export default Footer;