function init() {
    //초기셋팅
    var btn = document.querySelectorAll('.fun_ex3 button');
    var p = document.querySelector('.fun_ex3 p');
    var img = document.querySelectorAll('.fun_ex3 img');
    var idx = 0;
    (function () {
        for (var i = 0; i < img.length; i++) {
            img[i].style = "left:" + (i * 100) + "px";
        }
    })();
    //익명함수:이름이 없는 함수로 바로 실행한다 마지막 ();가 익명함수를 호출하는 명령이다


    //실행명령              


    function prev() {
        if (idx != 0) idx--;
        p.style = "left:" + (-idx * 100) + "%";
update();
    }

    function next() {
        
        if (idx != img.length - 1) idx++;
        //        != 같지 않을 때
        p.style = "left:" + (-idx * 100) + "%";

update();
    }

    function update() {
        if (idx == 0) {
            btn[0].style = 'visibility:hidden';
        } else {
            btn[0].style = 'visibility:visible';
        }

        if (idx == img.length - 1) {
            btn[1].style = 'visibility:hidden';
        } else {
            btn[1].style = 'visibility:visible';
        }


        //          img.length-1=2
    }


    //이벤트
    btn[0].addEventListener('click', prev);
    btn[1].addEventListener('click', next);


}

window.addEventListener('DOMContentLoaded', init);

//        이벤트와 함수를 분리시켜 이벤트를 한눈에 보이도록 한다
//'DOMContentLoaded': document를 다 읽으면 바로 실행한다, load보다 더 빠르다
//   'load'라는 이벤트:     html을 다 읽고나면 실행한다, 브라우저를 로드 완료 후, 만약 영상이 있다면 영상 실행 후 함수를 실행한다

// 예전에 많이 쓴 문법
//window.onload = function(){
//             var ex3 = document.querySelector('.fun_ex3');
//            console.log(ex3); }                  
