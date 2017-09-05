// console.log("start");
// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }
// console.log("end");
function f2() {
    function f1(){
        var n=999;
    }
    alert(n); // error
}
