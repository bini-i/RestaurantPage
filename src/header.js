import { domNodeCreator, chainAppend } from './domNodeCreator';

export default () => {
  // renders Header section ▼
  const content = document.getElementById('content');
  const header = domNodeCreator('header');
  const logo = domNodeCreator('div', { class: 'logo' });
  const anchor = domNodeCreator('a', { href: '#' }, 'Bon Appetit');
  const nav = domNodeCreator('nav');
  const ul = domNodeCreator('ul');
  ['Home', 'Menu', 'About'].forEach((item) => {
    const li = domNodeCreator('li');
    const anchor = domNodeCreator('a', { href: '#', class: item }, item);
    chainAppend([ul, li, anchor]);
  });
  chainAppend([header, logo, anchor]);
  chainAppend([header, nav, ul]);
  content.appendChild(header);
  // renders Header section ▲
};