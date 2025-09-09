import './App.css'
import { Button } from './components/Button'
import PhoneIcon from './assets/phone.svg?react';
import telegramIcon from './assets/telegram.svg';
import whatsAppIcon from './assets/wa.svg';
import bgImage from "./assets/bg.jpeg";

function App() {
  return (
    <>
      <header>
        <img className='logo' src="/logo.png" alt="Jump Auto" srcSet='/logo2x.png 2x' />
      </header>

      <img id='background' src={bgImage} alt="bg image" />

      <h1 className='title'>Сел аккумулятор? Помогу прикурить автомобиль в Казани</h1>

      <h2>Фиксированная цена по городу - <b className='price'>1000</b> рублей</h2>

      <p>
        Если вам нужна прикурка автомобиля, просто позвоните или напишите мне в мессенджер.
      </p>
      <p>
        Вызов прикурить аккумулятор автомобиля в Казани стоит 1000 рублей.
      </p>

      <p>
        Данная услуга включает в себя:
      </p>
      <ul>
        <li>Выезд на место</li>
        <li>Прикуривание автомобиля</li>
        <li>Консультацию по дальнейшим действиям</li>
      </ul>

      <p>
        Оплата принимается наличными или переводом на карту.
      </p>

      <p>
        Работаю без выходных и праздников, в любое время суток.
      </p>

      <p>
        Звоните или пишите, буду рад помочь! :)
      </p>

      <div className='actions'>
        <Button as="link" href="tel:+79393803616"><PhoneIcon style={{width: '100%', height: '100%'}} /></Button>
        <Button as="link" href="https://t.me/cuteache"><img src={telegramIcon} /></Button>
        <Button as="link" href="https://wa.me/+79393803616"><img src={whatsAppIcon} /></Button>
      </div>
    </>
  )
}

export default App
