

let hid=document.querySelector('#hour')
let mid=document.querySelector('#minute')
let sid=document.querySelector('#second')
function displayTime(){
    let date=new Date();
    
    let hh=date.getHours();
    let mm=date.getMinutes();
    let ss=date.getSeconds();

    let hRotation=30*hh+mm/2
    let mRotation=mm*6
    let sRotation=ss*6



    hid.style.transform=`rotate(${hRotation})`;
    mid.style.transform=`rotate(${mRotation})`;
    sid.style.transform=`rotate(${sRotation})`;
}
setInterval(displayTime, 1000);