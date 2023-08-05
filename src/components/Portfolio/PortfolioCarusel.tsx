import { useEffect, useState } from 'react';

import slide1 from '../../img/portfolio/portfolio_carusel/carusel_1.png';
import slide2 from '../../img/portfolio/portfolio_carusel/carusel_2.png';
import slide3 from '../../img/portfolio/portfolio_carusel/carusel_3.png';
import slide4 from '../../img/portfolio/portfolio_carusel/carusel_4.png';
import slide5 from '../../img/portfolio/portfolio_carusel/carusel_5.png';
import slide6 from '../../img/portfolio/portfolio_carusel/carusel_6.png';
import slide7 from '../../img/portfolio/portfolio_carusel/carusel_7.png';

import { nextSlide, prevSlide } from './CaruselFunck';

function CaruselImg({ src }: { src: string }) {
  return (
    <div className="slide">
      <img className='carusel__single' src={src} alt="" width='567px' height='363px' />
    </div>

  );
}


function PortfolioCarusel() {
  const [caruselItem, setCaruselItem] = useState<number>(0);

  const [width, setWidth] = useState<number>(0);
  const [count, setСount] = useState(0);  //na skolko div prokrutka

  const [list, setList] = useState<HTMLElement>();
  const [listElems, setListElems] = useState<NodeListOf<HTMLElement>>(document.querySelectorAll('.carusel__single'));

  const [position, setPosition] = useState(0);
  const [countBlock, setСountBlock] = useState(0); // счетчик видимого блока

  //вызывается функция слайдера, потом меняем position и countBlock через состояния
  const setValueSlide = (func: Function) => {
    //декомпозицией забираем наши новые значения
    const { newPosition, newCountBlock } = func({
      position,
      width,
      caruselItem,
      list,
      countBlock,
      count,
      listElems,
    });
    setPosition(newPosition);
    setСountBlock(newCountBlock);
  };

  useEffect(() => {
    // Чтобы querySelector отработал после рендера компонента
    const caruselElement = document.querySelector('.slider__container') as HTMLElement;
    if (caruselElement) {
      setCaruselItem(caruselElement.querySelectorAll('.carusel__single').length - 1);

      const widthValue = caruselElement.querySelector('.carusel__single') as HTMLElement;
      //это всё для того, чтобы найти margin-right, я в шоке
      const slideElem = caruselElement.querySelector('.slide') as HTMLElement;
      const computedStyles = window.getComputedStyle(slideElem);
      const slideMarginValue = computedStyles.marginRight;
      
      setWidth(widthValue.clientWidth + parseFloat(slideMarginValue));

      setList(caruselElement.querySelector('.slider') as HTMLElement);
      setListElems(caruselElement.querySelectorAll('.carusel__single') as NodeListOf<HTMLElement>);
      
      setСount(1);
    }
  }, []);

  const imgList = [slide1, slide2, slide3, slide4, slide5, slide6, slide7];
  return (
    <div className='slider__container__wrapper'>
      <div className="slider__container">
        <div>
          <div className="slider">
            {imgList.map((img, index) => <CaruselImg src={img} key={index} />)}
          </div>
          <button className="prev__button" onClick={() => setValueSlide(prevSlide)}>
            <svg className='carusel__button carusel__button__prev' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M400-93.847 13.847-480 400-866.153l49.589 49.999L113.178-480l336.411 336.154L400-93.847Z" /></svg>
          </button>
          <button className="next__button" onClick={() => setValueSlide(nextSlide)}>
            <svg className='carusel__button carusel__button__next' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m312.359-94.924-49.589-49.743 336.411-336.41L262.77-817.231l49.589-49.999 386.153 386.153L312.359-94.924Z" /></svg>
          </button>
        </div>
      </div>
    </div>

  );
}

export default PortfolioCarusel;
