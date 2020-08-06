var firstItem = document.getElementById('one'); // Get first list item 
var href = firstItem.firstElementChild.getAttribute('href');
//firstElementChild 첫번째 tag
var href = firstItem.children[0].getAttribute('href');
var href = firstItem.children[0].href;

console.log(href);

var imgS = firstItem.children[1].getAttribute('src');
var imgS = firstItem.lastElementChild.getAttribute('src');
var imgS = firstItem.lastElementChild.src;
console.log(imgS);

// getAttribute('') className은 class만 지칭한다면 getAttribute는 모든 속성을 지칭한다
if (firstItem.hasAttribute('class')) {          // If it has class attribute
  var attr = firstItem.getAttribute('class');   // Get the attribute

  // Add the value of the attribute after the list
  var el = document.getElementById('scriptResults');
  el.innerHTML = '<p>The first item has a class name: ' + attr + '</p>';

}