
window.addEventListener('DOMContentLoaded', function () {
    var conEle = document.querySelector('.con');
    var divEle = document.querySelectorAll('.con div');
    var indi = document.querySelector('.indi');
    var move = 0;
    //indi
    //indi안에 a tag 생성
    divEle.forEach(function (idx) {
        var aTag = document.createElement('a');
        indi.appendChild(aTag);
    });
    var indiEle = document.querySelectorAll('.indi a');
    indiEle[0].classList.add('active');
    
    setTimeout(function(){window.scrollTo(0, 0);},10)


    divEle.forEach(function (el, idx) {
        el.addEventListener('mousewheel', function (e) {


            if (e.wheelDelta < 0) {
                //down

                //   if(idx != divEle.length-1){move=   el.nextElementSibling.offsetLeft;}
                //   다음 div의 가로 값 
                try {
                    move = el.nextElementSibling.offsetLeft;
                    indiEle[idx].classList.remove('active');
                    indiEle[idx].nextElementSibling.classList.add('active');
                } catch{
                    alert('다음 콘텐츠 X')
                } 

            } else {
                //up
                // if(idx > 0){move= el.previousElementSibling.offsetLeft;}
                try {

                    move = el.previousElementSibling.offsetLeft;
                    indiEle[idx].classList.remove('active');
                    indiEle[idx].previousElementSibling.classList.add('active');
                } catch{
                    alert('이전 콘텐츠 X')
                }
            }
            // try정상실행구문
            // catch예외처리구문
            conEle.style.transform = "translateX(-" + move + "px)";
        });
       

    });




});
