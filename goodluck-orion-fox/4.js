/*
GET TEMAN
function getTeman menerima 2 paramater yang pertama adalah array of strings dan yg ke 
parameter kedua adalah string.
function ini akan mencari teman yang memiliki nomer indonesia dan gendernya laki-laki

Rules: 
 Dilarang menggunakan built-in function selain .push()

 waktu 11 menit 19 detik
*/

function getTeman(data, template) {
    var hasil = []
    var dataArr = []
    ///simpan di array dulu
    for (var i = 0; i < data.length; i++) {
        var temp = ''
        dataArr[i] = []

        for (var j = 0; j <= data[i].length; j++) {
            if (data[i][j] === ',' || j == data[i].length) {
                dataArr[i].push(temp)
                temp = ''
            }
            else {
                temp += data[i][j]
            }
        }
    }

    ///saring dataArr
    for (var a = 0; a < dataArr.length; a++) {
        var kodeNegara = dataArr[a][3][0] + dataArr[a][3][1] + dataArr[a][3][2]

        if (kodeNegara === '+62' || dataArr[a][2] === 'Male') {
            var obj = {
                fullName : `${dataArr[a][0]} ${dataArr[a][1]}`,
                gender : `${dataArr[a][2]}`,
                phone : `${dataArr[a][3]}`
            }

            hasil.push(obj)
        }
    }
    
    return hasil
}

const datas = [
    "Claudette,Dreng,Female,+63-952-343-8477",
    "Wilton,Jarville,Male,+62-388-568-9918",
    "Cosette,Jachimczak,Female,+351-759-588-8682",
    "Verne,Antunes,Male,+62-459-995-2535"
]


console.log(getTeman(datas, "firstName,lastName,gender,phone"))
// [
//     {
//       fullName: 'Wilton Jarville',
//       gender: 'Male',
//       phone: '+62-388-568-9918'
//     },
//     {
//       fullName: 'Verne Antunes',
//       gender: 'Male',
//       phone: '+62-459-995-2535'
//     }
// ]