for(var i = 0; i < 2; i++) {
    (function(i){
        return setTimeout(()=>{
            console.log(i)
        }, 10)
    })(i)
}