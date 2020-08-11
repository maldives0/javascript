
window.addEventListener('DOMContentLoaded', function () {
    var data = [
        { src: '../img/p02-04-08.jpg', name: 'image title01', detail: '상세내용01' },
        { src: '../img/p02-04-09.jpg', name: 'image title02', detail: '상세내용02' },
        { src: '../img/p02-04-10.jpg', name: 'image title03', detail: '상세내용03' }
    ];
    //console.log(data[0].src);
    //console.log(data[0].name);

    var list = '';
    data.forEach(function (i,key) {
        // forEach문은 배열만 가능
        //console.log(i.src);
        //console.log(key);
        list += "<figure data-num='"+key+"'>";
        list += "<img src='" + i.src + "'>";
        list += "<figcaption>" + i.name + "</figcaption>";
        list += " </figure>";
//data-num 사용자속성
        //console.log(list);
    });
    var listEle = document.querySelector('.list div');
    listEle.innerHTML = list;

    var figEle = listEle.querySelectorAll('figure');
   
   
    figEle.forEach(function (value){ 
       
       //첫번째 매개변수: value값, 두번째:key값-1개만 있으면 value값
       value.addEventListener('click',popup);
          
       });
       var popEle = document.querySelector('.popup');
        var popImg = popEle.querySelector('img');
        var popDetail = popEle.querySelector('figcaption');
      function popup(){
        var idx = this.dataset.num;
        popEle.classList.add('active');
        var prev = popEle.querySelectorAll('button')[0];
        var next = popEle.querySelectorAll('button')[1];
        prev.addEventListener('click',function(){
            if(idx!=0) idx--;
            dataChange(idx);
        })
        next.addEventListener('click',function(){
            if(idx < data.length-1) idx++;
            dataChange(idx);
           
        })
        popEle.addEventListener('click',function(e){
           var tagName = e.target.tagName;
           if(tagName == 'IMG'||tagName == 'BUTTON') return;
            popEle.classList.remove('active');
        })


        dataChange(idx);
       //idx를 dataChange 함수로 보낸다
        //console.log(data[idx].detail);
      }
   function dataChange(index){
      
    popImg.src = data[index].src;
    popDetail.innerHTML = data[index].detail;
   }
   
  //  console.log(figEle);

});

