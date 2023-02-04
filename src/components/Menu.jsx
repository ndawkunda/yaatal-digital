import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/services">Services</Link>
      <Link to="/a-propos">A propos</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Menu

