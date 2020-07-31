function init() {
    var ex1 = document.querySelector('.ex1');
    var img = document.querySelector('img');
    var num = null;
    var arr = [];

    function change() {

    }





    img.addEventListener('mouseover', change);
    //  mouseover  마우스를 올리면 change 함수를 실행하라
    //mouseout 마우스가 나갈 때

    var idx = 0;

    function move() {
        //    console.log(event); 마우스 움직임 좌표 표시
        idx++;
        if (idx % 20 == 0) {
            //        move함수 20번 일어났을 때 idx 한번 실행한다
            num = Math.floor(Math.random() * 5) + 1;
            if (arr.length == 5) {
                //arr.splice(0);
                arr = [];
            }
            for (var i in arr) {
                if (arr[i] == num) {
                    change();
                    return;
                    //같은 숫자가 들어오면 아래 명령을 실행해도 같은 이미지를 보여주기 때문에 의미가 없다, 그러므로  이곳에서 move 함수를 멈추고 다른 숫자가 나올 때까지 move함수를 돌린다
                }
            }
            arr.push[num];
            img.src = "img/cam0" + num + ".jpg";
            //substr(1,2) 문자열에서 특정부분만 골라낼 때 사용하는 매서드, 
            // 1번 색인부터 값 2개를 가져와라(start,length)
            console.log(img.src);
//            img.src 이미지명을 알 수 있다
        }
    }
    img.addEventListener('mousemove', move);
}

window.addEventListener('DOMContentLoaded', init);
