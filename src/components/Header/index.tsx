import './styles.css';
import { CgProfile } from 'react-icons/cg';

import logoImg from '../../assets/Deliverize.png';
import arrowDown from '../../assets/keyboard_arrow_down_24px.png';
import arrowLeft from '../../assets/keyboard_arrow_left_24px.png';
import CartBadge from '../CartIcon';
import { useCart } from '../../hooks/useCart';

export function Header() {
  const { products } = useCart();

  let qtyProducts = 0;

  for (let i = 0; i < products.length; i++) {
    let numProd = parseInt(products[i]);
    qtyProducts += numProd;
  }

  return (
    <header className='c-menu'>
      <img className='c-menu__arrow' src={arrowLeft} alt='grey arrow pointed to left' />
      <img
        className='c-menu__logo'
        src={logoImg}
        alt='red and orange logo with a box drawn, written deliverize, needed, ordered, arrived'
      />
      <div className='c-menu__content'>
        <div className='c-menu__content__container'>
          <div className='c-menu__content__container__add'>
            <p>Entrega:</p>
            <p className='c-menu__content__container__add__desc'>R. Prof Paulo Galli, 137</p>
          </div>
          <img src={arrowDown} alt='red arrow pointed down' />
        </div>

        <input
          className='c-menu__content__i-search'
          type='search'
          placeholder='Busque por estabelecimento ou produtos'
        />

        <div className='c-menu__content__checkout'>
          <CgProfile size='2rem' color='var(--red-500)' />
          <p className='c-menu__content__checkout__paragraph'>Entrar</p>
        </div>

        <div className='c-menu__content__checkout'>
          <CartBadge quantity={qtyProducts} />
          <p className='c-menu__content__checkout__paragraph'>Carrinho</p>
        </div>
      </div>
    </header>
  );
}
