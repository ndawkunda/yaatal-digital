import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'
import Home from './Home'
import Services from './Services'
import About from './About'
import Contact from './Contact'
import './styles/layouts/app.scss'

const App = () => {
  return (
    <>
      <Menu />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
