import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
	FaPhone,
	FaThinkPeaks,
	FaLongArrowAltRight,
	FaConnectdevelop,
	FaHornbill,
	FaDesktop,
} from 'react-icons/fa'

import { images } from '../constants'
import './home.scss'

const Home = () => {
  return (
		<div id='home'>
			<div className='header'>
				<motion.img
					whileInView={{ x: [100, 0] }}
					transition={{ duration: 0.5 }}
					src={images.home}
					alt='landing background'
					className='bg'
				/>
				<motion.div
					whileInView={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
					className='text-container'
				>
					<h1 className='title title-1'>YAATAL DIGITAL</h1>
					<p className='desc'>
						Nous vous accompagnons pour la création de votre site internet et le
						référencement naturel (SEO). Nous pouvons également prendre en
						charge la création de votre identité visuelle.
					</p>
					<Link to='/contact' className='rounded-plain-btn cta'>
						Nous contacter <FaPhone />
					</Link>
				</motion.div>
			</div>

			<div className='services'>
				<div className='text-container'>
					<h3 className='subtitle-1'>
						Nous vous aidons à
						<span>
							<FaThinkPeaks />
							<FaThinkPeaks />
							<FaThinkPeaks />
						</span>
					</h3>
					<h1 className='title-2'>Concevoir de meilleurs solutions</h1>
					<Link to='/contact' className='cta rounded-btn'>
						Nos services <FaLongArrowAltRight />
					</Link>
				</div>

				<div className='cards-container'>
					<div className='card'>
						<FaConnectdevelop className='icon' />
						<div className='text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
							necessitatibus. Sunt soluta et, at perferendis placeat aliquid
							totam iste corrupti qui praesentium eveniet, nisi error itaque,
							provident accusantium rerum saepe?
						</div>
					</div>
					<div className='card'>
						<FaHornbill className='icon' />
						<div className='text'>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium nobis perferendis repellat. Quod consequuntur eaque
							explicabo dignissimos reprehenderit ex, numquam molestias
							laudantium ducimus recusandae, similique quas voluptate
							consequatur, nulla laboriosam?
						</div>
					</div>
					<div className='card'>
						<FaDesktop className='icon' />
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
						<Link to='/services' className='btn'>
							En savoir plus <FaLongArrowAltRight />
						</Link>
					</div>
				</div>
			</div>

			<div className='method'>
				<div className='block left'>
					<img src='/img/method-1.jpg' alt='' />
					<div className='text-container'>
						<h3 className='title-2'>
							Nous designons des solutions qui améliorent le quotidien
						</h3>
						<p className='desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
							dolor voluptate repellendus unde tempore animi totam natus. Quo,
							facilis amet ad nulla, totam ratione, laborum voluptatibus
							repellendus ea porro excepturi?
						</p>
					</div>
				</div>
				<div className='block right'>
					<img src='/img/method-2.jpg' alt='' />
					<div className='text-container'>
						<h3 className='title-2'>
							Nous dévelopons des solutions adaptées à vos besoins
						</h3>
						<p className='desc'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
							dolor voluptate repellendus unde tempore animi totam natus. Quo,
							facilis amet ad nulla, totam ratione, laborum voluptatibus
							repellendus ea porro excepturi?
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
