// Create a new element and store it in a variable.
var newEl = document.createElement('li');
//var aa = "<li></li>";
//div.innerHTML = aa;

// Create a text node and store it in a variable.
var newText = document.createTextNode('quinoa');
//node 문서의 요소들, 연결점
// Attach the new text node to the new element.
newEl.appendChild(newText);

// Find the position where the new element should be added.
var position = document.getElementsByTagName('ul')[0];

// Insert the new element into its position.
position.appendChild(newEl);