import { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import './styles.css';

export default function PlusLessButton() {
  const [count, setCount] = useState(0);

  return (
    <section className='c-box'>
      <button
        onClick={() => {
          count === 0 || setCount(count - 1);
        }}
        className='c-box__button'
      >
        {count === 0 ? (
          <AiOutlineMinus size='1.25rem' color='var(--grey-400)' />
        ) : (
          <AiOutlineMinus size='1.25rem' color='var(--red-700)' />
        )}
      </button>
      <p className='c-box__number'>{count}</p>
      <button
        onClick={() => {
          count === 8 || setCount(count + 1);
        }}
        className='c-box__button'
      >
        {count === 8 ? (
          <AiOutlinePlus size='1.25rem' color='var(--grey-400)' />
        ) : (
          <AiOutlinePlus size='1.25rem' color='var(--red-700)' />
        )}
      </button>
    </section>
  );
}
