import MyButtonRounded from '../UI/MyButton/MyButtonRounded';

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
                <MyButtonRounded className='header__content__btn' text='Подробнее'/>
                <a href='#' className='header__content__btnDiv_text'>Остались вопросы?</a>
            </div>
        </div>
    );
}

export default HeaderContent;
