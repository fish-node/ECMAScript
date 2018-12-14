package main

import "fmt"

func foo() func(){
	var a = 3
	return func(){
		a = a + 1
		fmt.Println(a) // console.log(a)
	}
};

func main(){
	var biu = foo()
	biu()
	biu()
}
