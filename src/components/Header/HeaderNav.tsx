import MyButtonRounded from '../UI/MyButton/MyButtonRounded';

import headerLogo from '../../img/header/logo.png';

function HaderNav() {
  return (
    <div className='header__nav__wrapper'>

      <div className='header__logo__wrapper'>
        <img className='header__logo'
          src={headerLogo}
          alt=""
          width='64px'
          height='64px'
        />
        <div className='header__logo__text'>
          React<br/>TypeScript
          </div>

      </div>


      <nav className='header__nav__wrapper__links'>
        <a href='#' className='header__nav'>Главная</a>
        <a href='#' className='header__nav'>Почему именно мы?</a>
        <a href='#' className='header__nav'>Контакты</a>

        <div className='header__nav__btn__wrapper'>
          <MyButtonRounded className='header__nav__btn' text='Заказать' />
        </div>
      </nav>
    </div>
  );
}

export default HaderNav;
