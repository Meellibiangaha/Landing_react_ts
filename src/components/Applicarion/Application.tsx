import '../../styles/application.css';
import ApplicationImg from '../../img/application/phone.png';
function Application({ children, title }: { children: React.ReactNode, title: string }) {

    return (
        <div className='application__wrapper'>
            <div className="application__content">
                <h1 className="application__title">{title}</h1>
                <img className='application__img' src={ApplicationImg} alt="" width='533px' height='529px' />
                {children}
            </div>

        </div>
    );
}

export default Application;