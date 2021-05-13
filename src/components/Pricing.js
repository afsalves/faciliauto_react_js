import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { GiCarWheel, GiCarKey } from 'react-icons/gi';
import { FaCar } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Planos</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCarWheel />
                </div>
                <h3>Básico</h3>
                <h4>R$8.99</h4>
                <p>por mês</p>
                <ul className='pricing__container-features'>
                  <li>3 Reboques Gratuitos</li>
                  <li>2% Cash Back sobre Serviços</li>
                  <li>2 Lavagens Completas</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolher Plano
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCarKey />
                </div>
                <h3>Essencial</h3>
                <h4>R$29.99</h4>
                <p>por mês</p>
                <ul className='pricing__container-features'>
                  <li>6 Reboques Gratuitos</li>
                  <li>3.5% Cash Back sobre Serviços</li>
                  <li>5 Lavagens Completas</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='purple'>
                  Escolher Plano
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaCar />
                </div>
                <h3>Premium</h3>
                <h4>R$99.99</h4>
                <p>por mês</p>
                <ul className='pricing__container-features'>
                  <li>Reboques ilimitados</li>
                  <li>5% Cash Back sobre Serviços</li>
                  <li>Lavagens Ilimitadas</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  Escolher Plano
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;
