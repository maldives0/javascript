
window.addEventListener('DOMContentLoaded', function () {
    var navEl = document.querySelectorAll('nav a');
    var secEl = document.querySelectorAll('section');
    var secArr = [];

    secEl.forEach(function (se, idx) {
        secArr.push(se.offsetTop);
        //console.log(secArr);
    });
    navEl.forEach(function (se, idx) {
        se.addEventListener('click', function (e) {
            e.preventDefault();
            window.scrollTo(0, secArr[idx]);

          
        });
    });
 var wH= window.innerHeight/2;
    window.addEventListener('scroll',function(){
  secArr.forEach(function(el,idx){
  if(window.scrollY >= secArr[idx]-wH){
    navEl.forEach(function (a) {
        a.classList.remove('active');
    });
    navEl[idx].classList.add('active');

  }
  });
    });

});
