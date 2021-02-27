import {domNodeCreator, chainAppend} from "./domNodeCreator";

export default () => {
    // renders Header section ▼
    const content = document.querySelector("#content");
    const header = domNodeCreator('header');
    const logo = domNodeCreator('div', {'class': 'logo'});
    const anchor = domNodeCreator('a', {'href': '#'}, 'Bon Appetit');
    const nav = domNodeCreator('nav');
    const ul = domNodeCreator('ul');
    ["Home", "Menu", "About"].forEach((item)=>{
        let li = domNodeCreator('li');
        let anchor = domNodeCreator('a', {'href': '#'}, item);
        chainAppend([ul, li, anchor]);
    });
    chainAppend([header, logo, anchor]);
    chainAppend([header, nav, ul]);
    content.appendChild(header);
    // renders Header section ▲
}