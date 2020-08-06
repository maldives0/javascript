var firstItem = document.getElementById('one'); // Get the first item
firstItem.className = 'complete';               // Change its class attribute

var fourthItem = document.getElementsByTagName('li').item(3);
//var fourthItem = document.getElementsByTagName('li')[3];
// Get fourth item
// NOTE: The following line should say fourthItem (not el2)
fourthItem.setAttribute('class', 'cool');
fourthItem.setAttribute('href','http://naver.com');       // Add an attribute to it