
window.addEventListener('DOMContentLoaded', function () {
    //json load
    var data = new XMLHttpRequest(),
        response,
        workDiv = document.querySelector('#work div'), divData;
    data.open('Get', 'data.json', true);
    data.send(null);

    data.addEventListener('load', fun);

    function fun() {
        response = JSON.parse(data.responseText);

        response.work.forEach(function (el) {

            divData = "<div class='col-4'><a href='#' class='image fit'><img src='" + el + "' alt='' /></a></div>";
            workDiv.innerHTML += divData;
        });
    }

    //main height
    var tag = $('#main article');
       
    var tagH, idx, type;

    tag.each(function (i, a) {
      
        tag.eq(i).css({
            display: "none",
            opacity: "0"
        });
    });
    tag.eq(0).css({
        display: "flex",
        opacity: "1"
    });

    $('#nav a').eq(0).addClass('active');
   
        $('#nav a').on('click', function (e) {
        e.preventDefault();
        $('#nav a').removeClass('active');

        $('#main article').css({
            display: "none",
            opacity: "0"
        })

         idx = $(this).index();
         href = $(this).attr('href');
        $(this).addClass('active');
      
        con(type);
       

        history.pushState({page:href},'tit','');
       
    });//aTag

    function con(type){
        tagH = tag.eq(idx).height();
   
        if (type == "#") {
            dis = 'flex';
            tagStyle(dis);

        } else if (type == "#work") {
                dis = 'block';
                tagStyle(dis);

            } else if (type == "#contact") {
                    dis = 'block';
                    tagStyle(dis);
                }
    }
  

    function tagStyle(dis) {
                  
        tag.eq(idx).css({
            height: tagH + 'px',
            display: dis,
            opacity: "1"
        })
    }


    $(window).on('popstate',function(){
     var type;
    
        try{
           type = history.state.page;
          
        }catch{
           type = '#';
        }
       
    con(type);
  
    })
    
       
});//end