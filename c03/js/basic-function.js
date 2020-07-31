// Create a variable called msg to hold a new message
var msg = 'Sign up to receive our newsletter for 10% off!';

var h1 = document.querySelector('h1');
var idx = 0;
function updateMessage() {
  var el = document.getElementById('message');
   
     idx++;
   el.textContent = (idx%2==0)? "20%" : "10%" ;
       
  
}

h1.addEventListener('click',updateMessage);

// Call the function
updateMessage();