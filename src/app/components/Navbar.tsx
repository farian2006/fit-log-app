import Link from 'next/link';
import Image from 'next/image'
import PlanSaveCount from './PlanSaveCount';

const Navbar = () => {

    const link = <>
    <li><Link href='/'>Workouts</Link></li>
    <li><Link href='/plans'>My Plan</Link></li>
    </>
    return (
      <div className="navbar bg-black shadow-sm">
        <div className='flex justify-between gap-45 conatainer mx-auto'>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={-1}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {link}
      </ul>
    </div>
    <div className='flex gap-6 items-center'>
   <Image src='/assests/logo.png' width={40} height={40} alt='Logo Image'></Image>
   <p className='font-bold '>FITLOG</p>
   </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {link}
    </ul>
  </div>
  <div className="navbar-end gap-6">
    <PlanSaveCount/>
  </div>
  </div>
</div>
    );
};

export default Navbar;