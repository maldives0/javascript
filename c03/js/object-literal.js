// Set up the object
hotel = new Object();
//객체선언
hotel = {name:홍길동, age:'500'};
hotel.name//홍길동
hotel.age//500
hotel = new Array();
hotel = [0,1,2,5];
//처음부터 색인값이 정해진다
hotel = [
    {name:'홍길순',age:400};
    {name:'홍길동',age:400};
    {name:'홍길봉',age:400};
    {name:'홍길준',age:400};
]
hotel[0].name//홍길순

product = {
    p01:['수박바1',1200,'5cm'],
    p02:['수박바2',1200,'5cm'],
    p03:['수박바3',1200,'5cm'],
    p04:['수박바4',1200,'5cm'],
    p05:['수박바5',1200,'5cm']
}
product.p01[0]//수박바1
product.p01[1]//1200

var hotel = {
  name : 'Quay',
  rooms : 40,
  booked : 25,
  checkAvailability : function() {
    return this.rooms - this.booked; // Need "this" because inside function
  }
};

// Update the HTML
var elName = document.getElementById('hotelName'); // Get element
elName.textContent = hotel.name;                   // Update HTML with property of the object

var elRooms = document.getElementById('rooms');    // Get element
elRooms.textContent = hotel.checkAvailability();   // Update HTML with property of the object

/* 
NOTE: textContent does not work in IE8 or earlier
You can use innerHTML on lines 13 and 16, but note the security issues on p228-231
*/