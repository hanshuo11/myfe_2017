function clone(obj){
    var newobj = {};
    for(var p in obj){
        if(obj[p] instanceof Object){
            newobj[p] = clone(obj[p]);
        }else{
            newobj[p] = obj[p];
        }
    }
    return newobj;
}