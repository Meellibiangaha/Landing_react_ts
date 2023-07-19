import '../../styles/cooperate_card.css';
function CooperateCard({bigText, smallText, imgSrc}: {bigText:string, smallText:string, imgSrc: string}) {
    return (
        <div className='cooparate__card__wrapper'>
            <h3>{bigText}</h3>
            <p>{smallText}</p>
            <img 
            src={imgSrc} 
            alt="" 
            width='211px'
            height='211px'
            />
        </div>
    );
}

export default CooperateCard;