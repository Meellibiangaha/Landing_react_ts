import MyButtonSquare from "../UI/MyButton/MyButtonSquare";
import CooperateCard from "./CooperateCard";

function CooperateContent() {
    return (
        <div className='cooperate__background cooperate__flex__container'>
            <div className="cooperate__content__flexbox">
                <div className="cooperate__content__flexbox__text">
                    <h1 className="cooperate__content__flexbox__text_h1">Причины сотрудничать с нами</h1>
                    <p className="cooperate__content__flexbox__text_p">Пока конкуренты говорят о том, что они лучшие - мы это доказываем делом.</p>
                    <p className="cooperate__content__flexbox__text_p">Вы можете ознакомиться с информацией о нас и посмотреть наше портфолио</p>
                    <MyButtonSquare text="Портфолио"/>
                </div>
                <CooperateCard 
                bigText="Приемлимые цены"
                smallText="Мы максимально оптимизируем наш труд, для того, чтобы цены были доступными"
                imgSrc=""
                />
            </div>

            <div className="cooperate__content__flexbox">
                <CooperateCard 
                bigText="В сроки сдаем работу!"
                smallText="Расписываем каждый этап по срокам, и придерживаемся дедлайнов"
                imgSrc=""
                />

                <CooperateCard 
                bigText="Команда специалистов"
                smallText="В нашей команде множество специалистов, и каждый из них хорошо знает свое дело"
                imgSrc=""
                />

                <CooperateCard 
                bigText="Консультация перед заказом"
                smallText="Наши менеджеры в сети 24/7, и готовы помочь вам, а так же ответить на ваши вопросы"
                imgSrc=""
                />
            </div>
        </div>
    );
}

export default CooperateContent;