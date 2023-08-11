import '../../styles/cooperate_card.css';

import MySvgComponent from '../MySvgComponent/MySvgComponent';
function CooperateCard({bigText, smallText, svgElem, className}: {bigText:string, smallText:string, svgElem: string, className?: string}) {
    // Создаем React-элемент из SVG-кода
    const combinedClassName = `cooparate__card__wrapper ${className || ''}`;
    return (
        <div className = {combinedClassName}>
            <h3 className='cooparate__card_h3'>{bigText}</h3>
            <p className='cooparate__card_p'>{smallText}</p>
            <MySvgComponent className='svg__hover' svgCode={svgElem}/>
        </div>
    );
}

export default CooperateCard;