/**
Reverse Image 

Diberikan sebuah array 2 dimensi yang berisi angka. Tugas kalian adalah mengubah isi dari elemen-elemen array tersebut.
Yang harus diubah ada 3 hal:
1. Urutan dari array di dalam array-2-dimensi harus dibalik, jadi array di paling akhir harus ditaruh di paling awal.
2. Urutan dari item di dalam array harus diubah urutannya, jadi item yang berada di paling kanan akan berada di paling kiri.
3. Jika ada angka 0 pada index tersebut, maka angka tersebut harus ditukar dengan angka 1 dan begitu juga sebaliknya

Lihatlah test-case untuk contoh kasus

RULES:
-Dilarang menggunakan built-in function selain .push()
*/
  
function reverse(arr){
  var hasil = []
  var newArr = []

  for (var a = arr.length-1; a >= 0; a--) {
    newArr.push(arr[a])
  }

  for (var i = 0; i < newArr.length; i++) {
    hasil[i] = []

    for (var j = newArr[i].length-1; j >= 0; j--) {
      if (newArr[i][j] == 0) {
        hasil[i].push(1)
      }
      else if (newArr[i][j] == 1) {
        hasil[i].push(0)
      }
      else {
        hasil[i].push(newArr[i][j])
      }
    }
  }

  return hasil
}


console.log(reverse(
    [[1, 2, 3],
    [0, 1, 5],
    [0, 3, 1]]));
/**
[ [ 0, 3, 1 ], 
  [ 5, 0, 1 ], 
  [ 3, 2, 0 ] ]
 */

console.log(reverse([[1,2,3],[4,5,6],[7,8,9]])); 
/*
[ [ 9, 8, 7 ], 
  [ 6, 5, 4 ], 
  [ 3, 2, 0 ] ] */

console.log(reverse([[1,2,3,4], [0,1,2,3,4], [0,0,1,3,4], [1,3,4,5,6,7,8]]))
/*
[
  [ 8, 7, 6, 5,
    4, 3, 0 ],
  [ 4, 3, 0, 1, 1 ],
  [ 4, 3, 2, 0, 1 ],
  [ 4, 3, 2, 0 ]
]
*/

console.log(reverse([])); //[]