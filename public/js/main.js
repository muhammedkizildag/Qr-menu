
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');
    const mainList = document.getElementById('list');

    class Category {
        constructor(name, products) {
            this.name = name;
            this.products = products;
        }
    }

    class Product {
        constructor(name, ingredient, price) {
            this.name = name;
            this.ingredient = ingredient;
            this.price = price;
        }
    }

    let db = {
        categories: [new Category('Pizzalar', [new Product('Büyük Boy', 'Mantar', 60)]), new Category('Hamburgerler', [new Product('Bigmac', 'Et Köfte', 150), new Product('Cheeseburger', 'Et Köfte, Peynir', 125)])]
    };

    function navigation(category, index) {
        const navTemplate = `<div class="nav-container"><img src="/images/menu-images/${category.name}.jpg" alt="" class="nav"><div id="centered" class="centered">${category.name}</div></div>`;
        navbar.innerHTML += navTemplate;
    }

    function main(product) {
        const cardTemplate = `<div class="card"><img class="image" src="/images/product-image/${product.name}.jpg" alt=""><div class="info"><p class="product-name">${product.name}</p><p class="product-ingredient">${product.ingredient}</p></div><p class="price">${product.price}</p></div>`;
        mainList.innerHTML += cardTemplate;
    }

    db.categories.forEach(navigation);

    const navlist = Array.from(document.getElementsByClassName('nav-container'));
    navlist.forEach(function (v, i) {
        v.addEventListener('click', function () {
            const centered = document.getElementsByClassName('centered');
            Array.from(centered).forEach((element) => {element.classList.remove('centered-lined')});
            centered[i].classList.add('centered-lined');
            mainList.innerHTML = "";
            document.getElementById('menu-name').innerHTML = db.categories[i].name;
            db.categories[i].products.forEach(main);
        });
    });
});


// db.categories[0].products.forEach(main);
