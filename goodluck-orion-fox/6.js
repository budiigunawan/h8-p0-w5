/*
Function angkaPrimaRange adalah function menerima angka dan memiliki 
ouput array berisi angka-angka perima sebelum angka tersesbut
cobalah kerjakan soal ini dengan modular function 

Rules : 
Dilarang menggunakan built-in function selain .push()
*/
///waktu 8 menit 15 detik

///untuk ngecek angka prima atau bukan
function angkaPrima(angka) {
    if (angka > 1) {
        var prima = true
        for (var i = 2; i < angka; i++) {
            if (angka % i == 0) {
                prima = false
            }
        }
    }
    else {
        prima = false
    }

    return prima
}

function angkaPrimaRange(num) {
    var hasil = []

    for (var i = 0; i < num; i++) {
        if (angkaPrima(i) == true) {
            hasil.push(i)
        }
    }

    return hasil
}

// TEST CASES
console.log(angkaPrimaRange(6)); // [ 2, 3, 5 ]
console.log(angkaPrimaRange(33)); // [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31 ]