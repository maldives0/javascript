
window.addEventListener('DOMContentLoaded', function () {
    var navEl = document.querySelectorAll('nav a');
    var secEl = document.querySelectorAll('section');
    var secArr =[];

    secEl.forEach(function(sl,idx){
        secArr.push(sl.offsetTop);
        });
    console.log(secArr);
    //console.log(navEl);
    navEl.forEach(function(sl,idx){
        sl.addEventListener('click',function(e){
           
            e.preventDefault();
        //  a tag 에 걸린 링크값으로 넘기지 않도록 한다
        //var a = secEl[idx].offsetTop;
        // brouser top으로부터 해당 컨텐츠의 위치만큼 떨어진 y좌표값 
       

            window.scrollTo(0,secArr[idx]);
            // 스크롤 이동 좌표
           
             });
    });
    var winH = window.innerHeight/2;

     window.addEventListener('scroll',function(){
        secArr.forEach(function(el,idx){
        if(window.scrollY >= secArr[idx]-winH){
            //console.log(idx);
            navEl.forEach(function(a){
                    a.classList.remove('active');
                });
            navEl[idx].classList.add('active');
        }
        });
        
        
       
       
 });
});
   