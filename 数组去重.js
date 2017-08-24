function quChong(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(newArr.indexOf(arr[i])<0){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
var arr=[11,11,12,12,13,13];
console.log(quChong(arr));
