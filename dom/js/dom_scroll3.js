
window.addEventListener('DOMContentLoaded', function () {
  
       var liEl = document.querySelectorAll('li');
 window.addEventListener('scroll',fadeFun);
var winH = window.innerHeight;
 function fadeFun(){
    
    liEl.forEach(function(el,idx){
      
     if(  el.offsetTop-winH <= this.scrollY){
         console.log(   el.offsetTop);
        el.classList.add('active');
     }
    });
     
};
     

});
   