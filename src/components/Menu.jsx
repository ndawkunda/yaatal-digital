import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggle = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <nav className='header'>
        <div className='topbar'>
          <h1 className='logo'>LOGO</h1>
          <div className='menu-btn'>
            {menuOpen ? (
              <FaTimes onClick={menuToggle} />
            ) : (
              <FaBars onClick={menuToggle} />
            )}
          </div>
        </div>

        <ul className={menuOpen ? 'main-menu menu-open' : 'main-menu'}>
          <li className='link'>
            <Link to='/' onClick={menuToggle}>
              Accueil
            </Link>
          </li>
          <li className='link'>
            <Link to='/services' onClick={menuToggle}>
              Services
            </Link>
          </li>
          <li className='link'>
            <Link to='/a-propos' onClick={menuToggle}>
              A propos
            </Link>
          </li>
          <li className='link'>
            <Link to='/contact' onClick={menuToggle}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
