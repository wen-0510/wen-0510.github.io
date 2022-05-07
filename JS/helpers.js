function $g(selector){
    let nodelist = document.querySelectorAll(selector);

    if(nodelist.length==0){
        return null;
    }

    // return nodelist;

    return nodelist.length==1? nodelist[0]:nodelist;
}



function $ct(element, text) {
    let el = document.createElement(element);
    if (text !== null && text !== undefined && text.length > 0) {
        el.innerText = text;
    }
    return el;
}
export{$g , $ct};