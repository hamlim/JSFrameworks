// export const es = es(); // Uncomment this when browsers natively support imports and exports

function es(elem, all){
    if(all){
        return document.querySelectorAll(elem);
    } else {
        return document.querySelectorAll(elem)[0];
    }
}
