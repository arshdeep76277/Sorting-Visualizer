var myVar,delay;

// myVar and delay are global variables. myVar helps to stop the animation.
// delay is used to set the speed of the animation. 

// creating a new array and inserting it into the visualizer div
const CreateArray=()=>{
    const size=document.getElementById("size").value;
    if(myVar!=null) clearTimeout(myVar); 
    const arr=[];
    for(let i=0;i<size;i++){
        arr.push(Math.floor(Math.random()*50));
    }
   document.getElementById("visualizer").innerHTML=`${arr.map(x=>`<div class="bar" style="height:${x/2.5}rem"></div>`).join('')}`;
}

// swapping the lenghts of two nodes
const swap=(a,b)=>{
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
}

// setting the speed of the animation
const setSpeed=()=>{
    delay=1000-document.getElementById("speed").value;
}
setSpeed();

// changing the size of array
const changeSize=()=>{
    const size=document.getElementById("size").value;
    CreateArray(size);
}
changeSize();