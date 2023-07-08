import { Link } from 'react-router-dom'

import './footer.scss'


const Footer = () => {
return (
  <div className='footer'>
    <h1 className='company'>YAATAL DIGITAL</h1>
    <p className='copy'>Tous droits réservés &copy; {new Date().getFullYear()}</p>
    <ul className='menu'>
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
  </div>
)

}

export default Footer