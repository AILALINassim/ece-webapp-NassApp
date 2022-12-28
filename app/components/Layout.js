
import Header from './Header.js'
import Footer from './Footer.js'
import { useState } from 'react'
export default function Layout({
  children
}){

  const [darkMode,setDarkMode] = useState(false);

  const toggleDarkMode = ()=>{
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? ('bg-gray-800 text-white'): ('bg-white text-black')}>
      <Header darkMode={darkMode} />
      <button  className="font-bold absolute" onClick={toggleDarkMode}> 
        {darkMode ? 'Dark Mode' : 'Light Mode'}
      </button>
      <main className="py-10 min-h-screen max-w-full md:max-w-2xl md:mx-auto">
      {children}
      </main>
      <Footer />
    </div>
  )
}
