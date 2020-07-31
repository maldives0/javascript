//1번방식
var price;
var quantity;
var total;

// variable 변수의 약자 var 아무거나 집어넣을 수 있는 그릇
//선언할 때만 var를 쓰면 스코프에 price가 변수의 이름이라는 것이 정의된다
price = 5;
quantity = 14;
// Calculate the total by multiplying the price by quantity.
total = price * quantity;
//몫이 아닌 나머지 값: %
// 2번방식
var el = document.getElementById('cost');
el.textContent = '$' + total;

/* id라고 정의되어 있는 cost라는 element에 

el이라는 변수는 cost라는 이름의 div가 되고
이 div에 text형태로 연산한 값을 넣는다


*/


//ex

var price;
var quantity;
var total;

price = 20;
quantity = 10;
total = price * quantity;

var el = document.getElementById('ex');
el.textContent = total + '$';

//ex2

var design;
var html;
var css;
var degree;


design = 80;
html = 90;
css = 70;
degree =  if(90 =〈 average) = A, 
  80 =〈 average =  B , 
      70 =〈 average = C ;

total = design + html + css;
average = total / 3;



var el = document.getElementById('ex2');
el.textContent = total + '점' + ',';
var el = document.getElementById('ex2');
el.textContent += average + '점';
var el = document.getElementById('ex3');
el.textContent = degree + '등급';
