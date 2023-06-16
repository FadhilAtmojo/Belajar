// const getUserSync = (id) =>{
//     // let nama = '';
//     // if (id  == 1) {
//     //     nama = 'Sandhika';
//     // } else{
//     //     nama = 'Galih';
//     // }

//     // operator ternary
//     const nama = id == 1 ? 'Sandhika' : 'Galih';
//     return {id, nama};
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello World';
// console.log(halo);

// asyncronus
const getUser = (id, callback) =>{
    const time = id == 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = id == 1 ? 'Sandhika' : 'Galih';
        callback({id, nama});
    }, time)
};


// callback adalah fungsi  yang dijalankan ketika fungsi tersebut selesai
const userSatu = getUser(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUser(2, (hasil) => {
    console.log(hasil);
});

const halo = 'Hello World';
console.log(halo);