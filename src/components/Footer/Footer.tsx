import '../../styles/footer.css';



function Footer({ title }: { title: string }) {

    const svgElems = 
    [
        `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M38-160v-94q0-35 18-63.5t50-42.5q73-32 131.5-46T358-420q62 0 120 14t131 46q32 14 50.5 42.5T678-254v94H38Zm700 0v-94q0-63-32-103.5T622-423q69 8 130 23.5t99 35.5q33 19 52 47t19 63v94H738ZM358-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42Zm360-150q0 66-42 108t-108 42q-11 0-24.5-1.5T519-488q24-25 36.5-61.5T568-631q0-45-12.5-79.5T519-774q11-3 24.5-5t24.5-2q66 0 108 42t42 108ZM98-220h520v-34q0-16-9.5-31T585-306q-72-32-121-43t-106-11q-57 0-106.5 11T130-306q-14 6-23 21t-9 31v34Zm260-321q39 0 64.5-25.5T448-631q0-39-25.5-64.5T358-721q-39 0-64.5 25.5T268-631q0 39 25.5 64.5T358-541Zm0 321Zm0-411Z"/></svg>`,
        ``,
        ``,
        ``,
        ``

    ];


    return (
        <div className='footer__wrapper'>
            <div className="footer__content">
                <h1 className="footer__title">{title}</h1>
                <div className='footer__links__wrapper'>

                </div>
                
                <div>
                    <p className='footer__light__text'>© 2021– <span> </span>, WEB Studio - Разработка сайтов для предприятий</p>
                    <p className='footer__dark__text'>Политика сайта и обработка персональных данных</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;