// components/Navbar.js
import { useState } from 'react'
import { MenuIcon } from '@heroicons/react/outline'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-background text-textLight flex justify-between items-center p-4">
      <div className="text-primary font-bold text-xl">Sirfress</div>
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-interactive">Services</li>
        <li className="hover:text-interactive">About Us</li>
        <li className="hover:text-interactive">Case Studies</li>
        <li className="hover:text-interactive">Blogs</li>
        <li className="hover:text-interactive">Join Us</li>
        <li>
          <button className="bg-primary text-background px-4 py-2 rounded hover:bg-interactive">
            Reach Us
          </button>
        </li>
      </ul>
      <MenuIcon className="md:hidden h-6 w-6" onClick={() => setMenuOpen(!menuOpen)} />
    </nav>
  )
}
