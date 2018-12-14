def foo():
    a = 3
    def bar():
        print(a) # console.log(a)
    return bar

biu = foo()
biu() 