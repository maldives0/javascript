$(function(){
    (function(){
        //header
        
        if(!$('body').hasClass('index')) return false;
        var $spotHeight = $('.hero-full-container a').offset().top, top;
        console.log($spotHeight)
        function nav(){
            top = $(window).scrollTop();
           if(top > $spotHeight ){
               $('nav').addClass('active');
           }else{
            $('nav').removeClass('active');
           }
        }
       $(window).on('scroll',nav);

       //item fadeInOut
       var btn = $('.carousel-control'),
       idx=0,
      
       $item=$('.item'),
       len=$item.length;

       $item.not(':first').hide();

       function itemChange(){
           idx = $(this).parents('.item').index();
        $(this).hasClass('left') ? idx-- : idx++;
        if(idx == len) idx = 0;
        if(idx == -1) idx = len -1;

        $item.removeClass('active');
        $item.eq(idx).show().addClass('active');

       }
       btn.on('click',itemChange);
    })();
    //location
    (function(){
        var win={w:$(window).width()/2,h:$(window).height()/2},
        img={w:0,h:0,oX:0,oY:0},
        pos={x:0,y:0,s:1,idx:1},
        $img=$('img[data-action=zoom]'),$this;
       
        function zoom(){
           $this=$(this);
           img.w = $this.width()/2;
           img.h = $this.height()/2;
            img.oX = $this.offset().left;
            img.oY = $this.offset().top-$(window).scrollTop();
         
            $this.toggleClass('active');
            blen = $this.hasClass('active');

if(blen){
    pos.s = 2; pos.idx = 2;
    if(win.h > img.oY){
        pos.x= (Math.abs(win.w - img.oX)-img.w);
        pos.y= (Math.abs(win.h - img.oY)-img.h);
        
    }else{
        pos.x= (Math.abs(win.w - img.oX)-img.w);
        pos.y= -(Math.abs(win.h - img.oY)+img.h);
    }

}else{
    pos.s = 1; pos.idx = 1;
    pos.x = 0; pos.y = 0;
}

           $this.css({
               position:'relative',
               zIndex:pos.idx,
               transform:'translate('+pos.x+'px,'+pos.y+'px) scale('+pos.s+')',

           });
           
        }
        
        $img.on('click',zoom);



    })();
})