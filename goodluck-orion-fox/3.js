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
	//good luck!
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