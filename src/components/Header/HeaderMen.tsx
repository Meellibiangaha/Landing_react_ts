import React from 'react';
import headerMenImage from '../../img/header/men.png';
import headerCircleImage from '../../img/header/men_circle.png';

function HeaderMen() {
    return (
        <div className='header__img__relative_div'>

            <img
                className='header__img__relative2'
                src={headerCircleImage}
                alt=""
                width='600px'
                height='600px'
            />

            <img
                className='header__img__relative1'
                src={headerMenImage}
                alt=""
                width="563px"
                height="744px"
            />


        </div>
    );
}

export default HeaderMen;