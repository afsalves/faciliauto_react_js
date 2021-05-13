import React from 'react';
import './Footer.css';
import { Button } from '../../Button';
import { Link } from 'react-router-dom';
import { FaTwitter, FaCarAlt } from 'react-icons/fa';
import { CgFacebook } from 'react-icons/cg';
import { RiLinkedinFill, RiInstagramFill } from 'react-icons/ri';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Junte-se a nossa comunidade exclusiva para receber as últimas notícias
        </p>
        <p className='footer-subscription-text'>
          Você pode cancelar a inscrição a qualquer momento.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Seu Email'
            />
            <Button buttonStyle='btn--outline'>Cadastrar</Button>
          </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Sobre Nós</h2>
            <Link to='/sign-up'>Como funciona</Link>
            <Link to='/'>Depoimentos</Link>
            <Link to='/'>Carreira</Link>
            <Link to='/'>Investidores</Link>
            <Link to='/'>Termos de Serviço</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contato</h2>
            <Link to='/'>Contato</Link>
            <Link to='/'>Suporte</Link>
            <Link to='/'>Localização</Link>
            <Link to='/'>Patrocínios</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Vídeos</h2>
            <Link to='/'>Assistir Vídeos</Link>
            <Link to='/'>Embaixadores</Link>
            <Link to='/'>Agência</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <Link to='/' className='social-logo'>
              <FaCarAlt className='navbar-icon' />
              FACILIAUTO
            </Link>
          </div>
          <small className='website-rights'>FACILIAUTO © 2021</small>
          <div className='social-icons'>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <CgFacebook />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <RiInstagramFill />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <FaTwitter />
            </Link>
            <Link
              className='social-icon-link'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <RiLinkedinFill />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
