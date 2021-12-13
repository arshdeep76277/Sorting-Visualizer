async function insertion(){
    if(myVar!=null) clearTimeout(myVar); 
    const arr=document.getElementById('visualizer').children;
    for(let i=0;i<arr.length;i++){
        for(let j=i;j>0;j--){
            console.log(i,j);
            arr[j].style.backgroundColor='white';
            arr[j-1].style.backgroundColor='darkorange';
            await new Promise(resolve=>{
                myVar=setTimeout(()=>{
                   if(parseFloat(arr[j].style.height)<parseFloat(arr[j-1].style.height)){
                   swap(arr[j],arr[j-1]);
                   }
                resolve();
                },delay)});    
            arr[j].style.backgroundColor='rgb(216, 216, 104)';
            arr[j-1].style.backgroundColor='rgb(216, 216, 104)';
        }
    }
}