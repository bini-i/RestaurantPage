const domNodeCreator = (htmlTag, options = {}, text = '')=>{
    let node = document.createElement(htmlTag);
    for (const key in options){
        node.setAttribute(key, options[key])
    }
    node.textContent = text;
    return node;
}

const chainAppend = (nodes = []) => {
    for(let i = nodes.length - 2; i > 0; i--){
        nodes[i].appendChild(nodes[i+1])
    }
    nodes[0].appendChild(nodes[1]);   
}

export {domNodeCreator, chainAppend}