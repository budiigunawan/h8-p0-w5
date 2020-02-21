/*
Title Givers 
Function titleGivers akan menerima dua parameter dimana parameter pertama merupakan array yang berisi nama.
Dan pada bagian kedua, adalah title yang akan di berikan kepada pemilik nama di array yang di berikan.
Jika title yang di berikan di mulai dengan koma `,` maka title akan di tuliskan.
Jika tidak, maka title akan di tuliskan di depan dan dipisahkan dengan spasi ` `.
Contoh ada pada test case.

[RULE]
- Buatlah pseudocode!
- Dilarang menggunakan built-in function kecuali .push()

SET "targetArr" with array of string
SET "title" with string
SET "hasil" with empty array
SET "titik" without value

FOR "t" = 0 - "t" < "title".length
  IF "title"[t] IS EQUAL TO '.' THEN "titik" IS 'true'
  ENDIF
ENDFOR

IF "titik" IS 'true' THEN
  FOR "i" = 0 - "i" < "targeArr".length
    SET "temp" TO "title" + "targetArr"[i]
    PUSH "temp" TO "hasil"
  ENDFOR
ELSE
  FOR "i" = 0 - "i" < "targeArr".length
    SET "temp" TO "targetArr"[i] + "title"
    PUSH "temp" TO "hasil"
  ENDFOR
ENDIF
///waktu 9 menit 5 detik
*/

function titleGivers(targetArr, title) {
  var hasil = []
  var titik

  for (var t = 0; t < title.length; t++) {
    if (title[t] === '.') {
      titik = true
    }
  }

  if (titik == true) {
    for (i = 0; i < targetArr.length; i++) {
      var temp = `${title} ${targetArr[i]}`
      hasil.push(temp)
    }
  }
  else {
    for (i = 0; i < targetArr.length; i++) {
      var temp = `${targetArr[i]} ${title}`
      hasil.push(temp)
    }
  }

  return hasil
}

console.log(titleGivers(['Awtian Akbar', 'Kobayakawa Sena', 'Yoichi Hiruma'], 'Mr.'));
// [ 'Mr. Awtian Akbar',
//   'Mr. Kobayakawa Sena',
//   'Mr. Yoichi Hiruma' ]

console.log(titleGivers(['Dre', 'Brock', 'Leorio'], 'Dr.'));
// [ 'Dr. Dre', 'Dr. Brock', 'Dr. Leorio' ]

console.log(titleGivers(['Boush', 'Squee', 'Spleen', 'Spoon'], ', ST'));
// [ 'Boush, ST', 'Squee, ST', 'Spleen, ST', 'Spoon, ST' ]