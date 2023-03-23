let box = document.querySelector('.box');
let circle = document.querySelector('.circle');
let bt_right =document.querySelector('#bt_right');
let bt_left =document.querySelector('#bt_left');

let colorarr = ['violet','rgb(246, 192, 246)','green','lightblue','orange','coral','magenta']

bt_left.addEventListener('click',()=>{
    
    let size= (colorarr.length) - 1;
    let num= Math.floor((Math.random())*(size));//generating random number
    box.style.backgroundColor = `${colorarr[num]}`;
})


bt_right.addEventListener('click',()=>{
    
    let size= (colorarr.length) - 1;
    let num= Math.floor((Math.random())*(size));
    circle.style.backgroundColor = `${colorarr[num]}`;
})