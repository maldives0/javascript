// Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousSibling;
var nextItem = startItem.nextSibling.nextSibling;
var parent = nextItem.parentNode;
var parent1 = nextItem.parentElement;
// parentElement
console.log(parent);
console.log(parent1);
// Change the values of the siblings' class attributes.
prevItem.className = 'complete';
nextItem.className = 'cool';