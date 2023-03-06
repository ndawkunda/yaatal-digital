import '../styles/layouts/services.scss';
import '../styles/components/_buttons.scss';
import picture from "../styles/images/randomImage.png";
import serviceImage from "../styles/images/business-5475661_960_720.jpg";


const Services = () => {


  return( 
    <>
      <div className="headService">
        <img src={serviceImage} alt="service's image" />
        <h1 >Nos Services</h1>
      </div>
      <section className="cardServices grid">
        <div className="cards CM">
          <div className="wrap">
              <h3>Community Management</h3>
              <p className="textCard">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam omnis nostrum quod. Qui est illo quaerat? Ipsum minus doloremque quisquam libero sint nesciunt facilis totam!</p>
              <div className="buttonCard">
                <button className='rounded-plain-btn'> <a href="#detailsCM">En savoir +</a> </button>
              </div>
          </div>
        </div>
        <div className="cards RI">
          <div className="wrap">
            <h3>Relations Influenceurs</h3>
            <p className="textCard">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam omnis nostrum quod. Qui est illo quaerat? Ipsum minus doloremque quisquam libero sint nesciunt facilis totam!</p>
            <div className="buttonCard">
              <button className='rounded-plain-btn'><a href="#detailsRI">En savoir +</a></button>
            </div>
          </div>
        </div>
        <div className="cards PR">
          <div className="wrap">
            <h3>Publicités et référencement</h3>
            <p className="textCard">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam omnis nostrum quod. Qui est illo quaerat? Ipsum minus doloremque quisquam libero sint nesciunt facilis totam!</p>
            <div className="buttonCard">
              <button className='rounded-plain-btn' ><a href="#detailsPR">En savoir +</a></button>
            </div>
          </div>
        </div>
      </section>


      <section className="otherService">
        <h2>Autres services</h2>
        <span className='line'><span></span></span>
        <div className="otherServicesContainer grid">
          <div className="otherServices data">
            <h4>Data Science</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolor, necessitatibus officiis minima totam expedita, facere fugit, neque impedit assumenda reprehenderit maxime iste tempore cum.</p>
            <button className='rounded-plain-btn' >En savoir +</button>
          </div>
          <div className="otherServices video">
            <h4>Montage video & son</h4> 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolor, necessitatibus officiis minima totam expedita, facere fugit, neque impedit assumenda reprehenderit maxime iste tempore cum.</p>
            <button className='rounded-plain-btn' >En savoir +</button>
          </div>
          <div className="otherServices design">
            <h4>Design</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolor, necessitatibus officiis minima totam expedita, facere fugit, neque impedit assumenda reprehenderit maxime iste tempore cum.</p>
            <button className='rounded-plain-btn' >En savoir +</button>
          </div>
          <div className="otherServices data">
            <h4>Branding</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolor, necessitatibus officiis minima totam expedita, facere fugit, neque impedit assumenda reprehenderit maxime iste tempore cum.</p>
            <button className='rounded-plain-btn' >En savoir +</button>
          </div>
          <div className="otherServices video">
            <h4>Analyse de Performance</h4> 
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolor, necessitatibus officiis minima totam expedita, facere fugit, neque impedit assumenda reprehenderit maxime iste tempore cum.</p>
            <button className='rounded-plain-btn' >En savoir +</button>
          </div>
          <div className="otherServices design">
            <h4>Social Ads</h4>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis dolor, necessitatibus officiis minima totam expedita, facere fugit, neque impedit assumenda reprehenderit maxime iste tempore cum.</p>
            <button className='rounded-plain-btn' >En savoir +</button>
          </div>
        </div>
      </section>


      <section className="detailServices">
          <a name="detailsCM"></a>
        <div className="detailsCM">
          <div className="detail">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="detail middle">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="detail">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
        </div>
        <a name="detailsRI"></a>
        <div className="detailsRI">
          <div className="detail">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="detail detailRI middle">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="detail">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
        </div>
        <a name="detailsPR"></a>
        <div className="detailsPR">
          <div className="detail">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="detail middle">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="detail">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services


