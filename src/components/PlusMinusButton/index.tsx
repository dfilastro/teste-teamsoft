import { useEffect, useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

import './styles.css';

interface PlusMinusButtonProps {
  onChange: (value: number) => void;
}

export default function PlusMinusButton({ onChange }: PlusMinusButtonProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (onChange) onChange(count);
  }, [count]);

  return (
    <section className='c-box'>
      <button disabled={count < 1} onClick={() => setCount(count - 1)} className='c-box__button'>
        <AiOutlineMinus size='1.25rem' color={count === 0 ? 'var(--grey-400)' : 'var(--red-700)'} />
      </button>

      <p className='c-box__number'>{count}</p>

      <button disabled={count > 7} onClick={() => setCount(count + 1)} className='c-box__button'>
        <AiOutlinePlus size='1.25rem' color={count === 8 ? 'var(--grey-400)' : 'var(--red-700)'} />
      </button>
    </section>
  );
}
