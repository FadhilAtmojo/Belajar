import java.util.ArrayList;


class StoreItems{

    // atribut
    String itemName;
    
    // constructor
    public StoreItems(String inputItems){ 
        this.itemName = inputItems;
    }
    
}
public class Shoppingcart {
    
    public static void main(String[] args) {       

        // Objek ArrayList baru
        ArrayList<StoreItems> arrItems = new ArrayList<StoreItems>(); 

        // AKTIFKAN KODE INI UNTUK BUAT BELANJAAN KOSONG!
        // arrItems = null;

        // Objek baru (Nonaktifkan apabila ingin belanjaan kosong)
        StoreItems barang1 = new StoreItems("Sayur Asem");
        StoreItems barang2 = new StoreItems("Tempe");

        // Add Objek ke dalam ArrayList (Nonaktifkan apabila ingin belanjaan kosong)
        arrItems.add(barang1);
        arrItems.add(barang2);    

        // ini looping untuk display isi dari ArrayList (arrItems)
        try {
            for (StoreItems i : arrItems) {
                System.out.print("["+i.itemName + "]");
            }
        } catch (Exception e) {
            System.out.println("Belanja Kosong!");
        }          
    } 
}
    
    
    

