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
          {menuOpen ? (
            <FaTimes onClick={menuToggle} />
          ) : (
            <FaBars onClick={menuToggle} />
          )}
        </div>

        <ul className={menuOpen ? 'main-menu menu-open' : 'main-menu'}>
          <li className='link'>
            <Link to='/'>Accueil</Link>
          </li>
          <li className='link'>
            <Link to='/services'>Services</Link>
          </li>
          <li className='link'>
            <Link to='/a-propos'>A propos</Link>
          </li>
          <li className='link'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Menu
