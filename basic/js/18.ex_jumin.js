function init() {
    //주민 유효성 검사

    var result = document.querySelector('.ex_jumin div');

    function jumin() {

        var f = document.querySelector('.ex_jumin input[name=j01]');
        var b = document.querySelector('.ex_jumin input[name=j02]');
        var arr = f.value + b.value;
        var key = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
        var total = 0;

        for (var i in key) {

            total += arr[i] * key[i];
        }
        var cNum = (11 - (total % 11)) % 10;


        result.innerHTML = cNum == b.value[6] ? "정상" : "비정상";

        gender(b.value);

    }

    function gender(g) {
        var gen = g;

        var aa = (gen[0] == "1") ? "남" : "여";

        result.innerHTML += aa;
        //  삼합연산자: if문을 한 줄로 표현한다
        //  ? 앞쪽은 조건 = if(gen[0]==1)
        //      : =  "남" else  "여"
        //    }
    }
    //실행명령              



    //이벤트
    var btn = document.querySelector('.ex_jumin button');
    btn.addEventListener('click', jumin);
}
window.addEventListener('DOMContentLoaded', init);
