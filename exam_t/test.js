$(function(){
    
    (function(){
        //header
        // if(!$('body').hasClass('index')) return false;
        var $spotHeight =  $('.hero-full-container a').offset().top + 100,
            top;
            console.log($spotHeight) 
        function nav(){
            top = $(window).scrollTop();
            if(top > $spotHeight){
                $('nav').addClass('active');
            }else{
                $('nav').removeClass('active');
            }
        }
        $(window).on('scroll',nav);
   
    
        //item fadeInOut         
        var button = $('.carousel-control'),
            idx=0,parent,
            $item=$('.item'),
            len=$item.length;
        
            $item.not(':first').hide();
        
        function itemChange(){
            idx = $(this).parents('.item').index();
            
            $(this).hasClass('left') ? idx-- : idx++;
            if(idx == len) idx = 0;
            if(idx == -1) idx = len-1;
            
            $item.hide().removeClass('active');
            $item.eq(idx).show().addClass('active');
        }
        button.on('click',itemChange);
    })();
    
    
    
    //project
    (function(){
        var $zoomSelector = $('img[data-action=zoom]'),
            blen,$this,
            win = {w:$(window).width()/2,h:$(window).height()/2},
            z = {scale:1, idx:1, x:0, y:0, offsetY:0, offsetX:0, imgW:0,imgH:0};
        
        function zoom(e){
            $this = $(this);
            $this.toggleClass('active');
            blen = $this.hasClass('active');
            
            z.offsetY = $this.offset().top - $(window).scrollTop();
            z.offsetX = $this.offset().left;
            
            imgW = $this.width()/2;
            imgH = $this.height()/2;
            
            if(blen){
                z.scale = 2;   z.idx = 2;
                
                if(win.h > z.offsetY){
                    z.x = (Math.abs(win.w - z.offsetX) - imgW);
                    z.y = (Math.abs(win.h - z.offsetY) - imgH);
                }else{
                    z.x = (Math.abs(win.w - z.offsetX) - imgW);
                    z.y = -(Math.abs(win.h - z.offsetY) + imgH);
                }
            }else{
                z.scale = 1;   z.idx = 1;  z.x = 0;   z.y = 0;
            }
            
            
            
            setTimeout(function(){
                $this.css({
                    transform:'translate('+z.x+'px,'+z.y+'px) scale('+z.scale+')',
                    position:'relative',
                    zIndex:z.idx
                });
            },100)
        }
        $zoomSelector.on('click',zoom);
        
    })();
    
    
    
    
})