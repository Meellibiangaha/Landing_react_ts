import React from 'react';
import HeaderBlock from './components/Header/HeaderBlock';
import CooperateSection from './components/Cooperate/CooperateSection';
import PortfolioSection from './components/Portfolio/PortfolioSection';
import Application from './components/Applicarion/Application';

import MyForm from './components/UI/MyFrom/MyForm';
import MyInput from './components/UI/MyInput/MyInput';
import MyButtonRounded from './components/UI/MyButton/MyButtonRounded';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <HeaderBlock />
      <CooperateSection />
      <PortfolioSection />

      <Application title="Оставь заявку">
        <MyForm>
          <div className='flex__column width40'>
            <MyInput
              labelFor='FIO'
              labelText='Ваше ФИО'
              inputType='text'
            />
            <MyInput
              labelFor='phone'
              labelText='Ваш номер телефона'
              inputType='phone'
            />
            <MyInput
              labelFor='price'
              labelText='Бюджет на сайт'
              inputType='number'
            />
          </div>
          <div className='flex__column width40'>
            <MyInput
              labelFor='Email'
              labelText='Ваш E-MAIL адрес'
              inputType='text'
            />
            <MyInput
              labelFor='Comment'
              labelText='Ваш комментарий ( по желанию )'
              inputType='text'
            />
            <div className='alignSelf__application__btn'>
              <MyButtonRounded className='width60' text='Отправить' />
            </div>
          </div>
        </MyForm>
      </Application>

      <Footer title='Контакты'/>
    </>
  );
}

export default App;
