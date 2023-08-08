import { useEffect, useState } from 'react';

import MyButtonRounded from "../UI/MyButton/MyButtonRounded";

import { nextSlideTarif, prevSlideTarif } from "./CaruselFunck";

const TarifSingle = ({ title, text, price, time, className }: { title: string, text: string, price: string, time: string, className: string }) => {
    const combinedClassName = `portfolio__tarif__single ${className || ''}`;
    return (
        <div className={combinedClassName}>
            <h1 className="tarif__h1">{title}</h1>
            <p className="tarif__p">{text}</p>

            <div className="tarif__bottom__wrapper">
                <div className="tarif__bottom__text">
                    <div className="tarif__bottom__price">От {price}₽</div>
                    <div className="tarif__bottom__time">От {time} дней</div>
                </div>
                <div className="tarif__bottom__btn">
                    <MyButtonRounded text="Подробнее"/>
                </div>
            </div>

        </div>

    );
}

const chooseClassTarif = (tarifArr: NodeListOf<HTMLElement>, newCount: number, oldCount: number) => {
    tarifArr[oldCount].classList.remove('portfolio__tarif__single__active');
    tarifArr[newCount].classList.add('portfolio__tarif__single__active');
}

function PortfolioTarifs() {
    //такая же схема, как с карточками Cooperate
    const tarifCardArr = [
        {
            title: 'Сайт “Каталог”',
            text: 'Сайт-каталог – это полноценный веб-ресурс, в котором потребители могут ознакомиться с товарами или услугами компании. Являясь удобным инструментом продаж, сайт-каталог может повысить доходность бизнеса и упростить задачу по предоставлению ассортимента целевой аудитории.',
            price: '60.000',
            time: '15'
        },

        {
            title: 'Сайт “Визитка”',
            text: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
            price: '30.000',
            time: '5'
        },

        {
            title: 'Сайт “Интернет магизин”',
            text: 'Сайт-визитка - компактный веб-ресурс – отличный старт бизнеса в интернете. Сайт-визитка содержит несколько страниц, в том числе – информацию о компании, её товарах и услугах, прейскурант цен, контакты и координаты для связи.',
            price: '75.000',
            time: '30'
        },

        {
            title: 'Сайт “Landing page”',
            text: 'Одностраничный сайт (Landing Page) – так называют промо-сайты для презентации товара, услуги и организации мгновенных продаж. Мы умеем создавать веб-ресурсы, полностью готовые к наплыву лавины посетителей. Одна-единственная страница принесёт колоссальную прибыль: иначе и быть не может.',
            price: '25.000',
            time: '17'
        },

        {
            title: 'Сайт “Корп.сайт”',
            text: 'Корпоративный сайт – это крупномасштабный портал, который создается не только для контакта организации с клиентами, но и для обмена информацией, мнениями, идеями между сотрудниками и руководством. Электронный ресурс такого типа – лицо компании, солидный «костюм», вызывающий у партнёров и контрагентов уважение и интерес.',
            price: '60.000',
            time: '17'
        },

        {
            title: 'Сайт “Индивидуальный”',
            text: 'Мы готовы выслушать вашу идею, и выполнить задание. Цена проекта будет складываться от ее технического задания и сроков выполнения.',
            price: '?',
            time: '?'
        },
    ];

    const [caruselItem, setCaruselItem] = useState<number>(0);

    const [width, setWidth] = useState<number>(0);
    const [count, setСount] = useState(0);  //na skolko div prokrutka

    const [list, setList] = useState<HTMLElement>();
    const [listElems, setListElems] = useState<NodeListOf<HTMLElement>>(document.querySelectorAll('.carusel__single'));

    const [position, setPosition] = useState(0);
    const [countBlock, setСountBlock] = useState(0); // счетчик видимого блока

    useEffect(() => {
        // Чтобы querySelector отработал после рендера компонента
        const caruselElement = document.querySelector('.portfolio__tarif__wrapper') as HTMLElement;
        if (caruselElement) {
            setCaruselItem(caruselElement.querySelectorAll('.portfolio__tarif__single').length - 1);

            const widthValue = caruselElement.querySelector('.portfolio__tarif__single') as HTMLElement;
            setWidth(widthValue.clientWidth);

            //3 блока видно, 2й по центру
            setPosition(-(widthValue.clientWidth));

            setList(caruselElement.querySelector('.portfolio__tarif__silder__lenta') as HTMLElement);
            setListElems(caruselElement.querySelectorAll('.portfolio__tarif__single') as NodeListOf<HTMLElement>);

            setСountBlock(1);
            setСount(1);
        }
    }, [listElems.length]);

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
        let oldCountBlock: number = countBlock;
        //устанавливаем новые значения, чтобы слайдер смог дальше воркать
        setPosition(newPosition);
        setСountBlock(newCountBlock);

        //добавляем блоку класс актив (со старого убираем)
        chooseClassTarif(listElems, newCountBlock, oldCountBlock);
    };

    function PrevTarifBtn() {
        return (
            <button className="prev__tarif__button" onClick={() => setValueSlide(prevSlideTarif)}>
                <svg className='tarif__button tarif__button__prev' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M400-93.847 13.847-480 400-866.153l49.589 49.999L113.178-480l336.411 336.154L400-93.847Z" /></svg>
            </button>
        );
    };

    function NextTarifBtn() {
        return (
            <button className="next__tarif__button" onClick={() => setValueSlide(nextSlideTarif)}>
                <svg className='tarif__button tarif__button__next' xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m312.359-94.924-49.589-49.743 336.411-336.41L262.77-817.231l49.589-49.999 386.153 386.153L312.359-94.924Z" /></svg>
            </button>
        );
    };

    //всё ещё не знаю в качестве ключа что использовать
    return (
        <div className="portfolio__tarif__wrapper">
            <h1 className="portfolio__tarif__silder_title">Тарифы</h1>
            <div className="portfolio__tarif__silder">

                <div className="portfolio__tarif__silder__wrapper">
                    <div className="portfolio__tarif__silder__lenta">
                        {tarifCardArr.map((tarifCard, index) =>
                            <TarifSingle
                                title={tarifCard.title}
                                text={tarifCard.text}
                                price={tarifCard.price}
                                time={tarifCard.time}
                                className={(index === 1) ? 'portfolio__tarif__single__active' : ''}

                                key={index}
                            />
                        )}
                    </div>

                </div>
                <PrevTarifBtn />
                <NextTarifBtn />
            </div>
        </div>
    );
}

export default PortfolioTarifs;