/*
Tic-tac-toe adalah sebuah permainan dua orang dengan matrix 3x3 yang bergiliran.
Jika ada salah satu sisi yang ada 3 kemunculan dalam bentuk
horizontal, vertical maupun diagonal, dia menang.
Kak Semmi perlu bantuanmu untuk mencari pemenang tic-tac-toe.
Jika X menang, tampilkan "X"
Jika O menang, tampilkan "O"
Jika tidak ada pemenang, tampilkan "Draw"

RULES:
Hanya boleh menggunakan built-in function .push()
Harus memakai while-loop
*/
function ticTacToe(array) {
	var hasil = ''
	var diagonalX = []
	var diagonalO = []
	var angka = 1
	var cek = 1

	for (var i = 0; i < array.length; i++) {
		var posX = []
		var posO = []

		///cek horisontal
		for (var j = 0; j < array.length; j++) {
			if (array[i][j] === 'X') {
				posX.push('X')
			}
			else if (array[i][j] === 'O') {
				posO.push('O')
			}
		}

		if (posX.length == 3) {
			hasil = 'X'
			return hasil
		}
		else if (posO.length == 3) {
			hasil = 'O'
			return hasil
		}
		else {
			var posX = []
			var posO = []
		}

		///cek vertikal
		for (var k = 0; k < array.length; k++) {
			if (array[k][i] === 'X') {
				posX.push('X')
			}
			else if (array[k][i] === 'O') {
				posO.push('O')
			}
		}

		if (posX.length == 3) {
			hasil = 'X'
			return hasil
		}
		else if (posO.length == 3) {
			hasil = 'O'
			return hasil
		}
	}

	for (var a = 0 ; a < array.length; a++) {
		for (var b = 0; b < array.length; b++) {
			if (array[a][b] === 'X' && angka == cek) {
				diagonalX.push('X')
				cek += 2
			}
			else if (array[a][b] === 'O' && angka == cek) {
				diagonalO.push('O')
				cek += 2
			}
			angka++
		}
	}

	if (diagonalX.length > 2) {
		hasil = 'X'
		return hasil
	}
	else if (diagonalO.length > 2) {
		hasil = 'O'
		return hasil
	}

	hasil = 'draw'
	return hasil
}

console.log(
	ticTacToe([
		['X', 'O', 'X'],
		['O', 'X', 'O'],
		['O', 'X', 'X']
	])
); //"X"

console.log(
	ticTacToe([
		['O', 'O', 'O'],
		['O', 'X', 'X'],
		['E', 'X', 'X']
	])
); //"O"

console.log(
	ticTacToe([
		['X', 'X', 'O'],
		['O', 'O', 'X'],
		['X', 'X', 'O']
	])
); //"Draw"