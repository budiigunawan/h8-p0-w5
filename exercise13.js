function sorting(arrNumber) {
    ///sort descending
    for (var a = 1; a < arrNumber.length; a++) {
        for (var b = 0; b < a; b++) {
            if (arrNumber[a] > arrNumber[b]) {
                var tukar = arrNumber[a]
                arrNumber[a] = arrNumber[b]
                arrNumber[b] = tukar
            }
        }
    }

    return arrNumber
  }
  
  function getTotal(arrNumber) {
    var jumlah = 0
    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] == arrNumber[0]) {
            jumlah++
        }
    }

    if (arrNumber[0] == undefined) {
        return "''"
    }
    else {
        return `angka paling besar adalah ${arrNumber[0]} dan jumlah kemunculan sebanyak ${jumlah} kali`
    }
  }
  
  function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
    return countHighest;
  }
  
  console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
  //'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'
  
  console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
  //'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'
  
  console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
  //'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'
  
  console.log(mostFrequentLargestNumbers([]));
  //''