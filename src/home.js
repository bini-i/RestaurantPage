import {domNodeCreator, chainAppend} from "./domNodeCreator";

export default () => {
    console.log("rendering home page");
    const content = document.querySelector("#content");
    const header = domNodeCreator('header');
    const logo = domNodeCreator('div', {'class': 'logo'});
    const anchor = domNodeCreator('a', {'text': 'Bon Appetit'});
    const nav = domNodeCreator('nav');
    const ul = domNodeCreator('ul');
    ["Home", "Menu", "About"].forEach((item)=>{
        let li = domNodeCreator('li');
        let anchor = domNodeCreator('a', {'href': '#', 'text': item});
        // li.appendChild(anchor)
        // ul.appendChild(li);
        chainAppend([ul, li, anchor]);
    });
    // logo.appendChild(anchor)
    // header.appendChild(logo);
    chainAppend([header, logo, anchor]);
    // nav.appendChild(ul)
    // header.appendChild(nav);
    // content.appendChild(header);
    chainAppend([header, nav, ul]);
    content.appendChild(header);
}
