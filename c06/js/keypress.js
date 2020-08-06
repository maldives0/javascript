// This example has been updated to fire on the keyup event instead of keypress 
// (on the last line in the event listener) as new text is not in the textarea until the key is released

var el;                                                    // Declare variables

function charCount(e) {                                    // Declare function
  var textEntered, charDisplay, counter, lastkey;          // Declare variables
  textEntered = document.getElementById('message').value;  // User's text
  charDisplay = document.getElementById('charactersLeft'); // Counter element
  counter = (30 - (textEntered.length)); 
  if(counter < 0){
    // document.getElementById('message').value는 선택자를 지칭한다
    // textEntered는 화면에 입력한 문자열을 가진 값이다
    document.getElementById('message').value = textEntered.substr(0,29);
    
   
   


}
  
  // Num of chars left
  charDisplay.textContent = counter;                       // Show chars left
  lastkey = document.getElementById('lastKey');            // Get last key elem
  lastkey.textContent = 'Last key in ASCII code: ' + e.keyCode; // Create msg 
}
el = document.getElementById('message');                   // Get msg element
el.addEventListener('keyup', charCount, false); // on keyup 키를 눌렀다가 뗐을 때 이벤트 발생
//ketpress 글자가 써질 때:shift, tap, enter 인식x
//ketdown 키를 눌렀을 때 shift, alt, ctrl, capslock 모든 키 인식 가능 (특수기호, 한영, 한자 제외)
//- call charCount()