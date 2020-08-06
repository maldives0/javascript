
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

        imgNode.addEventListener('load', function () {
            addImg.appendChild(imgNode);
            //appendChild 자식요소로 추가한다
            ipSrc2.value = '';

            var imgs = addImg.querySelectorAll('img');
            addImg.addEventListener('click', function (e) {
                console.log(e);
                //e.target: img
                if (e.target.nodeName == 'IMG') {
                    e.target.remove();
                    // p테그의 빈공간을 눌러도 지워지지 않고 이미지를 클릭해야만 지워진다
                    //nodeName은 대문자로 표시한다, nodeName이 img면 
                }
                //addImg.remove();
            });

        });



    }

});


//내가 푼 것
// window.addEventListener('DOMContentLoaded', function () {
//     var slt = document.querySelectorAll('.dom_3 figure');
//     var popDiv = document.querySelector('.popup');
//     var popImg = popDiv.querySelector('.popup img');
//     var popP = popDiv.querySelector('.popup p');
//     var txt = popP.innerHTML;

//     var d = txt.lastIndexOf("1");
//     var num = txt.slice(d);

//     for (let i = 0; i < slt.length; i++) {
//         slt[i].addEventListener('click', function pop(a) {
//             var change = txt.replace(num,i+1);
//             console.log(change);
//             popP.innerHTML = change;
//             popDiv.style = "display:flex;";
//             popImg.src = a.target.src;

//             popDiv.addEventListener('click', function dis() {
//                 popDiv.style = "display:none;";
//             });
//         });

window.addEventListener('DOMContentLoaded', function () {
    var fig = document.querySelectorAll('.dom_3 figure');
    for (var i = 0; i < fig.length; i++) {
        fig[i].addEventListener('click', popup);
        function popup() {
            var getSrc = this.firstElementChild.src;
            var getTxt = this.children[1].innerHTML;
            var pop = document.querySelector('.popup');
           // pop.style = "display:flex";
            pop.children[0].children[0].src = getSrc;
            pop.children[0].children[1].innerHTML = getTxt;

        //  pop.className += " active";
        //  active 앞 한칸을 띄어줘야 한다
        pop.classList.add('active');
        // class 이름에 active를 넣어준다
            pop.onclick = close;
            // click 되어지면 close란 함수를 실행하라
            function close() {
                //pop.style = "display:none";
                pop.classList.remove('active');
            }

        }
    }
});




