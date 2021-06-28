// Write a function, called productCategory, that returns the category name of the product ordered. 
// There are three categories Soft Drinks', 'Salty snacks' and 'Chocolates

function productCategory(product){
    if (product.startsWith('Bar') || product.endsWith('Bar')) {
        return "Chocolates"
    } else if (product.endsWith("ml")) {
        return 'Soft Drinks'
    } else if (product.startsWith("Simba")) {
        return 'Salty snacks'
    }
}

productCategory('Bar One');
console.log(productCategory('Simba Cheese&Onion'));
console.log(productCategory('Coca Cola Zero 340ml'));
console.log(productCategory('Wonder Bar'));