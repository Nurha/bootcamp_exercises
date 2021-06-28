// Write a function, called isChips, that returns true if the item ordered was a packet of chips.
// Chips names are: Simba Plain Salted, Simba Cheese&Onion, Simba Salt&Vinegar and Simba Roasted Beef

function isChips(item) {
    return item.startsWith('Simba');
}

isChips('Simba Plain Salted');
console.log(isChips('Simba Plain Salted'));