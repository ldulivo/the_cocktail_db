export const allIngredients = (item) => {
    let ingredients = [];

    //console.log("item", item.key('strIngredient1'));
    for(let i in item) {
        if ( i.includes("strIngredient") && item[i] !== null ) ingredients.push(item[i]);
    }

    return ingredients;
}