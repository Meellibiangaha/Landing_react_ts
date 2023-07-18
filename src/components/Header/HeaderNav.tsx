import React from 'react';

function HaderNav() {
  return (
    <div className='header__nav__wrapper'>
      <div>Logo</div>

      <nav className='header__nav__wrapper__links'>
        <a href='#' className='header__nav'>Главная</a>
        <a href='#' className='header__nav'>Почему именно мы?</a>
        <a href='#' className='header__nav'>Контакты</a>

        <div className='header__nav__btn__wrapper'>
          <button className='header__nav__btn'>Заказать</button>
        </div>
      </nav>
    </div>
  );
}

export default HaderNav;
