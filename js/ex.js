function init(){
//date
    var slt = document.querySelector('.ex1 input');
    var btn = document.querySelector('.ex1 button');
    var idx=0;
    btn.addEventListener('click',fun);
    
    function fun(){
        if(slt.value == ''){
            alert('값을 입력하시오.')
            slt.focus();
            slt.style="border:1px solid #f00";
        }else{
            console.log(slt.value);
            
            idx++;
            var ex1Div = document.querySelector('.ex1 div');
            ex1Div.innerHTML += idx+'.'+slt.value+'<br>';
            slt.value = '';
        }
    }
    
    //ex2
    //선택자.remove();
    var slt2 = document.querySelector('.ex2');
    var slt2Input = slt2.querySelector('.ex2 input');
    var btn2 = slt2.querySelector('.ex2 button');
    var ex2Div = slt2.querySelector('.ex2 div');
    var idx2 = 0;
    
    btn2.addEventListener('click',fun2);
    function fun2(){
        if(slt2Input.value == ''){
            alert('값을 입력하시오.')
            slt2Input.focus();
            slt2Input.style="border:1px solid #f00";
        }else{
            idx2++;
            ex2Div.innerHTML += '<p>'+idx2+'.'+slt2Input.value+'<a>삭제</a></p>';
            slt2Input.value = '';
        }
    }
    
    ex2Div.addEventListener('click',funDel);
    function funDel(e){
//        console.log(e.target.parentElement);
        e.target.parentElement.remove();
    }
    
    //ex3
    var ex3 = document.querySelectorAll('.ex3 div');
    var div1 = ex3[0].innerHTML;
    var div2 = ex3[1].innerHTML;
    
    ex3[0].innerHTML = div2;
    ex3[1].innerHTML = div1;
    
    //1. 선택자 => 출력할 곳, 받아올 값, 이벤트를 적용할 대상
    //2. 함수 활용
    //3. 조건문
    //4. 증감 연산자, 할당 연산자, 대입 연산자
    //5. 이벤트 위임
    
    
    
    
    
    
    
    


}

window.addEventListener('DOMContentLoaded',init);
