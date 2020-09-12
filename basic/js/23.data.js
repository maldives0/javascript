function init(){
//date
    var today = new Date();
    var date = document.querySelector('.date');
    var day = ['일','월','화','수','목','금','토'];
    var result = today;
    result +="<br>"+today.getFullYear()+ "년도 ";
    result += "<br>"+today.getMonth()+"월";
    result += "<br> "+today.getDate()+"일";
    result += "<br> "+ day[today.getDay()]+"요일";
    result += "<br> "+ today.getHours()+"시간";
    result += "<br> "+ today.getMinutes()+"분";
    result += "<br> "+ today.getSeconds()+"초";
    result += "<br><br> "+ today.getTime()+" 유닉스 초";
    // 유닉스 초:1970년도 1월 1일 12시 0초를 현재까지 초로 환산한 것
    console.log(((24*60*60*1000)*365)*50);


    date.innerHTML += result;


    var sDate = new Date();
    var eDate = new Date();
    var dDay = eDate-sDate;
    var oneDay = (24*60*60*1000);
    var end = Math.round(dDay/oneDay);

    date.innerHTML += "<br>종강일 D-day : "+end;
    //이벤트 참여기간
    var eventS = new Date('2020-08-03 9:30:00');
    var eventE = new Date('2020-08-05 18:20:00');
    console.log(eventE);
    console.log(eventS);
    if(today >= eventS && today <= eventE){
        console.log( "이벤트에 참여할 수 있습니다");
    }else{
        console.log( "이벤트가 종료되었습니다");
    }
    //date 수정
    var editDate = today.setDate(today.getDate()+3);
    console.log(editDate);
    var lastDay = new Date(editDate);
    console.log(lastDay);
    var endTime = 20-today.getMinutes();
    console.log(endTime);
}
window.addEventListener('DOMContentLoaded', init);