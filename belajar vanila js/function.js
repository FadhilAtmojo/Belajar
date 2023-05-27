// function fungsiGaje(x = 0){
//     return x + 1;
// }

//console.log(fungsiGaje(1));   //"hasilnya akan sama dengan 2"

// function fungsiGajeDua(x){
//     return x + 1;
// }
// console.log(fungsiGajeDua(1)); // "hasilnya juga akan sama dengan 2"

// (function fungsiGajeTiga(x=0){
//     console.log(x+1);
// })(1)   //"hasilnya juga sama dengan 2"

//fungsi panah
// const fungsiGajeEmpat = (x = 0)=> {
//     return x+1;
// }
// console.log(fungsiGajeEmpat(1));  //"hasilnya juga akan sama dengan 2"

//fungsi di dalam fungsi
function addSquare(a,b){
    function kalikan(x){
        return x*x;
    }
    return kalikan(a) + kalikan(b);
}

console.log(addSquare(1,3));

// masih fungsi dalam fungsi
function luasPersegiPanjang(x,y){
    return x*y;
}
console.log(luasPersegiPanjang(3,4));

//masih fungsi dalam fungsi (membuat rumus luas lingkaran)

function luasLingkaran(r){
    const phi = 22/7;
    function kuadratJariJari(x){
        return x*x;
    }
    return kuadratJariJari(r) * phi;
}

console.log(luasLingkaran(7));

// masih fungsi dalam fungsi
function luasSegitiga(a,t){
    const setengah = 1/2;
    return setengah * a * t;
}
console.log(luasSegitiga(1,2));