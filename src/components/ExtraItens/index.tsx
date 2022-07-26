import PlusMinusButton from '../PlusMinusButton';
import './styles.css';

interface ExtraItemsProps {
  description: string;
  value: number;
}

export default function ExtraItens({ description, value }: ExtraItemsProps) {
  const formattedValue = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

  return (
    <div className='c-item'>
      <section className='c-item__igr'>
        <h3 className='c-item__igr__type'>{description}</h3>
        <p className='c-item__igr__value'>+ {formattedValue}</p>
      </section>

      <div className='c-item__button'>
        <PlusMinusButton
          onChange={(value) => {
            console.log(value);
          }}
        />
      </div>
    </div>
  );
}
