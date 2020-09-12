$(function () {
    //start    
    $.ajax({
        url: 'data.xml',//data.xml file 불러오기
        type: 'GET',//browser을 통해 정보를 주고 받는 방식
        success: function (data) {//file 불러오기 성공했을 때
           
            var gallery = '', imgSrc, name, url,detail;

            //gallery
            $(data).find('item').each(function (i) {
                imgSrc = $(this).find('item imgSrc').text();//순차실행하면서 this 는 각각의 items를 가리킴 - imgSrc tag의 text값 가져오기
               
                name = $(this).find('item name').text();
                // - name tag의 text값 가져오기
                url = $(this).find('item url').text();
                // - url tag의 text값 가져오기

                gallery = "<figure>";
                gallery += "<p>";
                gallery += "<img src='" + imgSrc + "' alt='" + name + "'>";
                gallery += "</p>";
                gallery += "<figcaption>" + name + "</figcaption>";
                if (url != '') gallery += "<a href='" + url + "'>" + url + "</a>";
                gallery += "</figure>";

                $('.gallery').append(gallery);//gallery div에 변수 gallery값 넣기

            });
            //detail

            $('.gallery figure').on('click', detailOn);
            function detailOn() {
                var idx = $(this).index();//figure의 idx값 가져오기

                imgSrc = $(data).find('item').eq(idx).find('imgSrc').text();
                name = $(data).find('item').eq(idx).find('name').text();
                url = $(data).find('item').eq(idx).find('url').text();
                detail = $(data).find('item').eq(idx).find('detail').text();
                //figure의 idx값과 일치하는 각각의 data.xml값 가져오기


                details = "<p>"+name+"</p>";
                details += "<a href='"+url+"'>"+url+"</a>";
                details += "<p>"+detail+"</p>";

                $('.detail img').attr('src',imgSrc);
                //img의 속성값 figure와 일치시키기
                $('.detail figcaption').html(details);
                 //detail의 속성값 figure와 일치시키기
            };

        },
        error: function () {
            console.log('fail');
        }
    });
    //end    
})
