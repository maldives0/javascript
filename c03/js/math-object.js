var el = document.getElementById('info');

var h1 = document.querySelector('h1');
var arr = [];

h1.addEventListener('click', random);


function random() {


    var randomNum = Math.floor((Math.random() * 10) + 1);


    //


    if (arr.length == 10) {

        //         arr = [];를 넣으면 다시 배열을 재선언하게 된다
        arr.splice(0);
        //        0개 가져오고 나머지 삭제하라=다 삭제하라
    }
    for (var i in arr) {

        if (arr[i] == randomNum) {
            random();
            //재귀함수:자기 자신을 다시 실행한다
            //       return     random(){
            //                      random(){
            //                          random(){}
            //                 }
            //             }
            //            세번째에서 같은 수가 나오면 함수 종료하고 값 출력, 그 전 값 두개도 출력됨
            return;
            //return: 함수 종료하고 밑에 명령을 실행하지 않는다-값을 반환하라
            //break; for문을 빠져나온다

        }


    }


    arr.push(randomNum);
    // array 함수 
    // 1.push()   배열 안에 값을 추가
    // ex) var arr = [];
    //   arr.push('a');
    //   arr['a'];
    //2. splice() 배열안에 값을 제거
    // ex) var arr = ['a','b','c','d'];
    //     arr.splice(1,2);
    //     배열 index 1에서 두 개의 값을 제거하고 반환
    //     arr['a','d'] 
    // var arr = ['a','b','c','d'];
    // arr.splice(2);
    // 배열 index2에서 끝까지의 값을 제거
    // arr['a','b'];
    //배열값을 초기화
    // a = []; / arr.splice(0);

    el.innerHTML = '<h2>random number</h2><p>' + randomNum + '</p>';
    console.log(arr);




}
