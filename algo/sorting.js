var myVar;
const CreateArray=()=>{
    const size=document.getElementById("size").value;
    if(myVar!=null) clearTimeout(myVar); 
    const arr=[];
    for(let i=0;i<size;i++){
        arr.push(Math.floor(Math.random()*50));
    }
   document.getElementById("visualizer").innerHTML=`${arr.map(x=>`<div class="bar" style="height:${x/2.5}rem"></div>`).join('')}`;
}
CreateArray(50);
