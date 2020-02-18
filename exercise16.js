function totalDigitRekursif(angka) {
    var angkaStr = String(angka)

    if (angkaStr.length == 1) {
        return Number(angkaStr[angkaStr.length-1])
    }
    else {
        return Number(angkaStr[angkaStr.length-1]) + totalDigitRekursif(parseInt(angka/10))
    }
}

//TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5