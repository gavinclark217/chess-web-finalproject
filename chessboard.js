document.addEventListener("DOMContentLoaded", function () {
    const gameboard = document.querySelector("#gameboard")
    const playerDisplay = document.querySelector("#player")
    const infoDisplay = document.querySelector("#info-Display")
    const width = 8

    const startPieces = [
        rook, knight, bishop, queen, king, bishop, knight, rook,
        pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        '', '', '', '', '', '', '', '',
        pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
        rook, knight, bishop, queen, king, bishop, knight, rook,
    ]

    function createBoard() {
        startPieces.forEach((startPiece) =>{
            const square = document.createElement('div')
            square.classList.add('square')
        })
    }

    const piecess = document.getElementById("pieces")
    const king = document.getElementById("king")
    const queen = document.getElementById("queen")
    const rook = document.getElementById("rook")
    const bishop = document.getElementById("bishop")
    const knight = document.getElementById("knight")
    const pawn = document.getElementById("pawn")
});
