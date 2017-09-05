function jishu(str){
    var obj={};
    for(var i=0;i<str.length;i++){
        var v=str.charAt(i);
        if(obj[v]&&obj[v].value==v){
            obj[v].count++;
        }else{
            obj[v]={};
            obj[v].value=v;
            obj[v].count=1;
        }
    }
    for(key in obj){
        console.log(obj[key].value+"="+obj[key].count);
    }
}
var str="sssaaabbbbbbsss"
jishu(str);

console.log(typeof str=="string");