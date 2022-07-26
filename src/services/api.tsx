import axios from 'axios';

const api = axios.create({
  baseURL: 'https://6077803e1ed0ae0017d6aea4.mockapi.io/test-frontend/products',
});

export default api;

// [
//   {
//     id: '1',
//     createdAt: '2021-04-14T04:31:19.167Z',
//     nm_product: 'Oferta Picanha Cheddar Bacon',
//     description:
//       'Hambúrguer de picanha, molho de picanha, cebola crispy, bacon, queijo cheddar, molho cheddar e pão mix de gergelim',
//     vl_price: 34.95,
//     vl_discount: 31.99,
//     url_image: 'http://teamsoft.com.br/test-frontend/picanha_cheddar_bacon.png',
//     ingredients: [
//       {
//         group: 'Ingredientes Extras',
//         max_itens: 8,
//         type: 'number',
//         itens: [
//           { id: 1, nm_item: 'Queijo Cheddar', vl_item: 4.99 },
//           { id: 2, nm_item: 'Cebola Crispy', vl_item: 1.5 },
//           { id: 3, nm_item: 'Molho Cheddar', vl_item: 3.5 },
//           { id: 4, nm_item: 'Molho de Picanha', vl_item: 3.5 },
//         ],
//       },
//       {
//         group: 'Precisa de Talher?',
//         max_itens: 8,
//         type: 'boolean',
//         itens: [
//           { id: 5, nm_item: 'Queijo Cheddar', vl_item: 0 },
//           { id: 6, nm_item: 'Cebola Crispy', vl_item: 0 },
//         ],
//       },
//     ],
//   },
// ];
