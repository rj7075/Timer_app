
const enddate="4 August 2024 10:15:10 AM";
document.getElementById("end_date").innerText=enddate;
const inputs=document.querySelectorAll("input");


function clock(){
 const end=new Date(enddate);
 const now=new Date();
 const diff = (end - now) / 1000;
  if(diff<0)
    return;
 // convertin into days
inputs[0].value=Math.floor(diff/3600/24);
//converting into hours
inputs[1].value=Math.floor((diff/3600)%24);
//converting into minutes
inputs[2].value=Math.floor((diff/60)%60);
//converting into seconds
inputs[3].value=Math.floor(diff)%60;

}


setInterval(()=>{
    clock();
},1000)

setInterval();