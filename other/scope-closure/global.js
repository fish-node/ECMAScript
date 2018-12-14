var global_count = 0;
var global_num1  = 10;
var global_num2  = 20;
var global_num3  = 30;

function outerFunc() {

   var local_count = local_count || 0;

   console.log("global_num1: " + global_num1);   
   var global_num1  = global_num1 || 0;
   console.log("global_num1: " + global_num1);   

   console.log("global_num2: " + global_num2);   
   global_num2  = global_num2 || 0;        

   console.log("local_count: " + local_count);    

   function output() {
      global_num3++;

      console.log("local_count:  " + local_count  + "\n" +
            "global_count: " + global_count + "\n"
           );

      local_count++; 
   }

   return output;  
}  

var myFunc = outerFunc();
console.log('--------------')

myFunc()
console.log('--------------')
