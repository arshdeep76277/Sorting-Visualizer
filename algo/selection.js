async function selection(){
    if(myVar!=null) clearTimeout(myVar); 
     const arr=document.getElementById('visualizer').children;
     for(let i=0;i<arr.length;i++){
         var currentMin=arr[i];
         for(let j=i+1;j<arr.length;j++){
             arr[j].style.backgroundColor='red';
             await new Promise(resolve=>{
                myVar=setTimeout(()=>{
                    if(parseFloat(arr[j].style.height)<parseFloat(currentMin.style.height)){
                           currentMin.style.backgroundColor="rgb(216, 216, 104)"
                           currentMin=arr[j];
                           arr[j].style.backgroundColor='green';
                    }else {
                        arr[j].style.backgroundColor='rgb(216, 216, 104)';
                    }
                    resolve();
                },delay)
            })    
         }
         swap(currentMin,arr[i]);
         arr[i].style.backgroundColor='green';
         currentMin.style.backgroundColor='rgb(216, 216, 104)';
     }  
}
