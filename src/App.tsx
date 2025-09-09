import './App.css'
import { Button } from './components/Button'
import PhoneIcon from './assets/phone.svg?react';
import telegramIcon from './assets/telegram.svg';
import whatsAppIcon from './assets/wa.svg';

function App() {
  return (
    <>
      <header>
        <img className='logo' src="/logo.png" alt="Jump Auto" srcSet='/logo2x.png 2x' />
      </header>

      <h1 className='title'>Сел аккумулятор? Помогу прикурить автомобиль в Казани</h1>

      <h2>Фиксированная цена по городу - <b className='price'>1000</b> рублей</h2>

      <div className='actions'>
        <Button as="link" href="tel:+79393803616"><PhoneIcon style={{width: '100%', height: '100%'}} /></Button>
        <Button as="link" href="https://t.me/cuteache"><img src={telegramIcon} /></Button>
        <Button as="link" href="https://wa.me/+79393803616"><img src={whatsAppIcon} /></Button>
      </div>
    </>
  )
}

export default App
