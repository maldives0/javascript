
window.addEventListener('DOMContentLoaded', function () {
  
       var liEl = document.querySelectorAll('li');
 window.addEventListener('scroll',fadeFun);
var winH = window.innerHeight;
 function fadeFun(){
    console.log(this)
    liEl.forEach(function(el,idx){
      
     if(  el.offsetTop-winH <= this.scrollY){
      
       
       
        el.classList.add('active');
     }
    });
     
};
     

});
   