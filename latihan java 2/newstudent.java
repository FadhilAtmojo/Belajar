class newstudent { 
  
    public static void main(String args[]){ 
  
        SimpanBarang[] arr; 
        arr = new SimpanBarang[2]; 

        arr[0] = new SimpanBarang("Sayur asem");
        arr[1] = new SimpanBarang("Sayur Tempe"); 
  
        System.out.println(arr);
        System.out.println("Student data in student arr 0: "); 
        arr[0].display(); 
  
        System.out.println("Student data in student arr 1: "); 
        arr[1].display(); 
    } 
} 
  
class SimpanBarang { 
  
    public int id; 
    public String name; 
  
    SimpanBarang(String name){ 
        this.name = name;
    } 

    public void display() 
    { 
        System.out.println("barang: " + name); 
        System.out.println(); 
    } 
}
