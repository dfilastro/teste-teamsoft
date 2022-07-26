import './styles.css';
import hambImg from '../../assets/foto.png';
import ExtraItens from '../ExtraItens';
import PlusMinusButton from '../PlusMinusButton';
import Button from '../Button';
import { useCart } from '../../hooks/useCart';
import api from '../../services/api';
import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';
import LoadingSpinner from '../IsLoading';

export function Body() {
  const { addProduct } = useCart();
  let qty = 0;

  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api.get('').then(({ data }: AxiosResponse<any>) => {
      setData(data[0]);
      setIsLoading(false);
    });
  }, []);

  const hamburguer = {
    id: data.id,
    product: data.nm_product,
    description: data.description,
    price: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      data.vl_price
    ),
    promo: new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
      data.vl_discount
    ),
    img: data.url_image,
    extras: data.ingredients ? data.ingredients[0].itens : [],
    maxItens: data.ingredients ? data.ingredients[0].max_itens : [],
    cutlery: data.ingredients ? data.ingredients[1].group : [],
  };

  if (isLoading) return <LoadingSpinner />;

  return (
    <main className='c-body'>
      <div className='c-body__product'>
        <div className='c-body__product__c-img'>
          <img className='c-body__product__c-img__img' src={hambImg} alt='' />
        </div>
        <h1 className='c-body__product__tittle'>{hamburguer.product}</h1>
        <p className='c-body__product__description'>{hamburguer.description}</p>
        <div className='c-body__product__c-price'>
          <p>{hamburguer.promo}</p>
          <p className='c-body__product__c-price__old'>{hamburguer.price}</p>
        </div>
      </div>

      <div className='c-body__ingredients'>
        <div className='c-body__ingredients__c-extras'>
          <p>Adicionar Ingredientes</p>
          <p className='c-body__ingredients__c-extras_q'>Até {hamburguer.maxItens} ingredientes</p>
        </div>

        {hamburguer.extras.map((item: any) => {
          return <ExtraItens key={item.id} description={item?.nm_item} value={item?.vl_item} />;
        })}

        <div className='c-body__ingredients__c-extras'>
          <p>{hamburguer.cutlery}</p>
        </div>

        <div className='c-body__ingredients__c-extras__cut'>
          <div className='c-body__ingredients__c-extras__cut__yes'>
            <p>Sim</p>
            <input type='radio' name='cutlery' value='Sim' />
          </div>
          <div className='c-body__ingredients__c-extras__cut__no'>
            <p>Não</p>
            <input type='radio' name='cutlery' value='Não' />
          </div>
        </div>
        <div className='c-body__ingredients__cutlery'>
          <PlusMinusButton
            onChange={(value) => {
              return `${(qty = value)}`;
            }}
          />

          <Button
            onClick={() => {
              addProduct(`${qty}`);
            }}
          >
            Adicionar
          </Button>
        </div>
      </div>
    </main>
  );
}
