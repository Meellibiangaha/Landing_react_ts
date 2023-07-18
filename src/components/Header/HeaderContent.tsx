import React from 'react';

function HeaderContent() {
    return (
        <div className='header__content'>
            
            <p className='header__content__bigText'>
                РАЗРАБОТКА САЙТОВ
                <br />
                для вашего бизнеса
            </p>
            <div className='header__content__shadow'></div>
            


            <p className='header__content__smallText'>

                Мы - студия web-разработки, работаем уже более 3-х<br /> лет, готовы разработать для вас сайт в кротчайшие сроки.</p>

            <div className='header__content__btnDiv'>
                <button className='header__nav__btn header__content__btn'>Подробнее </button>
                <a href='#' className='header__content__btnDiv_text'>Остались вопросы?</a>
            </div>
        </div>
    );
}

export default HeaderContent;
