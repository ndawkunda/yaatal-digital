import '../styles/layouts/about.scss';
import picture from "../styles/images/randomImage.png"

const About = () => {
  return (
    <>
      <div className="aboutUs">
        <div className="head">
          <div className="imageWrap">
            <img src={picture} alt="image group" />
          </div>
          <div className="text">
            <h1 className='title'>About Us</h1>
            <h1 className='lineicon'></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat temporibus! Commodi dolorum molestias libero iste maxime non qui ullam nemo? Consectetur quia labore, voluptatem eaque iusto voluptatum suscipit architecto!
            </p>
          </div>
        </div>

        <br />

        <div className="whyUs head">
          <div className="imageWrap">
            <img src={picture} alt="image group" />
          </div>
          <div className="text">
            <h1 className='title'>Pourquoi SSD ?</h1>
            <h1 className='lineicon'></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat temporibus! Commodi dolorum molestias libero iste maxime non qui ullam nemo? Consectetur quia labore, voluptatem eaque iusto voluptatum suscipit architecto!
            </p>
          </div>
        </div>

        <br />


        <div className="team head">
          <div className="imageWrap">
            <img src={picture} alt="image group" />
          </div>
          <div className="text">
            <h1 className='title'>Notre équipe</h1>
            <h1 className='lineicon'></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, quaerat temporibus! Commodi dolorum molestias libero iste maxime non qui ullam nemo? Consectetur quia labore, voluptatem eaque iusto voluptatum suscipit architecto!
            </p>
          </div>
        </div>
        <br />

        <div className="members">
          <div className="member">
            <img src={picture} alt="member" />
            <div className="wrapText">
              <h1 className='name'>Galo DIOKHANE</h1>
              <h1 className='lineicon'></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          <div className="member member2">
            <img src={picture} alt="member" />
            <div className="wrapText">
              <h1 className='name'>Ainina NDAW</h1>
              <h1 className='lineicon'></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          <div className="member member3">
            <img src={picture} alt="member" />
            <div className="wrapText">
              <h1 className='name'>Abdoulaye DIALLO</h1>
              <h1 className='lineicon'></h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </div>
          </div>
          <br />
        </div>

      </div>
    </>
  )
}

export default About
