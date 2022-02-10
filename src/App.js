import './App.css';
import sadovod from './assets/sadovod.png';
import tyak from './assets/tyak.png';
import vorota from './assets/vorota.png';
import telegram from './assets/telegram.png';
import phone from './assets/phone.png';
import {useState} from "react";

const App = () => {
  const [state, setState] = useState(false);
  return (
      <div className="App">
        <div className='header'>Подбор и отправка товара c самых крупных рынков Москвы</div>
        {state && <div className='contacts'>
          <div>Контакты менеджера:</div>
          <div className='telegram'><img className='img-before' src={telegram} alt=""/>Telegram: @Podbortovaramsk</div>
          <div className='phone'><img className='img-before' src={phone} alt=""/>Телефон: +7 (905) 632-54-92</div>
          <div><button className='button' onClick={() => setState(!state)}>Вернуться</button></div>
        </div>}
        {!state && <div className='content'>
          <div className='moskva'>
            <div><img src={tyak} className='img'/></div>
            <div className='header_moskva'>ТЯК Москва</div>
            <div className='text'>
              <div>1 товар - 2000</div>
              <div>2 товара - 3000</div>
              <div>3 товар - 3500</div>
              <div>4 товар - 4000</div>
              <div>5 товар - 5500</div>
              <div>8 и более - связываться с менеджером</div>
            </div>
            <div>
              <button className='button' onClick={() => setState(!state)}>Заказать подбор</button>
            </div>
          </div>
          <div className='sadovod'>
            <div><img src={sadovod} className='img'/></div>
            <div className='header_sadovod'>Садовод</div>
            <div className='text'>
              <div>1 товар - 2000</div>
              <div>2 товара - 3000</div>
              <div>3 товар - 3500</div>
              <div>4 товар - 4000</div>
              <div>5 товар - 5500</div>
              <div>8 и более - связываться с менеджером</div>
            </div>
            <div>
              <button className='button' onClick={() => setState(!state)}>Заказать подбор</button>
            </div>
          </div>
          <div className='vorota'>
            <div><img src={vorota} className='img'/></div>
            <div className='header_vorota'>Южные ворота</div>
            <div className='text'>
              <div>1 товар - 2000</div>
              <div>2 товара - 3000</div>
              <div>3 товар - 3500</div>
              <div>4 товар - 4000</div>
              <div>5 товар - 5500</div>
              <div>8 и более - связываться с менеджером</div>
            </div>
            <div>
              <button className='button' onClick={() => setState(!state)}>Заказать подбор</button>
            </div>
          </div>
        </div>}
        <div className='footer'>
          Почему стоит обращаться к нам?
          Мы постоянно берем у продавцов много товара, потому что много клиентов, поэтому для нас,
          некоторые делают персональные скидки и вы можете просто не найти товар такого качества по такой цене,
          которую предложим вам мы
        </div>
      </div>
  );
}

export default App;
