/**
Diberikan sebuah function subset() yang menerima 2 parameter berisi
array. Yaitu arr1 dan arr2 yang keduanya berisi angka.
Function subset akan mengecek apakah arr1 merupakan subset dari arr2.
Artinya, semua angka di arr1 harus berada di arr2.
Angka di arr1 adalah angka unik, sehingga tidak ada angka yang muncul
2 kali di arr1.
 
RULES:
WAJIB MENULISKAN PSEUDOCODE SEBELUM MEMBUAT CODE
Dilarang menggunakan built-in function selain .push()

*/

//Tulislah Pseudocode disini
/**
 * PSEUDOCODE
 * SET "arr1" with array of number
 * SET "arr2" with array of number
 * SET "sama" with empty array
 * 
 * FOR "i" = 0 - "i" < "arr1".length
 *  FOR "j" = 0 - "j" < "arr2".length
 *      IF "arr1"[i] IS EQUAL TO "arr2"[j] THEN
 *          SET "cek" TO "false"
 *          
 *          FOR "h" = 0 - "h" < "sama".length
 *              IF "arr2"[j] IS EQUAL TO "sama"[h] THEN "cek" IS "true"
 *              ENDIF
 *          ENDFOR
 * 
 *          IF "cek" IS "false" THEN PUSH "arr2"[j] to "sama"
 *          ENDIF
 *      ENDIF
 *  ENDFOR
 * ENDFOR
 * 
 * IF "sama".length IS NOT EQUAL TO "arr1".length THEN DISPLAY "false"
 * ELSE DISPLAY "true"
 * ENDIF
 */

function subset(arr1,arr2) {
    var sama = []

    for (var i = 0; i < arr1.length; i++) {
        for (var j = 0; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                var cek = false

                for (var h = 0; h < sama.length; h++) {
                    if (arr2[j] == sama[h]) {
                        cek = true
                    }
                }

                if (!cek) {
                    sama.push(arr2[j])
                }
            }
        }
    }

    if (sama.length != arr1.length) {
        return false
    }
    else {
        return true
    }
}

console.log(subset([3,9,5],[1, 3, 9, 5, 8, 44])); //true
console.log(subset([1,3], [1,3,5,7,8])) //true
console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])) //true
console.log(subset([1, 3], [1, 33])) //false
console.log(subset([1, 3, 10], [10, 8, 8, 8])) //false