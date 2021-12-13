/// implement quick sort
async function quickSort(arr, start,end){
  if (start >= end) {
    if(start==end) arr[start].style.backgroundColor='green';
    return;
  }
  const ranDomColors={
      first:`${Math.floor(Math.random()*255)}`,
      second:`${Math.floor(Math.random()*255)}`,
      third:`${Math.floor(Math.random()*255)}`
  }
  for(let i=start;i<=end;i++){
      arr[i].style.backgroundColor = `rgb(${ranDomColors.first},200,${ranDomColors.third})`;
  }
  let pivot = arr[end];
  let flag=true,low=start,high=end;
  for(let i = start; i<end && low<high;) {
        await new Promise(resolve=>{
           myVar=setTimeout(()=>{
            arr[i].style.backgroundColor=`rgb(${ranDomColors.first},200,${ranDomColors.third})`;
               if(parseFloat(arr[i].style.height)<parseFloat(pivot.style.height)){
                     swap(arr[i],arr[low]);
                     i++;
                     low++;
               }
               else{
                    if(flag) {arr[end].style.height=arr[i].style.height; flag=false; i++;}
                    else swap(arr[i],arr[high]);
                    high--;
               }
               resolve();
           },delay);   
           arr[i].style.backgroundColor='red';
           parseFloat(arr[i].style.height)<parseFloat(pivot.style.height)? arr[low].style.backgroundColor='blue':arr[high].style.backgroundColor='blue';
        })
  }
  arr[low].style.height=pivot.style.height;
  arr[low].style.backgroundColor='green';
  await quickSort(arr, start, low-1);
  await quickSort(arr, low+1, end);
}      
     
function quick() {
    if(myVar!=undefined) clearTimeout(myVar);
    const arr=document.getElementById('visualizer').children;
    let start = 0;
    let end = arr.length - 1;
    quickSort(arr, start, end);
}

