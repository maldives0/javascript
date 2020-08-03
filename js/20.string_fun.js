function init() {
    
    var str = document.querySelector('.str_fun img');
    
    var imgStr = str.src;
//    ㄴimg/cam01.jpg
  
   
var strStart = imgStr.lastIndexOf('_')+1; //'_'문자열 인덱스값 찾기//33번째
   var strEnd= imgStr.lastIndexOf('.');//'.'문자열 인덱스값 찾기//30번째+1
  
    var num = imgStr.slice(strStart, strEnd);//찾을 문자열의 시작 인덱스값, 끝 인덱스값//30부터 32까지의 숫자

//    imgStr.lastIndexOf() 우측을 기준으로 첫번째 '.'의 위치를 알려준다
    // console.log(num);
 str.src = imgStr.replace(num,'01');//브라우저 화면 이미지 src값 바꾸기
    //____________________________________________________________________________
      var on = document.querySelector('.str_fun p img');
    var onP = on.src;
    var onStart = onP.lastIndexOf('_')+1;//32
    var onEnd = onP.lastIndexOf('.');//33
  
    var onNum = onP.slice(onStart,onEnd);
      //console.log(onNum);
    on.src = onP.replace(onNum,"02_on");
     //console.log(on);
    //---------------------------------------------------------------------------
    var strFun2 = document.querySelectorAll('.str_fun2 figure img');
    var pImg = document.querySelector('.str_fun2 p img');
    
    for(var i=0;i<strFun2.length;i++){
        
//        EventListener감지하고 add더한다
               strFun2[i].addEventListener('mouseenter',changeImg);
        function changeImg(){
            var a = this.src;
//            this 클릭하는 대상(이미지)을 가리킴
            pImg.src = a;
            
        }
    }
}

window.addEventListener('DOMContentLoaded', init);
