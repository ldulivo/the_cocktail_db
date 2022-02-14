export const widthScreen = () => {
    return document.body.clientWidth;
}

export const hexa = (w) => {
    let i;

    switch (true) {
        case (w < 659):
            i = 1;
            break;

        case (w > 660 && w < 900):
            i = 2;
            break;
    
        default:
            i = 3;
            break;
    }
    
    return i;
}