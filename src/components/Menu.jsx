import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
      <div className='topbar'>
        <h1 className='logo'>LOGO</h1>
        <nav className='main-menu'>
          <ul>
            <li>
              <Link to='/'>Accueil</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/a-propos'>A propos</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Menu

