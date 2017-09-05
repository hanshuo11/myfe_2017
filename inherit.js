function eat(add, food) {
    this.add = add;
    this.food = food;
}


function pensonle(a,b) {
    eat.call(this, a,b);
    this.say = function () {
        console.log(this.add + this.food);
    }
}

var s = new pensonle("aaa", "eag");
s.say();