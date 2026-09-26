import Link from 'next/link';

 const Notfound = () => {
    return (
       <div className="flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>

      <p className="mt-2 text-gray-400">
        Sorry This Page Is Not Available
      </p>

      <Link
        href="/"
        className="mt-5 rounded-lg bg-[#CCFF00] px-5 py-2 text-black"
      >
        Go Home
      </Link>
    </div>
  );
};

export default Notfound;