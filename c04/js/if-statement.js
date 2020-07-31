var score = 45;     // Score
var msg;            // Message
var scoreArr = [80,90,60];
var avg = 0;

//avg = scoreArr[0]+scoreArr[1]+scoreArr[2]/scoreArr.length;    
for(var i in scoreArr){
//    scoreArr가 배열일 때만 가능하다
    avg += scoreArr[i];
   
   
}
avg = avg/scoreArr.length;
 if (avg >= 50) {  // If score is 50 or higher
  msg = 'Congratulations!';
  msg += '<br> Proceed to the next round.'; 
}else{
    msg = 'fail';
  msg += '<br> try again.'; 
}

var el = document.getElementById('answer');
el.innerHTML = msg;