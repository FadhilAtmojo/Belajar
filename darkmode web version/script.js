const button = document.querySelector('button');
const html = document.querySelector('html');
//queryselector digunakan untuk mencari elemnt pertama yang ada dalam sebuah halaman

//listener ketika tombol di click

button.addEventListener('click',
    function() {
        //cek color mode saat ini
        if (html.dataset.colorMode === 'light') {
            html.dataset.colorMode = 'dark';
            this.textContent = 'LIGHT MODE';
        } else if (html.dataset.colorMode === 'dark') {
            html.dataset.colorMode = 'light';
            this.textContent = 'dark mode';
        }
    })

// fungsi h1 judul nya bisa berubah
const fadhil = document.querySelector('h1');
fadhil.addEventListener('click',
    function() {
        if (this.textContent = 'Ini Judul') {
            
        } else if {
            
        }
    }
)