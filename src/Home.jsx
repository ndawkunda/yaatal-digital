import { Link } from 'react-router-dom'
import {
  FaThinkPeaks,
  FaLongArrowAltRight,
  FaConnectdevelop,
} from 'react-icons/fa'
import './styles/layouts/home.scss'

const Home = () => {
  return (
    <>
      <div className='landing'>
        <img src='/img/img.png' alt='landing background' className='bg' />
        <div className='text-container'>
          <h1 className='title title-1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit
          </h1>
          <p className='desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
            aliquid saepe dolorem voluptatem eaque reiciendis enim labore, illo
            magni animi suscipit quaerat.
          </p>
        </div>
      </div>

      <div className='services'>
        <div className='text-container'>
          <h3 className='subtitle subtitle-1'>
            Nous vous aidons à{' '}
            <span>
              <FaThinkPeaks />
              <FaThinkPeaks />
              <FaThinkPeaks />
            </span>
          </h3>
          <h1 className='title title-2'>Concevoir de meilleurs solutions</h1>
          <Link to='/services' className='btn rounded-btn'>
            Nos services <FaLongArrowAltRight />
          </Link>
        </div>

        <div className='cards-container'>
          <div className='card'>
            <div className='icon'>
              <FaConnectdevelop />
            </div>
            <div className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
              necessitatibus. Sunt soluta et, at perferendis placeat aliquid
              totam iste corrupti qui praesentium eveniet, nisi error itaque,
              provident accusantium rerum saepe?
            </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <FaConnectdevelop />
            </div>
            <div className='text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium nobis perferendis repellat. Quod consequuntur eaque
              explicabo dignissimos reprehenderit ex, numquam molestias
              laudantium ducimus recusandae, similique quas voluptate
              consequatur, nulla laboriosam?
            </div>
          </div>
          <div className='card'>
            <div className='icon'>
              <FaConnectdevelop />
            </div>
            <div className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur corporis quaerat odio, minus earum blanditiis
              voluptates suscipit placeat repudiandae quod nihil quo molestiae!
              Pariatur ratione eos, modi accusamus voluptas vel!
            </div>
          </div>
          <div className='card'>
            <div className='text'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
              porro animi quod quo mollitia quaerat. Nesciunt distinctio,
              laborum accusamus cupiditate rem eligendi autem cum similique eius
              illo, voluptas dolor dolorum!
            </div>
            <Link to='/services' className='btn nude-btn'>
              En savoir plus <FaLongArrowAltRight />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
