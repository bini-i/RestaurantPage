const domNodeCreator = (htmlTag, options = {})=>{
    let node = document.createElement(htmlTag);
    if(options.class)node.setAttribute('class', options.class);
    if(options.text)node.textContent = options.text;
    return node;
}

const chainAppend = (nodes = []) => {
    for(let i = nodes.length - 2; i > 0; i--){
        nodes[i].appendChild(nodes[i+1])
    }
    nodes[0].appendChild(nodes[1]);   
}

export {domNodeCreator, chainAppend}