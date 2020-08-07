
window.addEventListener('DOMContentLoaded', function () {
    var tab = document.querySelector('.tab');
    var tabBtn = tab.querySelectorAll('.tab nav a');
    var tabCon = tab.querySelectorAll('.tab div > div');
    console.log(tabCon);
    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].addEventListener('click', funTab);

    }
    function funTab() {
        event.preventDefault();
        // a의 href로 바로 넘기지 않도록 한다
        console.log(eval(this.textContent));
        //   this.textContent의 값을 자바스크립트가 알 수 있는 변수나 데이터값으로 형변환함
        //tabCon[0].classList.add('active');
        var cons = eval(this.textContent);
        for (var i = 0; i < 3; i++) {
            tabBtn[i].classList.remove('active');
            tabCon[i].classList.remove('active');
        }
        cons.classList.add('active');
        this.classList.add('active');
    }
});
//tab2
window.addEventListener('DOMContentLoaded', function () {
    var tab = document.querySelector('.tab2');
    var tabBtn = tab.querySelectorAll('.tab2 nav a');
    var tabCon = tab.querySelectorAll('.tab2 div > div');
    for (var i = 0; i < tabBtn.length; i++) {
        tabBtn[i].addEventListener('click', funTab);
        var last = 0;
        function funTab() {
            event.preventDefault();
            var idx = this.dataset.num;
            this.classList.add('active');
            tabCon[idx].classList.add('acitve');

            tabBtn[last].classList.remove('active');
            tabCon[last].classList.remove('active');
            last = idx;
            console.log(this);
        }

    }
});


//menu

window.addEventListener('DOMContentLoaded', function () {
   
    var btn = document.querySelector('.menu .trigger-menu');

    var menu = document.querySelector('.menu p');

    
    btn.addEventListener('click', tri);
    function tri() {
        btn.classList.toggle('active');
        menu.classList.toggle('active');
    }


});

//ani

window.addEventListener('DOMContentLoaded', function () {
   
    var h2 = document.querySelector('.txt-ani h2');

    var h4 = document.querySelector('.txt-ani h4');
    var span = document.querySelector('.txt-ani h4 span');

    
    h2.addEventListener('click', ani);
    function ani() {
       
        var sW = span.offsetWidth;
        // span의 width size를 알 수 있다
        h4.style.width = sW +"px";
        span.textContent += span.textContent;

        setInterval(function(){
            span.style = "transition:2s linear;transform:translateX(-"+sW+"px)";
            //transition:2s동안 실행하라
            setTimeout(function(){
                span.style = "transition:0s; transform:translateX("+5+"px)";
            },2000);
            // setTimeout 2초후에 함수를 실행하라
        },2020);
        // setInterval 2.02초후에 반복하라
        
       
    }
 

});