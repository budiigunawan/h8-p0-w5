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
    //code di sini
  }
  
  function setLowerUpperCase (str) {
    //code di sini
  }
  
  function removeSpaces (str) {
    //code di sini
  }
  
  function passwordGenerator (name) {
    //code di sini
  }

  console.log(changeVocals('Sergei Dragunov'))
  
//   console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
//   console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
//   console.log(passwordGenerator('Alexei')); // 'JFXFLb'
//   console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'