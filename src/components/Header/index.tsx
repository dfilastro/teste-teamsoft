import './styles.css';
import { CgProfile } from 'react-icons/cg';

import logoImg from '../../assets/Deliverize.png';
import arrowDown from '../../assets/keyboard_arrow_down_24px.png';
import arrowLeft from '../../assets/keyboard_arrow_left_24px.png';
import CartBadge from '../CartIcon';

export function Header() {
  let checkWidth = window.innerWidth;

  return (
    <header className='c-menu'>
      {checkWidth <= 820 && <img className='c-menu__arrow' src={arrowLeft} />}
      <img className='c-menu__logo' src={logoImg} />
      {checkWidth <= 820 || (
        <div className='c-menu__content'>
          <div className='c-menu__content__container'>
            <div className='c-menu__content__container__add'>
              <p>Entrega:</p>
              <p className='c-menu__content__container_add__desc'>R. Prof Paulo Galli, 137</p>
            </div>
            <img src={arrowDown} alt='' />
          </div>

          <input
            className='c-menu__content__i-search'
            type='search'
            placeholder='Busque por estabelecimento ou produtos'
          />

          <div className='c-menu__content__checkout'>
            <CgProfile size='2rem' color='var(--red-500)' />
            <p className='c-menu__content__checkout_paragraph'>Entrar</p>
          </div>

          <div className='c-menu__content__checkout'>
            <CartBadge quantity={2} />
            <p className='c-menu__content__checkout_paragraph'>Carrinho</p>
          </div>
        </div>
      )}
    </header>
  );
}
