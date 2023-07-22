import slide1 from '../../img/portfolio/portfolio_carusel/carusel_1.png';
import slide2 from '../../img/portfolio/portfolio_carusel/carusel_2.png';
import slide3 from '../../img/portfolio/portfolio_carusel/carusel_3.png';
import slide4 from '../../img/portfolio/portfolio_carusel/carusel_4.png';
import slide5 from '../../img/portfolio/portfolio_carusel/carusel_5.png';
import slide6 from '../../img/portfolio/portfolio_carusel/carusel_6.png';
import slide7 from '../../img/portfolio/portfolio_carusel/carusel_7.png';

function CaruselImg({ src }: { src: string }) {
  return (
    <div className="slide">
      <img src={src} alt="" width='567px' height='363px' />
    </div>

  );
}

function PortfolioCarusel() {
  return (

    <div className='slider__container__wrapper'>
      <div className="slider__container">
        <div>
          <div className="slider">
          <CaruselImg src={slide1} />
          <CaruselImg src={slide2} />
          <CaruselImg src={slide3} />
          <CaruselImg src={slide4} />
          <CaruselImg src={slide5} />
          <CaruselImg src={slide6} />
          <CaruselImg src={slide7} />
        </div>
        </div>
        
        <button className="prev__button">
          <svg className='carusel__button carusel__button__prev' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M400-93.847 13.847-480 400-866.153l49.589 49.999L113.178-480l336.411 336.154L400-93.847Z" /></svg>
        </button>
        <button className="next__button">
          <svg className='carusel__button carusel__button__next' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m312.359-94.924-49.589-49.743 336.411-336.41L262.77-817.231l49.589-49.999 386.153 386.153L312.359-94.924Z" /></svg>
        </button>
      </div>
    </div>

  );
}

export default PortfolioCarusel;
