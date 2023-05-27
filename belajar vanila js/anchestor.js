const anchestor = [
    {
        name: "sumandra",
        child: [
            {
                name: "wayan Tjinta",
                child:[
                    {
                        name: 'Mbok Adek',
                    },
                    {
                        name: 'Kakmang',
                    },
                    {
                        name: 'Mbak Tanjung',
                        child: [{name: 'Arjuna'},],
                    },
                    {
                        name: "Yein",
                    },
                ],
            },
            {
                name: 'Sumayasa',
                child: [
                    {
                        name: "Lolik",
                        child: [{name: "Wira"},],
                    },
                    {
                        name: "Novita",
                    },
                    {
                        name: "Suguscol",
                    },
                ],
            },
        ], 
    }
]

console.log(anchestor.length);

function renderAnchestor(array, depth) {
    let inheritance = "", space = "";

    for (let i = 0; i < depth; i++) {
        inheritance += "-";
        space += " ";
    }

    array.forEach(function (array,index) { // memanggil array yang dimasukkan ke dalam fungsi renderAnchestor//
        console.log (`${depth > 0 ? space + "└" + inheritance + "" : ""}${array.name}`);

        if (array.child) { //kegunaan if ini, kalau masuk ke dalam child di array anchestor, maka depth akan ditambah 1//
            renderAnchestor(array.child, (depth += 1)); // memperbarui nilai (depth) sehingga menjalankan function renderAnchestor lagi
        }
        }); 
}

renderAnchestor(anchestor,0);
