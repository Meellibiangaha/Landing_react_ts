import { isDesktop, isMobile } from '../../config';

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
      <img className='carusel__single' src={src} alt="" width='567px' height='363px' />
    </div>

  );
}






function PortfolioCarusel() {
  const carusel = document.querySelector('.slider__container');
  const caruselItem = document.querySelectorAll('.carusel__single').length - 1;
  const width = (document.querySelector('.carusel__single') as HTMLElement)?.clientWidth; //size blocka
  let count = 1;  //na skolko div prokrutka

  const list = carusel ? (carusel.querySelector('.slider') as HTMLElement) : null; //sama lenta
  const listElems = carusel ? (carusel.querySelectorAll('.carusel__single')) : [];
  let position = 0;

  // счетчик видимого блока
  let countBlock = 0;

  const valueChange = (value: number, unit: 'px' | 'rem' | 'em') => `${value}${unit}`;

  function nextSlide() {

    if (position === -(width * caruselItem)) {
      position = 0;
      if(list){
        list.style.marginLeft = valueChange(position, 'px');
      }
      countBlock = 0;
    }
    else {
      position -= width * count;
      position = Math.max(position, -width * (listElems.length - count));
      if(list){
        list.style.marginLeft = valueChange(position, 'px');
      }
      
      countBlock++;
    }
  }

  function prevSlide() {
    if (position === 0) {
      position = -width * caruselItem;
      if(list){
        list.style.marginLeft = valueChange(position, 'px');
      }
      countBlock = caruselItem;
    }
    else {
      position += width * count;
      position = Math.min(position, 0);
      if(list){
        list.style.marginLeft = valueChange(position, 'px');
      }
      countBlock--;
    }
  }

  const imgList = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
  return (
    <div className='slider__container__wrapper'>
      <div className="slider__container">
        <div>
          <div className="slider">
            {imgList.map((img, index) => <CaruselImg src={img} key={index} />)}
          </div>
          <button className="prev__button" onClick={prevSlide}>
            <svg className='carusel__button carusel__button__prev' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M400-93.847 13.847-480 400-866.153l49.589 49.999L113.178-480l336.411 336.154L400-93.847Z" /></svg>
          </button>
          <button className="next__button" onClick={nextSlide}>
            <svg className='carusel__button carusel__button__next' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m312.359-94.924-49.589-49.743 336.411-336.41L262.77-817.231l49.589-49.999 386.153 386.153L312.359-94.924Z" /></svg>
          </button>
        </div>
      </div>
    </div>

  );
}

export default PortfolioCarusel;
