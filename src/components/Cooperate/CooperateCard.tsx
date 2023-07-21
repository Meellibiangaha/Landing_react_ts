import '../../styles/cooperate_card.css';

import MySvgComponent from '../MySvgComponent/MySvgComponent';
function CooperateCard({bigText, smallText, svgElem}: {bigText:string, smallText:string, svgElem: string}) {
    // Создаем React-элемент из SVG-кода

    return (
        <div className='cooparate__card__wrapper'>
            <h3 className='cooparate__card_h3'>{bigText}</h3>
            <p className='cooparate__card_p'>{smallText}</p>
            <MySvgComponent className='svg__hover' svgCode={svgElem}/>
        </div>
    );
}

export default CooperateCard;