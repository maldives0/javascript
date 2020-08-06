var sx = document.getElementById('sx');        // Element to hold screenX
var sy = document.getElementById('sy');        // Element to hold screenY
var px = document.getElementById('px');        // Element to hold pageX
var py = document.getElementById('py');        // Element to hold pageY:문서의 위치를 기반으로 한다
var cx = document.getElementById('cx');        // Element to hold clientX
var cy = document.getElementById('cy');        // Element to hold clientY:브라우저 창의 크기를 기준으로 한다

function showPosition(event) {                 // Declare function
  sx.value = event.screenX;                    // Update element with screenX 조그만 팝업창에서 사용
  sy.value = event.screenY;                    // Update element with screenY
  px.value = event.pageX;                      // Update element with pageX
  py.value = event.pageY;                      // Update element with pageY
  cx.value = event.clientX;                    // Update element with clientX
  cy.value = event.clientY;                    // Update element with clientY
}

var el = document.getElementById('body');      // Get body Element
el.addEventListener('mousemove', showPosition, false); // Move updates position

console.log(window.innerHeight);
//html로 작업할 수 있는 공간, 위의 탑과 스크롤 영역 뺀 값
console.log(document.documentElement.offsetHeight);