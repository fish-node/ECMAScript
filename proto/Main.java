public class Main{
    public static void main(String[] args){
        Person p = new Person();
        p.run();
        Adult a = new Adult();
        a.work();
        a.run();
    } 
}

class Person{
    public void run(){
        System.out.println("A person is running");
    }
}
class Adult extends Person{
    public void work(){
        System.out.println("An adult is running");
    }
}