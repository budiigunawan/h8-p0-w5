/**
 * =========================
 * Group Stage Mobile Legend
 * =========================
 *
 * Mobile legend adalah sebuah game moba yang sangat menarik banyak perhatian orang. Banyak team team yang bertanding dalam
 * turnamen untuk merebutkan peringkat team terbaik di Indonesia.
 *
 * Buatlah sebuah fungsi yang akan menentukan klasemen dari group stage turnamen Mobile legend.
 *
 * Rule perhitungan score:
 * - Setiap team akan mendapatkan 3 point  ketika menang daam sebuah pertandingan.
 * - Setiap team akan kehilangan 1 point ketika kalah dalam sebuah pertandingan.
 *
 * Output:
 * Fungsi ini akan mengeluarkan sebuah output berupa objek urutan klasemen setelah melakukan pertandingan. ( Perhatikan driver code )
 *
 * Asumsi:
 *  - Ketika ada lebih dari satu team yang memiliki score yang sama maka urutan pemenang ditentukan oleh posisi team dalam input fungsi yang kita buat.
 *
 *
 * Rules:
 *  - Tidak boleh menggunakan built-in function array. .map, .filter, .reduce, .sort
 * 
 * waktu 20 menit 44 detik
 */

function groupStage(teams) {
  var hasil = {
    '1' : {},
    '2' : {},
    '3' : {},
    '4' : {}
  }  

  ///[['team',score],['team', score]]
  var arrTemp = []
  for (var i = 0; i < teams.length; i++) {
    arrTemp[i] = []
    var score = 0
    
    for (var j = 0; j < teams[i].matches.length; j++) {
      if (teams[i].matches[j].status === 'win') {
        score += 3
      }
      else {
        score -= 1
      }
    }

    arrTemp[i].push(teams[i].name, score)
  }

  ///sort rangking
  for (var a = 1; a < arrTemp.length; a++) {
    for (var b = 0; b < a; b++) {
      if (arrTemp[a][1] > arrTemp[b][1]) {
        var tukar = arrTemp[a]
        arrTemp[a] = arrTemp[b]
        arrTemp[b] = tukar
      }
    }
  }

  ///masukkin ke hasil
  for (var h = 0; h < arrTemp.length; h++) {
    hasil[String(h+1)].team = arrTemp[h][0]
    hasil[String(h+1)].score = arrTemp[h][1]
  }

  return hasil
}

var group1 = [
  {
    name: 'Evos',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'win'
      }
    ]
  },
  {
    name: 'RRQ',
    matches: [
      {
        against: 'Evos',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'lose'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'Alter Ego',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'ONIC',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'EVOS',
        status: 'lose'
      }
    ]
  }
]
console.log(groupStage(group1))
// /**
//  * {
//  *  '1': {
//  *  team: 'EVOS',
//  *  score: 9
//  * },
//  * '2': {
//  *  team: 'Alter Ego',
//  *  score: 5
//  * },
//  * '3': {
//  *  team: 'Onic',
//  *  score: 5
//  * },
//  * '4': {
//  *  team: 'RRQ',
//  *  score: -3
//  * }
//  * }
//  */

var group2 = [
  {
    name: 'Evos',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'lose'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'RRQ',
    matches: [
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'win'
      }
    ]
  },
  {
    name: 'Alter Ego',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'ONIC',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'EVOS',
        status: 'win'
      }
    ]
  }
]
console.log(groupStage(group2))
// /**
//  * { '1': { team: 'RRQ', score: 9 },
//   '2': { team: 'ONIC', score: 5 },
//   '3': { team: 'Alter Ego', score: 1 },
//   '4': { team: 'Evos', score: -3 } }
// **/