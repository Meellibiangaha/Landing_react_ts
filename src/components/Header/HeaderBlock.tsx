import React from 'react';

import '../../styles/header.css';

import HaderNav from './HeaderNav';
import HeaderContent from './HeaderContent';
import HeaderMen from './HeaderMen';

function HeaderBlock() {
  return (
    <div className='header__wrapper'>
      <div className='header__background'>

        <HaderNav />
        <HeaderContent/>
        <HeaderMen/>

        

      </div>
      <div className='header__wrapper__bottomLine'></div>
    </div>
  );
}

export default HeaderBlock;
