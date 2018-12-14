var aPerson = {
    run: function(){
        console.log('Person ' + this.name + ' is running')
    }
}
var p = Object.create(aPerson)
p.run()

var anAdult = Object.create(aPerson,{
    work: {
        value: function(){
            console.log('Adult ' + this.name + ' is running')
        }
    }
}) 

var a = Object.create(anAdult)
a.work()