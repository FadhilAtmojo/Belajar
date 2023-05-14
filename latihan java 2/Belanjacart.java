 		
public class Belanjacart {

	public static void main(String[] args) {
		// string daftar barang
        String[] daftarBaranggg = {"Sayur asem"};
        // exception by method
        try {
            for (String i : daftarBaranggg) {
                System.out.println("["+ i +"]");
            }
        } catch (Exception e) {
            System.err.println("Belanja Kosong!");
        }
	}
}
		
