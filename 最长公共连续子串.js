// 动态规划破解方法
function zcggStr(a, b) {
    var obj = {};
    var str=[];
    var newStr=[];
    var index = 1;
    var array = new Array(a.length < b.length ? b.length : a.length);
    for (var i = 0; i < array.length; i++) {
        array[i] = new Array(array.length);
        for (var j = 0; j < array.length; j++) {
            array[i][j] = 0;
            if (a[i] == b[j]) {
                array[i][j] = 1;
                if (a[i + 1] && b[j + 1] && a[i + 1] == b[j + 1]) {
                    index++;
                    str.push(a[i]+a[i+1]);
                }
            }
        }
    }
    // str=str.join("");
    // for(var u=0;u<str.length;u++){
    //     if(newStr.indexOf(str[u])<0){
    //         newStr.push(str[u]);
    //     }
    // }
    obj.num=index;
    obj.str=newStr.join("");
    return array;
}

console.log(zcggStr('BCADBCD', 'ACBABDCD'));