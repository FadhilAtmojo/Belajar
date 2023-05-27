const namaMantan = [
    "kalid", 
    "kemaloo", 
    "asriiii", 
    "azzam"
];
// for(let i = 0; i <= 10; i++){
//     if(i > -1 && i < namaMantan.length){
//     let x = namaMantan[i];
//     console.log(`${x} adalah mantan ke-${i+1}`);
//     } else if(i<0){
//         console.log(`Gaada mantan ke-(${i})`)
//     } else if(i > namaMantan.length){
//         console.log(`Mantan ke ${i} belum terdaftar`);
//     }
// };

// const deletedItem = namaMantan.splice(1,2);
// console.log(namaMantan);

namaMantan.forEach(function(mantan,index){ 
    // sifat foreach adalah mengambil data array yg pertama (index 0), lalu mengambil data selanjutnya, sampai data array habis
    console.log(mantan,`mantan ke-${index+1}`);
});

// const namaMantanLama = namaMantan.slice();
//namaMantan.push('asiyap');

//console.log("Nama mantan: ", namaMantan);

//console.log("Nama Mantan Lama: ", namaMantanLama);

// console.log(
//     namaMantan.reduce(function (acc, mantan, index) {
//     acc[mantan] = `Mantan ke ${index+1}`;
//     return acc;
// },{})
// );

// let mantan = 0
// while(mantan < namaMantan.length){
//     const element = namaMantan[mantan];
//     console.log(element);
//     mantan++;
// }
// const x = namaMantan[]

console.log(namaMantan
    .filter((mantan) => mantan != 'azzam')
    .map(function(mantan, indexmantan){
        return `${mantan} adalah mantan ke ${indexmantan + 1}`;
    })
    .reduce(function(acc, mantan, ke){
        acc[mantan] = `Mantan ke ${ke+1}`
        return acc;
    }, {})
);
// akhir penggunaan chain


