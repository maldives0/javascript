$(function(){
//start    data_xml.js
   
    $.ajax({
        url:'data.xml',
        type:'GET',
        success:function(data){
            
            var gallery = '',imgSrc,name;
            $(data).find('item').each(function(i){
                
                imgSrc = $(this).find('imgSrc').text();
                name = $(this).find('name').text();
                url = $(this).find('url').text();
                
                gallery = "<figure>";
                gallery += "<p><img src='"+imgSrc+"' alt='"+name+"'></p>";
                gallery += "<figcaption>"+name+"</figcaption>";
                if(url != ''){gallery += "<a href='"+url+"'>"+url+"</a>";}
                gallery += "</figure>";
                
                $('.gallery').append(gallery);
            });
            
            
            $('.gallery figure').on('click',funDetail);
            
            function funDetail(){
                var idx = $(this).index();                
                
                imgSrc = $(data).find('item').eq(idx).find('imgSrc').text();
                name = $(data).find('item').eq(idx).find('name').text();
                url = $(data).find('item').eq(idx).find('url').text();
                detail = $(data).find('item').eq(idx).find('detail').text();
                
                details = "<p>"+name+"</p>";
                details += "<a href='"+url+"'>"+url+"</a>";
                details += "<p>"+detail+"</p>";
                
                
                
                $('.detail img').attr('src',imgSrc);
                $('.detail figcaption').html(details);
                
            }
            
        },
        error:function(){
            console.log('실패');
        }
    });
    
    
    
    
    
    
    
//end    
})



