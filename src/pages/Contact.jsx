import '../styles/layouts/contact.scss'
import { FaPhoneAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <>
      <div className='contact'>
        <img src='./img/contact.jpg' alt='' className='bg' />
        <div className="text-container">
          <h2 className='title-2'><FaPhoneAlt /> Contactez-nous !</h2>
          <form action='#' className='form'>
            <input type='text' name='name' id='name' placeholder='Votre nom' />
            <input
              type='email'
              name='email'
              id='email'
              placeholder='Votre email'
            />
            <input
              type='number'
              name='phone'
              id='phone'
              placeholder='Votre numéro de téléphone'
            />
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='5'
              placeholder='Votre message...'
            ></textarea>
            <button type='submit' id='submit' className='rounded-plain-btn'>
              Envoyer <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
