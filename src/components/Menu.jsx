import { Link } from 'react-router-dom'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Menu = () => {

  const [menuOpen, setMenuOpen] = useState(true)

  return (
    <>
      <div className='topbar'>
        <h1 className='logo'>LOGO</h1>
        <nav>
          { menuOpen ? <FaBars /> : <FaTimes /> }
  
          <ul className='main-menu'>
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
      </div>
    </>
  )
}

export default Menu

