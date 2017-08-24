class Animal {
    constructor() {
        this.type = 'animal'
    }

    says(say) {
        var that = this;
        setTimeout(() => {
                console.log(that.type + ' says ' + say)
            }, 1000
        )
    }
}

var animal = new Animal()
animal.says('hi')

