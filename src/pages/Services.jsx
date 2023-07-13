import { motion } from 'framer-motion'
import {
	FaEye,
	FaConnectdevelop,
	FaHornbill,
	FaDesktop,
} from 'react-icons/fa'


import { images } from '../constants'
import './services.scss'


const Services = () => {
	return (
		<div id='services'>
			<div className='header'>
				<motion.img
					whileInView={{ x: [100, 0] }}
					transition={{ duration: 0.5 }}
					src={images.services}
					alt='header background'
					className='bg'
				/>
				<motion.div
					whileInView={{ x: [-100, 0], opacity: [0, 1] }}
					transition={{ duration: 1 }}
					className='text-container'
				>
					<h1 className='title-2'>Concevoir de meilleurs solutions</h1>
					<p className='desc'>
						Nous vous proposons des services premium, à des prix défiant toutes
						concurences.
					</p>
					<a href='#main-services' className='rounded-plain-btn cta'>
						Découvrir nos services <FaEye />
					</a>
				</motion.div>
			</div>

			<div className='main-services' id='main-services'>
				<div className='cards-container'>
					<div className='card'>
						<FaConnectdevelop className='icon' />
						<div className='text'>
							<h2 className='title-2'>Transformation Digitale</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
							necessitatibus. Sunt soluta et, at perferendis placeat aliquid
							totam iste corrupti qui praesentium eveniet, nisi error itaque,
							provident accusantium rerum saepe?
						</div>
					</div>
					<div className='card'>
						<FaHornbill className='icon' />
						<div className='text'>
							<h2 className='title-2'>Community Management</h2>
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
							<h2 className='title-2'>IT Support</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur corporis quaerat odio, minus earum blanditiis
							voluptates suscipit placeat repudiandae quod nihil quo molestiae!
							Pariatur ratione eos, modi accusamus voluptas vel!
						</div>
					</div>
				</div>
			</div>

			<div className='other-services'>
				<div className='text-container'>
					<h1 className='title-2'>En encore plus de services...</h1>
				</div>
				<div className='cards-container'>
					<div className='card'>
						<div className='text'>
							<h2 className='title-2'>Business Plan</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
							necessitatibus. Sunt soluta et, at perferendis placeat aliquid
							totam iste corrupti qui praesentium eveniet, nisi error itaque,
							provident accusantium rerum saepe?
						</div>
					</div>
					<div className='card'>
						<div className='text'>
							<h2 className='title-2'>Montage Video</h2>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
							Accusantium nobis perferendis repellat. Quod consequuntur eaque
							explicabo dignissimos reprehenderit ex, numquam molestias
							laudantium ducimus recusandae, similique quas voluptate
							consequatur, nulla laboriosam?
						</div>
					</div>
					<div className='card'>
						<div className='text'>
							<h2 className='title-2'>Design</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur corporis quaerat odio, minus earum blanditiis
							voluptates suscipit placeat repudiandae quod nihil quo molestiae!
							Pariatur ratione eos, modi accusamus voluptas vel!
						</div>
					</div>
					<div className='card'>
						<div className='text'>
							<h2 className='title-2'>Branding</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur corporis quaerat odio, minus earum blanditiis
							voluptates suscipit placeat repudiandae quod nihil quo molestiae!
							Pariatur ratione eos, modi accusamus voluptas vel!
						</div>
					</div>
					<div className='card'>
						<div className='text'>
							<h2 className='title-2'>Audit</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur corporis quaerat odio, minus earum blanditiis
							voluptates suscipit placeat repudiandae quod nihil quo molestiae!
							Pariatur ratione eos, modi accusamus voluptas vel!
						</div>
					</div>
					<div className='card'>
						<div className='text'>
							<h2 className='title-2'>Social Ads</h2>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Consectetur corporis quaerat odio, minus earum blanditiis
							voluptates suscipit placeat repudiandae quod nihil quo molestiae!
							Pariatur ratione eos, modi accusamus voluptas vel!
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Services
