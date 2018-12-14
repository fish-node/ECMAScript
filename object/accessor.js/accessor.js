var vue = {
    set value(arg){
        var input = document.getElementById('input')
        input.value = arg
    },
    get value(){
        var input = document.getElementById('input')
        return input.value
    }
}

// vue.value  --- iput.value  绑定起来起来
// 这就是vue、react的核心原理