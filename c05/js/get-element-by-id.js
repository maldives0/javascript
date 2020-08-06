// Select the element and store it in a variable.
var el = document.getElementById('one');
var li = document.querySelectorAll('li');
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', function fun() {
        // if (this.hasAttribute('class') == true) {
        //     this.className = 'hot';
        // } else {
        //     this.className = 'cool';
        // }

        //case2 
        //if (this.getAttribute('class') == 'hot') {
        //     this.className = 'cool';
           
        // } else {
        //     this.className = 'hot';
        // }

        var a =this.className == 'hot' || !this.hasAttribute('class');
        //|| : or, !:부정 
        //class가 hot과 같으면 true, 또는
        //li에 class속성이 없다면 true
        if(a){
            this.className = 'cool';
        }else{
            this.className = 'hot';
        }
    });
}
// Change the value of the class attribute.
el.className = 'cool';