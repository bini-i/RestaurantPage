import {domNodeCreator, chainAppend} from "./domNodeCreator";

export default () => {
    // renders menu section ▼
    const banner = domNodeCreator('section', {'class': 'banner'});
    const food_menu = [
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
        }
    ]
    const menu = domNodeCreator('menu', {'class': 'menu'});
    const ul = domNodeCreator('ul');
    food_menu.forEach((menuItem)=>{
        const li = domNodeCreator('li');
        const food = domNodeCreator('food', {'class': 'food'});
        const head = domNodeCreator('div', {'class': 'head'});
        const food_name = domNodeCreator('h3', {'class': 'food_name'}, menuItem.name);
        const food_price = domNodeCreator('span', {'class': 'food_price'}, menuItem.price);
        const food_detail = domNodeCreator('p', {'class': 'food_detail'}, menuItem.detail);
        head.appendChild(food_name)
        head.appendChild(food_price)
        food.appendChild(head)
        food.appendChild(food_detail);
        li.appendChild(food)
        ul.appendChild(li)
    });
    menu.appendChild(ul)
    banner.appendChild(menu)
    content.appendChild(banner)
    // renders menu section ▲
}