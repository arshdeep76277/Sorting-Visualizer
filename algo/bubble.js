const arr=document.getElementById('visualizer').children;
async function bubble(){
    let delay=document.getElementById('speed').value;
    if(myVar!=null) clearTimeout(myVar);
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr.length-i-1;j++){
            arr[j].style.backgroundColor='white';
            arr[j+1].style.backgroundColor='darkorange';
            await new Promise(resolve=>{
                 myVar=setTimeout(()=>{
                      if(parseFloat(arr[j].style.height)>parseFloat(arr[j+1].style.height)){
                        arr[j].style.backgroundColor='green';    
                        swap(arr[j],arr[j+1]);
                      }
                      resolve();
                 },delay);    
            });
            arr[j].style.backgroundColor='rgb(216, 216, 104)';
            arr[j+1].style.backgroundColor='rgb(216, 216, 104)';
        }
        arr[arr.length-i-1].style.backgroundColor='green';
    }
}
const swap=(a,b)=>{
    let temp=a.style.height;
    a.style.height=b.style.height;
    b.style.height=temp;
}