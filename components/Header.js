import Link from 'next/link'
import Image from 'next/image'
import Login from './Login'


export default function Header(){
  return (
    <nav className="flex flex-wrap place-items-center">
    <section className="relative mx-auto">
      <nav className="flex justify-between bg-gray-900 text-white w-screen">
        <div className="px-5 xl:px-12 py-6 flex w-full items-center">
          <Link className="text-3xl font-bold font-heading" href="/">
         
            Nass App
          </Link>
        
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            <li><Link className="hover:text-gray-200" href="/">Home</Link></li>
            <li><Link className="hover:text-gray-200" href="/post">Articles</Link></li>
            <li><Link className="hover:text-gray-200" href="/about">About Us</Link></li>
            <li><Link className="hover:text-gray-200" href="/contact">Contact Us</Link></li>
          </ul>
      
          <div className="hidden xl:flex items-center space-x-5 items-center">
        
            <Link className="flex items-center hover:text-gray-200" href="/login">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </Link>
            
          </div>
        </div>
     
        <Link className="navbar-burger self-center mr-12 xl:hidden" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
        </Link>
      </nav>
      
    </section>
  </nav>
  )
}


