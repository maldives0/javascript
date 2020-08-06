// Select the starting point and find its children.
var startItem = document.getElementsByTagName('ul')[0];
var firstItem = startItem.firstChild;
//method를 이용하여 선택자 잡기
// startItem.querySelector('li:first-child');

var lastItem = startItem.lastChild;

// Change the values of the children's class attributes.
firstItem.className = 'complete';
lastItem.className = 'cool';