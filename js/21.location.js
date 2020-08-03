function init() {
//    location.href = "http://naver.com";
//    location.replace('http://naver.com');
    //location.reload();//새로고침
    var urlHref = location.href;
//     var urlHref 브라우저 주소
    var urlHash = location.hash;
// urlHash  해당 url 뒤쪽 #01 페이지 뒤쪽으로 데이터값 넘기기 파라미터라고도 함 http://127.0.0.1:50167/21.location.html#01
     var urlHost = location.host;
    var urlHostname = location.hostname;

    //urlHost 도메인 주소, urlHostname 이름만
    var urlPathname = location.pathname;
//    문서이름
    var urlPort = location.port;
//   port 해당페이지에 접근하기위한 방번호
    console.log(urlHref);
    console.log(urlHash);
    console.log(urlHost);
    console.log(urlHostname);
     console.log(urlPathname);
     console.log(urlPort);
    console.log(urlPathname.substr(1,5));
//    substr(1) 1번부터 끝까지 문자열 표현
    
    
    
    
    
    
    
    
    
    
    
  
    var img = document.querySelector('.str_fun img');
    img.addEventListener('click',page);
    function page(){
        location.replace('22.location_result.html#main')
      
       
}
         if(urlHash == '#main'){
          var str = document.querySelector('.str_fun');
           str.innerHTML = "메인화면입니다";
   }
    
      
//    switch(urlHash){
//        case '#main':
//             str.innerHTML = "메인화면입니다";
//             break;
//         default :
//             str.innerHTML = "sub화면입니다";
//     }
         
}

window.addEventListener('DOMContentLoaded', init);
