var pass = [50,80,60,70,90];      // Pass mark
var score = [75,60,60,70];    // Current score
var msg;            // Message
var passSum=0;
//passSum의 값이 숫자임을 선언하기위해 = 0 을 붙임
var scoreSum=0;
var sum2=0;

function sum(a,b){
//    함수이름부여 : sum자리에 변수처럼 이름을 지정해준다
//    (a,b) 매개변수 : 60을 받아내는 매개변수는 a
    
    sum2 = 0;
    for(var i in b){
// (var i in pass) =  (var i=0;i<pass.length;i++)
   sum2 += b[i];
    
}
    return sum2;
//    값을 바깥으로 빼주며 함수자체의 실행을 종료한다
}

//함수를 불러줘야 자기 안의 명령을 실행한다
passSum = sum(60,pass);
scoreSum =sum(60,score);
console.log(scoreSum);
console.log(passSum);


if (scoreSum > passSum) {
  msg = 'Congratulations, you passed!';
} else {
  msg = 'Have another go!';
}
msg += "<br> score("+score+") 총"+ score.length+"개의 총점:"+scoreSum; 
msg += "<br> 가장 큰 수:";
if(score[0]>score[1]){
    msg += score[0];
}else if(score[1]>score[2]){
     msg += score[1];
}else if(score[2]>score[3]){
     msg += score[2];
}else{
     msg += score[3];
}
msg += "<br> 가장 작은 수:";
if(score[0]<score[1]){
    msg += score[0];
}else if(score[1]<score[2]){
     msg += score[1];
}else if(score[2]<score[3]){
     msg += score[2];
}else{
     msg += score[3];
}
var el = document.getElementById('answer');
el.innerHTML = msg;