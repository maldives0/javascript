
window.addEventListener('DOMContentLoaded', function () {
    btn.addEventListener('click', fun);
    function fun() {
        imgSrc.src = ipSrc.value;
        ipSrc.value = '';


        imgSrc.style = "border:2px solid" + color.value;
    }
});

window.addEventListener('DOMContentLoaded', function () {
    btn2.addEventListener('click', fun2);
    function fun2() {
        var imgNode = document.createElement('img');
      
        imgNode.src = ipSrc2.value;
        imgNode.alt = '상품코드';

         imgNode.addEventListener('load',function()
         {
            addImg.appendChild(imgNode);
            ipSrc2.value = '';
    
            var imgs = addImg.querySelectorAll('img');
            addImg.addEventListener('click', function (e) {
                console.log(e);
                //e.target: img
                if(e.target.nodeName == 'IMG'){
                    e.target.remove();
                    // p테그의 빈공간을 눌러도 지워지지 않고 이미지를 클릭해야만 지워진다
                }
               //addImg.remove();
         });
       
      });

      window.addEventListener('DOMContentLoaded', function () {
        var slt = document.querySelectorAll('.dom_3 figure');
        for(var i=0; i<slt.length;i++){
            slt[i].addEventListener('click', pop);
            function pop() {
               var p = slt[i];
                console.log(p.target);
                 }
               
        }
       
          });

    }
});