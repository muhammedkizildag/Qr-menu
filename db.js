let db = {
    categories: [category('pizzalar', [product('Büyük Boy', 'mantar', 50),])]
}


function category(name, products) {
    this.name = name;
    this.products = products;
}

function product(name, ingredient, price) {
    this.name = name;
    this.ingredient = ingredient;
    this.price = price;
}

