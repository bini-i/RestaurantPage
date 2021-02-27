import { domNodeCreator, chainAppend } from './domNodeCreator';

export default () => {
  // renders about section ▼
  const content = document.getElementById('content');
  const banner = domNodeCreator('section', { class: 'banner' });
  const about = domNodeCreator('div', { class: 'about' });
  const header = domNodeCreator('h2', {}, 'Bon Appetit');
  const text = domNodeCreator('p', {}, 'Best place to eat with family and friends');
  about.appendChild(header);
  about.appendChild(text);
  banner.appendChild(about);
  content.appendChild(banner);
  // renders about section ▲
};