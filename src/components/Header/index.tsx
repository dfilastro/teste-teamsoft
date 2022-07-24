import './styles.css';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import logoImg from '../../assets/Deliverize.png';
import arrowImg from '../../assets/keyboard_arrow_down_24px.png';
import CartBadge from '../CartIcon';

export function Header() {
  return (
    <header className='c-menu'>
      <img className='c-menu__logo' src={logoImg} />

      <div className='c-menu__content'>
        <div className='c-menu__content__container'>
          <div className='c-menu__content__container__add'>
            <p>Entrega:</p>
            <p className='c-menu__content__container_add__desc'>R. Prof Paulo Galli, 137</p>
          </div>
          <img src={arrowImg} alt='' />
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
    </header>
  );
}
