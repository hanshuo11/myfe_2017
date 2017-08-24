var times=0;
var quickSort=function (arr) {
    if(arr.length<=1){
        return arr;
    }
    var middle=Math.floor(arr.length/2);
    // 删除数组的中间一项
    var pivot = arr.splice(middle, 1)[0];
    var left=[];
    var right=[];
    for(var i=0;i<arr.length;i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
        console.log(++times);
    }
    return quickSort(left).concat([pivot], quickSort(right));
}

var arr1=[2,5,4,1,7,3,8,6,9,0];
// console.log(arr1.length);
console.log(quickSort(arr1));