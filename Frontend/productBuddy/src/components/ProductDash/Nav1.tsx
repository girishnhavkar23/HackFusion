
import React, { useEffect } from 'react'
import { Menu, X, ChevronRight } from 'lucide-react'
import { NavLink, useNavigate,  } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from '../ui/input'


export default function Nav1() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const navigate=useNavigate()
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const handleLogout = ()=>{
    navigate("/")
  }

  return (
    <div className="relative w-full p-4 bg-[#313d4a]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          
          {/* <span className="font-bold">CorruptionWatch</span> */}
        </div>
        <div className="hidden grow items-start lg:flex">
          <ul className="ml-12 inline-flex space-x-8">
          
                <NavLink to={"/"}>
                <div className="inline-flex items-center text-sm font-semibold text-white hover:text-gray-900">
                  Home
                </div>
                </NavLink>
                <div className="inline-flex items-center text-sm font-semibold text-white hover:text-gray-900">
                  About
                </div>
              
          </ul>
        </div>
        

        <div className="hidden space-x-2 lg:block">
          
          <Input placeholder='Search'/>
        </div>
        
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                   
                  </nav>
                </div>
                <div className="mt-2 space-y-2">

                   <button
                    type="button"
                    className="w-full rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                   
                  >  
                    Sign In
                   </button>
                  
                  <button
                    type="button"
                    className="w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Log In
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
