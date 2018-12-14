class Person:
    def __init__(self, birthyear):
        self.birthyear = birthyear
    
    def logAge(self):
        print(2018 - self.birthyear) 

p = Person(1999)
p.logAge()