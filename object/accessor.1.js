var me = {
    get age(){
        return this.__age
    },
    set age(age){
        console.log('set age:' + age)
        this.__age = age
    }
}

me.age = 2
