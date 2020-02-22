/*
Get List Movies
adalah function yang memiliki input array yang merupakan kumpulan array dengan format 
['rating', 'name', 'waktu hitungan jam',  'year']
function ini adalah modular function. bentuk dari function getListMovies DILARANG UNTUK DI UBAH 

Input dari function ini adalah object
yang menggroupkan movies berdasarkan tahunnya dan data movie sudah di sorting berdasarkan rating dan waktu berbentuk menit 

Rules :
Dilang menggunakan built-in function selain .push() 

Waktu pengerjaan 20 menit 10 detik
*/

/* Function converstionTime akan mengubah value waktu dalam kumpulan array menjadi waktu format menit
Ouput array 2D:
[
    [ 8, 'Avatar Eng', 90, 2015 ],
    [ 10, 'Anna & Eli', 150, 2013 ],
    ...
]
*/
function converstionTime(list) {
    for (var i = 0; i < list.length; i++) {
        var minute = Number(list[i][2][0]) * 60 + Number(list[i][2][2]) * 10 + Number(list[i][2][3]) * 1
        list[i][2] = minute
    }

    return cartoons
}

/* Function sortByRating akan mengurutkan movies berdasarkan ratingnya secara descanding
ouput berupa array of array
[
    [ 8, 'Avatar Eng', 90, 2015 ],
    [ 10, 'Anna & Eli', 150, 2013 ],
    [ 6, 'Hungry Bird', 120, 2013 ],
    ... 
] 
*/
function sortByRating(list) {
    for (var a = 1; a < list.length; a++) {
        for (var b = 0; b < a; b++) {
            if (list[a][0] > list[b][0]) {
                var tukar = list[a]
                list[a] = list[b]
                list[b] = tukar
            }
        }
    }

    return list
}

/*Function groupByYear akan menggelompokkan data movies berdasarkan tahunnyanya
Ouput berupa object dengan keyname tahun dan value dari tahun adalah array of objects
format object untuk permovienya
{name : '<name>', time: '<time in minute> minutes', rating : '<rating>/10'}
*/
function groupByYear(arr) {
    var hasil = {}

    for (var i = 0; i < arr.length; i++) {
        if (hasil[arr[i][3]] == undefined) {
            hasil[arr[i][3]] = []
        }

        var obj = {
            name : arr[i][1],
            time : arr[i][2],
            rating : `${arr[i][0]}/10`
        }

        hasil[arr[i][3]].push(obj)
    }

    return hasil
}


/*
{
    '2013': [
        { name: 'Anna & Eli', time: '150 minutes', rating: '10/10' },
        { name: 'Hungry Bird', time: '120 minutes', rating: '6/10' }
    ],
    '2015': [
        { name: 'Avatar Eng', time: '90 minutes', rating: '8/10' },
        { name: 'Megomind', time: '75 minutes', rating: '5/10' },
        { name: 'Zoopio', time: '80 minutes', rating: '5/10' }
    ],
    '2020': [
        { name: 'Lion Kong', time: '80 minutes', rating: '9/10' },
        { name: 'Sonyc', time: '130 minutes', rating: '6/10' }
    ]
}
*/

/* Function getListMovies akan memberikan data movies yang sudah di arrage tahun dan rating, 
    dan sudah mengkonfersi waktu pada data movie berupa menit. */

function getListMovies(movie) {
    return groupByYear(sortByRating(converstionTime(movie)))
}

var cartoons = [
    [8, 'Avatar Eng', '1:30', 2015],
    [10, 'Anna & Eli', '2:30', 2013],
    [6, 'Hungry Bird', '2:00', 2013],
    [9, 'Lion Kong', '1:20', 2020],
    [5, 'Megomind', '1:15', 2015],
    [6, 'Sonyc', '2:10', 2020],
    [5, 'Zoopio', '1:20', 2015]
]

console.log(getListMovies(cartoons))
/*
{
    '2013': [
        { name: 'Anna & Eli', time: '150 minutes', rating: '10/10' },
        { name: 'Hungry Bird', time: '120 minutes', rating: '6/10' }
    ],
    '2015': [
        { name: 'Avatar Eng', time: '90 minutes', rating: '8/10' },
        { name: 'Megomind', time: '75 minutes', rating: '5/10' },
        { name: 'Zoopio', time: '80 minutes', rating: '5/10' }
    ],
    '2020': [
        { name: 'Lion Kong', time: '80 minutes', rating: '9/10' },
        { name: 'Sonyc', time: '130 minutes', rating: '6/10' }
    ]
}
*/