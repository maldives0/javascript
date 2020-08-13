
window.addEventListener('DOMContentLoaded', function () {
    var conEle = document.querySelectorAll('.con div');
    var conPos = [];
    var first = 0, last = 0;
    var idx = 0;
    conEle.forEach(function (el) {
        //함수 실행할 때마다 실행되는 각 div 1,2,3,4,5
        conPos.push(el.offsetTop);
        console.log(conPos);
    })
    var bln = true, udBln;
    function upDown() {
        first = this.scrollY;
        //스크롤 위로 올렸는지 아래로 내렸는지 알아내기 
        udBln = first > last;
        last = first;

    }
    window.addEventListener('scroll', function () {
        event.preventDefault();
        
        upDown();
      
        if (bln) {
            // bln이 true이면 return해서 밑에 함수들은 실행시키지 않는다
            
            if (udBln) { idx++; } else { idx--; }

            setTimeout(function () {
                // 내가 지정한 시간(1s) 뒤에 함수 실행
                bln = true;
            }, 1000)
          
           
            window.scrollTo(0, conPos[idx]);
            console.log(idx);
            bln = false;
        }
    });
    
    };
});
