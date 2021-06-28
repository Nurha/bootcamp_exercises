// Write a function, called isCooldrink, that returns true if the item you ordered is a cooldrink.
// Cooldrink names includes:
// 'Coca Cola 340ml, Coca Cola Zero 340ml, Cream Soda 340ml, Sprite 340ml, Coca Cola 500ml'
// Use String built-in 'endsWith' function.

function isCooldrink(item) {
    return item.endsWith('ml');
}

isCooldrink('Coca Cola 340ml');
console.log(isCooldrink('Coca Cola 340ml'));