import {domNodeCreator, chainAppend} from "./domNodeCreator";

export default () => {  
    // renders banner section ▼
    const content = document.querySelector("#content");
    const banner = domNodeCreator('section', {'class': 'banner'});
    const bannerContent = domNodeCreator('div', {'class': 'content'});
    const bannerTitle = domNodeCreator('h2', {'class': 'title', 'text': 'Bon Appetit'});
    const bannerText = domNodeCreator('p', 
            {'class': 'text' },
            'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere, commodi pariatur eaque recusandae deserunt nesciunt illo provident nemo alias, saepe natus omnis! Eligendi molestiae nesciunt possimus veritatis in maxime beatae.'
            
    );
    const bannerButton = domNodeCreator('button');
    const buttonAnchor = domNodeCreator('a', {'href': '#'}, 'Our Menu');
    
    bannerContent.appendChild(bannerTitle);
    bannerContent.appendChild(bannerText);
    chainAppend([bannerContent, bannerButton, buttonAnchor]);
    banner.appendChild(bannerContent);
    content.appendChild(banner)
    // renders banner section ▲
}
