
window.addEventListener('DOMContentLoaded', function () {
    var data = [
        { src: '../img/p02-04-08.jpg', name: 'image title01', detail: '상세내용01' },
        { src: '../img/p02-04-09.jpg', name: 'image title02', detail: '상세내용02' },
        { src: '../img/p02-05-01.jpg', name: 'image title03', detail: '상세내용03' }
    ];
    var list = '';
    data.forEach(function (i, key) {

        list += "<figure data-num='" + key + "'>";
        list += "<img src='" + i.src + "'>";
        list += "<figcaption>" + i.name + "</figcaption>";
        list += "</figure>";


    });
    var listDiv = document.querySelector('.list div');
    listDiv.innerHTML = list;

    var listFig = listDiv.querySelectorAll('figure');
    listFig.forEach(function (value) {
        value.addEventListener('click', pop);
        var popEle = document.querySelector('.popup');
        var popImg = popEle.querySelector('img');
        var popFig = popEle.querySelector('figcaption');
        function pop() {
            var idx =  this.dataset.num;
            var prev = popEle.querySelectorAll('button')[0];
            var next = popEle.querySelectorAll('button')[1];
            popEle.classList.add('active');

            
            prev.addEventListener('click',function(){ 
                if(idx !=0) idx--;
                change(idx);
             })
            next.addEventListener('click',function(){
                if(idx < data.length-1) idx++;
                change(idx);
              })
          change(idx);
          popEle.addEventListener('click',function(e){  
           
            var tagName = e.target.tagName;

             if(tagName=='IMG' || tagName=='BUTTON') return;
             popEle.classList.remove('active');
          })
        }
        function change(id){
            popImg.src = data[id].src;
            popImg.innerHTML = data[id].detail;
        }
    });

});

