//ip转long
function IpToLong(str) {
    var s = str.split(".");
    var arr = [];
    var index = 1;
    for (var i = 0; i < s.length; i++) {
        var d = parseInt(s[i]).toString(2);
        while (d.length < 8) d = "0" + d;
        d = d.replace(/0/g, 'a').replace(/1/g, 'b');
        for (var j = 1; j < d.length + 1; j++) {
            if (d[j - 1] && d[j] == d[j - 1]) {
                index++;
            } else {
                arr.push((index + d[j - 1]));
                index = 1;
            }
        }
    }
    var result = arr.join('').replace(/1/g, '');
    return result;
}
console.log(IpToLong("255.211.132.129"));

// long转Ip
function LongToIp(str) {
    var arr = str.split('');
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 9) {
            var num = arr[i];
            var s = "";
            s = s.padStart(num,arr[i+1]);
            arr.splice(i,1,s);
        }
    }
    arr = arr.join('').replace(/a/g, 0).replace(/b/g, 1);
    var newArr = [];
    var s = "";
    for (var j = 1; j < arr.length + 1; j++) {
        s = s + arr.charAt(j - 1);
        if (!(j % 8)) {
            s = parseInt(s, 2)
            newArr.push(s + '.');
            s = "";
        }
    }
    var result = newArr.join('')
    // 删除最后一个点
    return result.substr(0, result.length - 1);
}

// 时间复杂度是O(n*num)
console.log(LongToIp("8b2bab2a2bb4ab2ab6ab"));