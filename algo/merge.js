async function mergeArray(arr,start,mid,end){
    const randomColor=`rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    for(let i=start;i<=end;i++){
        arr[i].style.backgroundColor=randomColor;
    }
    let i=start,j=mid+1;
    const temp=[];
    while(i<=mid && j<=end){
        if(parseFloat(arr[i].style.height)<=parseFloat(arr[j].style.height)){
            temp.push(arr[i].style.height);
            i++;
        }
        else{
            temp.push(arr[j].style.height);
            j++;
        }
    }
    while(i<=mid){
        temp.push(arr[i].style.height);
        i++;
    }
    while(j<=end){
        temp.push(arr[j].style.height);
        j++;
    }
    console.log(temp);
    for(let i=0;i<temp.length;i++){
        await new Promise(resolve=>{
            myVar=setTimeout(()=>{
                arr[start+i].style.height=temp[i];
                resolve();
            },delay);
            
        })
    }
}
async function mergeSort(arr,start,end){
    if(start>=end) return;
    const mid=Math.floor((start+end)/2);
    const color={
        first:`${Math.random()*255}`,
        second:`${Math.random()*255}`,
        third:`${Math.random()*255}`
    }
    for(let i=start;i<=end;i++){
        await new Promise(resolve=>{
            setTimeout(()=>{
                arr[i].style.backgroundColor=`rgb(${color.first},${color.second},${color.third})`;
                resolve();
            },80);
        });
    }
    await mergeSort(arr,start,mid);
    await mergeSort(arr,mid+1,end);
    await mergeArray(arr,start,mid,end);
}
async function merge(){
    const arr=document.getElementById('visualizer').children;
    if(myVar!=undefined) clearInterval(myVar);
    const start=0;
    const end=arr.length-1;
    await mergeSort(arr,start,end);
}