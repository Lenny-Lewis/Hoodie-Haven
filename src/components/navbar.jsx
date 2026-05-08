import React from 'react'

const Navbar = () => {
  const navLinks = ['Home', 'About', 'Haven Store', 'FAQ']

  return (
    <div className="flex items-center justify-between">
      <img
        src="assets/hood.png"
        alt="Logo"
        className="w-20 h-20"
      />

      <nav>
        <ul className="flex ml-40 text-xl font-medium">
          {navLinks.map((link) => (
            <li
              key={link}
              className="pl-15 text-xl font-sans text-[var(--gold)] cursor-pointer hover:text-gray-400"
            >
              {link}
            </li>
          ))}
        </ul>
      </nav>

      <img
        src="assets/shopping-cart.png"
        alt="Cart"
        className="w-15 h-15 "
      />

      <br className='text-[var(--blue)]'/>
    </div>
  )
}

export default Navbar