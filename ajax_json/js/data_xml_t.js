$(function(){
//start  
   
    $.ajax({
        url:'data.xml',
        type:'GET',
        data:{a:10},
        beforeSend:function(){
            //로딩중
            $('.loading').fadeIn();
        },
        complete:function(){
            //로딩중 삭제
            $('.loading').fadeOut();
        },
        
        success:function(data){
            
            history.pushState({page:''},'pageHistory','');
            
            var product='',imgSrc,kind,name,url,type;
            
            function funList(code){
                product = '';
                
                $(data).find('item').each(function(){
                    imgSrc = $(this).find('imgSrc').text();
                    kind = $(this).find('kind').text();
                    name = $(this).find('tit').text();
                    url = $(this).find('url').text();                    
                    type = $(this).find('type').text();
                    
                    
                    
                    if(name.length > 30){
                        name = name.substr(0,20);
                        name = name.replace(name,name+'...');
                    }
                    
                    if(code == type || code == ''){
                        product += "<figure>";
                        product += "<a href='"+url+"'>";
                        product += "<p><img src='"+imgSrc+"' alt=''></p>";
                        product += "<figcaption>";
                        product += "<i>"+kind+"</i>";
                        product += "<p>"+name+"</p>";
                        product += "</figcaption>";
                        product += "</a>";
                        product += "</figure>";
                    }
                })

                $('.list').html(product);
                
                $('.tab a').removeClass('active');
                $(".tab a[href='"+code+"']").addClass('active');
            }
            funList('');
            
            $('.tab a').on('click',function(e){
                e.preventDefault();
                var type = $(this).attr('href');
                funList(type);                
                history.pushState({page:type},'pageHistory','');
            });
            
            $(window).on('popstate',function(){
                var type = history.state.page;
                funList(type);
            });
           
        }
    });
    
    
    
    
    
    
    
//end    
})



