let bt_right =document.querySelector('#bt_right');
let bt_left =document.querySelector('#bt_left');
let box = document.querySelector('.box');

var count_left=0;
var count_right=0;

bt_right.addEventListener("click",()=>{
    count_left++;
    let rot = (count_left-count_right)*45 ;
        box.style.transform = `rotate(${rot}deg)`
})

bt_left.addEventListener("click",()=>{
    count_right++;
    let rot = (count_left-count_right)*45;
        box.style.transform = `rotate(${rot}deg)`
})