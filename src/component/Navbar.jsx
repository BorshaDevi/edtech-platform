import Link from "next/link";

export default function Navbar() {
  return (
    <div className="max-w-full h-14 shadow-lg rounded-md">
        <div className="p-4 w-full">
          <div className="flex justify-between px-3">
            <h1 className="uppercase text-2xl font-semibold text-cyan-500">EDTech Platform</h1>
            <Link href='/' className={`text-xl`}>Home</Link>
            {user? '': <Link href='/login' className="text-xl">Join us</Link>}
            
          </div>
        </div>
    </div>
  );
}

