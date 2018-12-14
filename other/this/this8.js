(function () {
    var x = 1;
    return {
        f: function (x) {
            alert(x); // paramter (=2)
            alert(this.x); // scoped variable (=1)
        },
        x:x
    };
}()).f(2);