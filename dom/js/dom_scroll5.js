
window.addEventListener('DOMContentLoaded', function () {
    var conEle = document.querySelector('.con');
    var divEle = document.querySelectorAll('.con div');
    var conPos = [];
    var idx = 0;
    divEle.forEach(function (el) {
        conPos.push(el.offsetTop);
    })
    window.scrollTo(0, 0);
    
    var bln = false;

    window.addEventListener('mousewheel', function (e) {
        console.log();
        // scroll 이벤트처럼 'mousewheel'도 이벤트가 많이 발생한다 idx, bln를 이용해 div가 변할 때마다 한번씩 실행되도록 한다
        if(bln) return;

     
        if (e.wheelDelta < 0) {
            //down
            if(idx < divEle.length-1){idx++;}
            // idx가 3일 때 idx++은 4가 되므로 같으면 5가 되버림
        } else {
            //up
           if(idx>0){idx--;} 
        }
        conEle.style.transform = "translateY(-" + conPos[idx] + "px)";
        bln=true;
        setTimeout(function(){bln=false;},1000);
    });


});
