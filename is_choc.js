// Write a function called isChocolate that returns true if the item ordered was a chocolate bar.
// Chocolate names are: 'Bar One, Lunch Bar, Wonder Bar, Milky Bar, TV Bar and Nosh Bar'

function isChocolate(item){
    return item.startsWith('Bar') || item.endsWith('Bar');
}

isChocolate('Bar One');
console.log(isChocolate('Bar One'))