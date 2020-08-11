
window.addEventListener('DOMContentLoaded', function () {
 var asideEl = document.querySelector('aside');
 var asideTop = asideEl.offsetTop;
 console.log(asideTop);

    asideEl.addEventListener('click',function(){
   //    window.addEventListener('scroll',function(){
//        if(asideTop < this.scrollY){
//            asideEl.style = "position:fixed;top:0;"
//        }else{
//         asideEl.style = "position:absolute;top:90%;"
//        }
//}) 
        window.scrollTo(
            {
                left:0,
                top:0
               
            });
    }) 
    window.addEventListener('scroll',function(){
        if(this.scrollY> window.innerHeight){
            console.log(window.innerHeight);
            asideEl.classList.add('active');
        }else{
            asideEl.classList.remove('active');
        }
    });
    var domH = document.documentElement.offsetHeight;
    //documentElement 문서전체의 가장 최상위 부모가 잡힘
    console.log(domH);
    console.log(domH - window.innerHeight);
});
   