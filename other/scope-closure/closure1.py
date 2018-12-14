def foo():
    a = 3
    def bar():
        print(a)
    return bar

def foo1():
    a = 4 
    bar1 = foo()
    bar1()

foo1()