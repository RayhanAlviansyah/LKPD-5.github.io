// // 1 //
// for (let a = 1; a <= 50; a++) {
//     console.log (a)
// }

// 2 //
// let w = 1;
// let hasil 
// while ( w <= 50 ) {
//     hasil = w + " Bilangan genap"

//     console.log (hasil);
//     w+=2;
// }

// 3 // 
// let s = 2;
// let hasil 
// while ( s <= 50 ) {
//     hasil = s + " Bilangan genap"

//     console.log (hasil);
//     s+=2;
// }

// // 4 // 
// let c = 1;
// let hasil 
// while ( c <= 50 ) {
//     if  ( c % 2 == 0) { hasil = c + " Bilangan genap"}

//     else ( hasil = c + " Bilangan gajil" )

//     console.log (hasil);
//     c++;
// }

// 5 //

// Membuat array untuk menyimpan 20 bilangan
let bilangan = [];

// Menggunakan loop for untuk menginput 20 bilangan
for (let i = 0; i < 20; i++) {
    let input = parseFloat(prompt("Masukkan bilangan ke-" + (i + 1) + ":"));

    // Menambahkan bilangan ke dalam array
    bilangan.push(input);
}

// Menginisialisasi variabel untuk bilangan terbesar, terkecil, dan rata-rata
let terbesar = bilangan[0];
let terkecil = bilangan[0];
let total = bilangan[0];

// Menggunakan loop for untuk mencari bilangan terbesar, terkecil, dan menghitung total
for (let i = 1; i < 20; i++) {
    if (bilangan[i] > terbesar) {
        terbesar = bilangan[i];
    }

    if (bilangan[i] < terkecil) {
        terkecil = bilangan[i];
    }

    total += bilangan[i];
}

// Menghitung rata-rata
let rataRata = total / 20;

// Menampilkan hasil
console.log("Bilangan Terbesar: " + terbesar);
console.log("Bilangan Terkecil: " + terkecil);
console.log("Rata-rata: " + rataRata);