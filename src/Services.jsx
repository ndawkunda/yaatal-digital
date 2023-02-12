import './styles/layouts/services.scss';
import './styles/components/_buttons.scss';
import picture from "./styles/images/randomImage.png";


const Services = () => {


  return( 
    <>
      <div className="headService">
        <h1>Nos Services</h1>
      </div>
      <section className="cardServices grid">
        <div className="cards CM">
          <div className="wrap">
              <h3>Community Management</h3>
              <p className="textCard">Avec notre équipe de Community Managers internationaux, nous sommes à même de décliner et mettre en place votre stratégie social media en France, en Europe et dans le reste du monde.</p>
              <div className="buttonCard">
                <button className='rounded-plain-btn'> <a href="#detailsCM">En savoir +</a> </button>
              </div>
          </div>
        </div>
        <div className="cards RI">
          <div className="wrap">
            <h3>Relations Influenceurs</h3>
            <p className="textCard">Notre équipe digitale est à votre écoute pour identifier les influenceurs de votre secteur et pour développer une stratégie d’influence qui corresponde à votre marque et à vos besoins de notoriété en ligne.</p>
            <div className="buttonCard">
              <button className='rounded-plain-btn'><a href="#detailsRI">En savoir +</a></button>
            </div>
          </div>
        </div>
        <div className="cards PR">
          <div className="wrap">
            <h3>Publicités et référencement</h3>
            <p className="textCard">Facebook ads, Instagram ads, Google Adwords etc. Des publicités en ligne à la mise à jour technique de votre site web en passant par l’amélioration de son référencement naturel via l’optimisation des mots clés, Open2Digital est l’agence de communication digitale qu’il vous faut !</p>
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
        <div className="detailsCM">
          <a name="detailsCM"></a>
          <div className="CM">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="CM">
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
          </div>
          <div className="CM">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
        </div>
        <div className="detailsRI">
        <a name="detailsRI"></a>
          <div className="CM">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="CM">
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
          </div>
          <div className="CM">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
        </div>
        <div className="detailsPR">
        <a name="detailsPR"></a>
          <div className="CM">
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
          </div>
          <div className="CM">
            <div className="text">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta, assumenda dolorum sint sequi dignissimos nam iusto molestiae vitae odio laborum. Ducimus quibusdam, velit voluptas impedit aperiam deserunt rerum quisquam. Tempore deleniti, odio omnis dignissimos quae explicabo, aperiam, illo molestiae voluptatem porro vitae minima suscipit asperiores. Minus asperiores minima dicta quo.</p>
            </div>
            <div className="images">
              <img src={picture} alt="randomImage" />
            </div>
          </div>
          <div className="CM">
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

