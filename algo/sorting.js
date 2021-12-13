var myVar,delay;
const CreateArray=()=>{
    const size=document.getElementById("size").value;
    if(myVar!=null) clearTimeout(myVar); 
    const arr=[];
    for(let i=0;i<size;i++){
        arr.push(Math.floor(Math.random()*50));
    }
   document.getElementById("visualizer").innerHTML=`${arr.map(x=>`<div class="bar" style="height:${x/2.5}rem"></div>`).join('')}`;
}
const swap=(a,b)=>{
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
}

const setSpeed=()=>{
    delay=1000-document.getElementById("speed").value;
}
setSpeed();
const changeSize=()=>{
    const size=document.getElementById("size").value;
    CreateArray(size);
}
changeSize();