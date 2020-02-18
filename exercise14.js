function changeVocals (str) {
    var hasil = ''
    var vocal = 'aeiouAEIOU'
    var change = 'bfjpvBFJPV'

    for (var i = 0; i < str.length; i++) {
        var cekvocal = false
        for (var j = 0; j < vocal.length; j++) {
            if (str[i] == vocal[j]) {
                hasil+= change[j]
                cekvocal = true
            }
        }

        if (!cekvocal) {
            hasil += str[i]
        }
    }

    return hasil
}
  
function reverseWord (str) {
    var hasil = ''
    for (var i = str.length-1; i >= 0; i--) {
        hasil += str[i]
    }

    return hasil
}
  
function setLowerUpperCase (str) {
    var hasil = ''
    var besar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var kecil = 'abcdefghijklmnopqrstuvwxyz'

    for (var i = 0; i < str.length; i++) {
        
        for (var j = 0; j < besar.length; j++) {
            if (str[i] == besar[j]) {
                hasil += kecil[j]
            }
        }

        for (var k = 0; k < kecil.length; k++) {
            if (str[i] == kecil[k]) {
                hasil += besar[k]
            }
        }

        if (str[i] === ' ') {
            hasil += str[i]
        }
    }

    return hasil
}
  
function removeSpaces (str) {
    var hasil = ''

    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            hasil += str[i]
        }
    }

    return hasil
}
  
  function passwordGenerator (name) {
    //code di sini
  }

  console.log(changeVocals('Sergei Dragunov'))
  console.log(reverseWord('Sergei Dragunov'))
  console.log(setLowerUpperCase('Sergei Dragunov'))
  console.log(removeSpaces('Sergei Dragunov'))
  
//   console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'