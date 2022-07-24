import './styles.css';
import hambImg from '../../assets/foto.png';
import ExtraItens from '../ExtraItens';
import PlusLessButton from '../PlusLessButton';
import AddButton from '../AddButton';

export function Body() {
  return (
    <main className='c-body'>
      <div className='c-body__product'>
        <div className='c-body__product__c-img'>
          <img className='c-body__product__c-img_img' src={hambImg} alt='' />
        </div>
        <h1 className='c-body__product__tittle'>Oferta Picanha Cheddar Bacon</h1>
        <p className='c-body__product__description'>
          Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho
          cheddar e pão mix de gergelim
        </p>
        <div className='c-body__product__c-price'>
          <p>R$ 32,99</p>
        </div>
      </div>

      <div className='c-body__ingredients'>
        <div className='c-body__ingredients__c-extras'>
          <p>Adicionar Ingredientes</p>
          <p className='c-body__ingredients__c-extras_q'>Até 8 ingredientes</p>
        </div>

        <ExtraItens description={'Queijo Cheddar'} value={4.99} />
        <ExtraItens description={'Cebola Crispy'} value={1.5} />
        <ExtraItens description={'Molho Cheddar'} value={3.5} />
        <ExtraItens description={'Molho de Picanha'} value={3.5} />
        <div className='c-body__ingredients__c-extras'>
          <p>Precisa de Talher?</p>
        </div>

        <div className='c-body__ingredients__cutlery'>
          <PlusLessButton />
          <AddButton />
        </div>
      </div>
    </main>
  );
}