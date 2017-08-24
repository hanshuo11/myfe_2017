var times=0;
function bubbleSort(arr){
    for(var i=0;i<arr.length-1;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>arr[j]){
                var tem=arr[i];
                arr[i]=arr[j];
                arr[j]=tem;
            }
            console.log(times++);
        }
    }
    return arr;
}
var arr1=[2,5,4,1,7,3,8,6,9,0];
// console.log(arr1.length);
console.log(bubbleSort(arr1));