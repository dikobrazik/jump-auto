import './App.css'
import { Button } from './components/Button'
import phoneIcon from './assets/phone.svg';
import telegramIcon from './assets/telegram.svg';
import whatsAppIcon from './assets/wa.svg';

function App() {
  return (
    <>
      <h1 className='title'>Сел аккумулятор? Помогу прикурить автомобиль в Казани</h1>

      <h2>Фиксированная цена по городу - 1000 рублей</h2>

      <div className='actions'>
        <Button as="link" href="tel:+79393803616"><img src={phoneIcon} /></Button>
        <Button as="link" href="https://t.me/cuteache"><img src={telegramIcon} /></Button>
        <Button as="link" href="https://wa.me/+79393803616"><img src={whatsAppIcon} /></Button>
      </div>
    </>
  )
}

export default App
