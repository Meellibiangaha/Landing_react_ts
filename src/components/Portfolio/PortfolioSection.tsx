import '../../styles/portfolio.css';
import '../../styles/portfolio_carusel.css';

import MyButtonRounded from '../UI/MyButton/MyButtonRounded';
import PortfolioCarusel from './PortfolioCarusel';
import PortfolioTarifs from './PortfolioTarifs';


function PortfolioSection() {

  return (
    <div className='portfolio__wrapper'>
      <div className='portfolio__background'>
        <div className=' portfolio__content__wrapper'>

          <div className='cooperate__content__flexbox__text'>
            <h1 className='portfolio__content__text_h1'>Наше портфолио</h1>
            <p className='portfolio__content__text_p'>В данном портфолио вы сможете увидеть кейсы наших работ на 2022 - 2023 год</p>
            <div>
              <MyButtonRounded text='Компьютерные версии' />
            </div>
          </div>
          <PortfolioCarusel />
        </div>
        <PortfolioTarifs />
      </div>
    </div>
  );
}

export default PortfolioSection;