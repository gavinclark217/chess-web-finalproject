document.addEventListener("DOMContentLoaded", function () {



    // console.log(boardSize);
    const blackPieces = ["Brook", "Bknight", "Bbishop", "Bqueen", "Bking", "Bbishop", "Bknight", "Brook", "Bpawn"];
    const whitePieces = ["Wrook", "Wknight", "Wbishop", "Wqueen", "Wking", "Wbishop", "Wknight", "Wrook", "Wpawn"];
    const blackPiecesWithoutKing = ["Brook", "Bknight", "Bbishop", "Bqueen", "Bbishop", "Bknight", "Brook"];
    const whitePiecesWithoutKing = ["Wrook", "Wknight", "Wbishop", "Wqueen", "Wbishop", "Wknight", "Wrook"];

    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    function drawBoard() {
        let board = document.getElementById("board");
        let boardSize = sessionStorage.getItem("size");
        for (let i = boardSize; i > 0; i--) {
            board.innerHTML += '<div class="divv" id="row' + i + '"></div>';
        }
        for (let j = boardSize; j > 0; j--) {

            let idName = "row" + j;
            let column = document.getElementById(idName);
            for (let k = 0; k < boardSize; k++) {
                column.innerHTML += '<li class="box" ondrop="drop(event)" ondragover="allowDrop(event)" id="b' + j + '0' + k + '"></li>';
            }
        }

        for (let l = 0; l < boardSize; l++) {
            let blackRows = document.getElementById('b' + (boardSize) + '0' + l);
            if (l < 8) {
                blackRows.innerHTML = blackPieces[l];
            }
            else {

                let blackRandomNumber = getRandomInt(6);
                blackRows.innerHTML = blackPiecesWithoutKing[blackRandomNumber];
                console.log("Black extra piece #" + (l - 7) + ": " + blackPiecesWithoutKing[blackRandomNumber]);
            }
            let blackPawns = document.getElementById('b' + (boardSize - 1) + '0' + l);
            blackPawns.innerHTML = blackPieces[8];
        }

        for (let m = 0; m < boardSize; m++) {

            let whitePawns = document.getElementById('b20' + m);
            whitePawns.innerHTML = whitePieces[8];

            let whiteRows = document.getElementById('b10' + m);
            if (m < 8) {
                whiteRows.innerHTML = whitePieces[m];
            }
            else {
                let whiteRandomNumber = getRandomInt(6);
                whiteRows.innerHTML = whitePiecesWithoutKing[whiteRandomNumber];
                console.log("White extra piece #" + (m - 7) + ": " + whitePiecesWithoutKing[whiteRandomNumber]);
            }
        }
    }
    drawBoard();




    function insertImage() {
        let i = 0;
        let j = 0;
        document.querySelectorAll('.box').forEach(image => {

            if (image.innerText.length !== 0) {
                i++
                if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                    image.innerHTML = `${image.innerText.slice(1)}<img class="alligmg allpawn" id="${image.innerText + i}" src="${image.innerText}.png" draggable="true" ondragstart="drag(event)" alt="">`;
                    image.style.cursor = 'pointer';
                }
                else {
                    j++
                    image.innerHTML = `${image.innerText.slice(1)}<img class="alligmg" id="${image.innerText + j}" src="${image.innerText}.png" draggable="true" ondragstart="drag(event)" alt="">`;
                    image.style.cursor = 'pointer';
                }
            }

        });
    }
    insertImage();
    // 9 17 25 8x +1
    function coloring() {
        const boxes = document.querySelectorAll('.box');
        // console.log(boxes)
        let i = 0;
        let e = 1;
        let r = 0;
        let boardSize = sessionStorage.getItem("size");
        for (const box of boxes) {
            // console.log(Number.isInteger(e / 8), e, i, r)
            if (Number.isInteger((e + r) / (parseInt(boardSize) + 1))) {
                r = r + 1;
                if (r % 2) {
                    i = 1;
                }
                else {
                    i = 0;
                }
            }
            if (i == 0) {
                box.style.backgroundColor = 'rgb(240, 201, 150)';
                i = 1;
            }
            else {
                box.style.backgroundColor = 'rgb(100, 75, 43)';
                i = 0;
            }
            e = e + 1;

        }
    }
    coloring();
});
