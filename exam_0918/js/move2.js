
window.addEventListener('DOMContentLoaded', function () {



var w = window.innerWidth;
var h = window.innerHeight, iW, iH, num=0, arrTop=[],iT,idx=0;


$('.img-responsive').each(function(i,a){
iT = $(this).offset().top;
arrTop.push(iT);

console.log(a)
a.addEventListener('click',function(){
  idx = $(this).index();
  console.log(idx)
  num += 1 ;
  if(num%2 != 0){
    if(i == 0){

      $(this).style = 'position:absolute;  z-index:10;transform:scale(1.2);';
      iW = $(this).width;
      iH = $(this).height;
      window.scrollTo(w/2,arrTop[i]+h/2);
      //window.scrollTo((w-iW)/2,(h-iH)/2);



    }else{


      $(this).style = 'position:absolute;  z-index:10;transform:scale(1.6);';

      //  window.scrollTo(w/2,arrTop[i]+h/2);

    }

  }else{
    this.style = 'position:static; z-index:0;transform:scale(1) translate(0,0) ;'
  }


    })

})







});//end