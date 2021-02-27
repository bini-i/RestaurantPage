import { domNodeCreator } from './domNodeCreator';

export default () => {
  // renders menu section ▼
  const content = document.getElementById('content');
  const banner = domNodeCreator('section', { class: 'banner' });
  const foodMenu = [
    {
      name: 'Whisky Beef Ribs',
      detail: 'Prime rib bones, slow smoked over hickory and glazed in a whiskey barbeque sauce',
      price: '$14.50',
    },
    {
      name: 'Sliced Brisket',
      detail: 'Our beef brisket, seasoned and smoked for hours for a deep smoky flavor and sliced thin',
      price: '$12.75',
    },
    {
      name: 'Pulled Chicken',
      detail: 'Our beef brisket, seasoned and smoked for hours for a deep smoky flavor and sliced thin',
      price: '$8.25',
    },
    {
      name: 'Mushroom Bacon',
      detail: 'Ten ounces of Angus beef, sautéed mushrooms, and three thick slices of applewood bacon on a home-baked roll',
      price: '$9.75',
    },
  ];
  const menu = domNodeCreator('menu', { class: 'menu' });
  const ul = domNodeCreator('ul');
  foodMenu.forEach((menuItem) => {
    const li = domNodeCreator('li');
    const food = domNodeCreator('food', { class: 'food' });
    const head = domNodeCreator('div', { class: 'head' });
    const foodName = domNodeCreator('h3', { class: 'foodName' }, menuItem.name);
    const foodPrice = domNodeCreator('span', { class: 'foodPrice' }, menuItem.price);
    const foodDetail = domNodeCreator('p', { class: 'foodDetail' }, menuItem.detail);
    head.appendChild(foodName);
    head.appendChild(foodPrice);
    food.appendChild(head);
    food.appendChild(foodDetail);
    li.appendChild(food);
    ul.appendChild(li);
  });
  menu.appendChild(ul);
  banner.appendChild(menu);
  content.appendChild(banner);
  // renders menu section ▲
};