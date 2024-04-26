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
            if(Number.isInteger((e + r)/ (parseInt(boardSize) + 1))){
                r = r + 1;
                if(r % 2){
                    i = 1;
                }
                else{
                    i = 0;
                }
            }
            if(i == 0){
                box.style.backgroundColor = 'rgb(240, 201, 150)';
                i = 1;
            }
            else{
                box.style.backgroundColor = 'rgb(100, 75, 43)';
                i = 0;
            }
            e = e +1;
        
        }
    }
    coloring();


    function reddish() {
        document.querySelectorAll('.box').forEach(i1 => {
            if (i1.style.backgroundColor == 'pink') {
                document.querySelectorAll('.box').forEach(i2 => {
                    if (i2.style.backgroundColor == 'green' && i2.innerText.lenght !== 0) {

                        greenText = i2.innerTextpinkText = i1.innerText;
                        pinkText = i1.innerText;

                        pinkColor = ((Array.from(pinkText)).shift()).toString();
                        greenColor = ((Array.from(greenText)).shift()).toString();

                        if (pinkColor == greenColor) {
                            i2.style.backgroundColor = 'rgb(253, 60, 60)';
                        }
                    }
                });
            }
        });
    }

    tog = 1
    document.querySelectorAll('.box').forEach(item => {
        item.addEventListener('click', function () {
            if (item.style.backgroundColor == 'green' && item.innerText.length == 0) {
                tog = tog + 1
            }
            else if (item.style.backgroundColor == 'green' && item.innerText.length !== 0) {
                document.querySelectorAll('.box').forEach(i => {
                    if (i.style.backgroundColor == 'pink') {
                        pinkId = i.id
                        pinkText = i.innerText

                        document.getElementById(pinkId).innerText = ''
                        item.innerText = pinkText
                        coloring()
                        insertImage()
                        tog = tog + 1
                    }
                })
            }

            if (item.style.backgroundColor == 'green') {
                if (item.innerText.length == 0) {
                    tog++;
                }
                else {
                    document.querySelectorAll('.box').forEach(i => {
                        if (i.style.backgroundColor == 'pink') {
                            pinkId = i.id;
                            pinkText = i.innerText;

                            document.getElementById(pinkId).innerText = '';
                            item.innerText = pinkText;
                            coloring();
                            insertImage();
                            tog = tog + 1;
                        }
                    })
                }
            }

           
            function whosTurn(toggle) {
                if (item.innerText == `${toggle}pawn`) {
                    item.style.backgroundColor = 'pink';

                    if (tog % 2 !== 0 && aup < 800) {
                        // white pawn
                        if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                            // move one step forward
                            document.getElementById(`b${a + 100}`).style.backgroundColor = 'green';
                            if (a == 100) {
                                // pawn can move two steps forward from its initial position
                                if (document.getElementById(`b${a + 200}`).innerText.length == 0) {
                                    document.getElementById(`b${a + 200}`).style.backgroundColor = 'green';
                                }
                            }
                        }
                        if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                            // capture diagonally to the right
                            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green';
                        }
                        if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                            // capture diagonally to the left
                            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green';
                        }
                    }
                    
                    if (tag % 2 == 0 && aup > 100) {
                        // black pawn
                        if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                            // move one step forward
                            document.getElementById(`b${a - 100}`).style.backgroundColor = 'green';
                            if (a == 800) {
                                // pawn can move two steps forward from its initial position
                                if (document.getElementById(`b${a - 200}`).innerText.length == 0) {
                                    document.getElementById(`b${a - 200}`).style.backgroundColor = 'green';
                                }
                            }
                        }
                        if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                            // capture diagonally to the right
                            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green';
                        }
                        if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                            // capture diagonally to the left
                            document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green';
                        }
                    }
                }

                if (item.innerText == `${toggle}king`) {
                    if (aside < 8) {
                        document.getElementById(`b${a + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 1) {
                        document.getElementById(`b${a - 1}`).style.backgroundColor = 'green'
                    }
                    if (aup < 800) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'green'
                    }
                    if (aup > 100) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'green'
                    }
                    if (aup > 100 && aside < 8) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aup > 100 && aside > 1) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'green'
                    }
                    if (aup < 800 && aside < 8) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aup < 800 && aside > 1) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green'
                    }

                    item.style.backgroundColor = 'pink';
                }

                if (item.innerText == `${toggle}rook`) {
                    for (let i = 1; i < 9; i++) {
                        if ((a + 1 * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green';
                        }
                        else if ((a + 1 * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green';
                            break;
                        }
                    }
                    for (let i = 1; i < 9; i++) {
                        if ((a - 1 * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green';
                        }
                        else if ((a - 1 * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green';
                            break;
                        }
                    }
                    for (let i = 1; i < 9; i++) {
                        if ((a + 1) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green'
                        }
                        else if ((a + 1) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green';
                            break;
                        }
                    }
                    for (let i = 1; i < 9; i++) {
                        if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green';
                        }
                        else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green';
                            break;
                        }
                    }

                    item.style.backgroundColor = 'pink';
                }

                if (item.innerText == `${toggle}knight`) {

                    if (aside < 7 && aup < 800) {
                        document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'green'
                    }
                    if (aside < 7 && aup > 200) {
                        document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'green'
                    }
                    if (aside < 8 && aup < 700) {
                        document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 1 && aup < 700) {
                        document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 2 && aup < 800) {
                        document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'green'
                    }
                    if (aside > 2 && aup > 100) {
                        document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'green'
                    }
                    if (aside < 8 && aup > 200) {
                        document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'green'
                    }
                    if (aside > 1 && aup > 200) {
                        document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'green'
                    }

                    item.style.backgroundColor = 'pink';

                }

                if (item.innerText == `${toggle}bishop`) {
                    if (aside < 8 && aup < 800) {
                        if (document.getElementById(`b${a + 9}`).innerText.length == 0) {
                            document.getElementById(`b${a + 9}`).style.backgroundColor = 'green';
                        } else if (document.getElementById(`b${a + 9}`).innerText[0] != toggle) {
                            document.getElementById(`b${a + 9}`).style.backgroundColor = 'green';
                        }
                    }
                    if (aside < 8 && aup > 100) {
                        if (document.getElementById(`b${a - 91}`).innerText.length == 0) {
                            document.getElementById(`b${a - 91}`).style.backgroundColor = 'green';
                        } else if (document.getElementById(`b${a - 91}`).innerText[0] != toggle) {
                            document.getElementById(`b${a - 91}`).style.backgroundColor = 'green';
                        }
                    }
                    if (aside > 1 && aup < 800) {
                        if (document.getElementById(`b${a + 7}`).innerText.length == 0) {
                            document.getElementById(`b${a + 7}`).style.backgroundColor = 'green';
                        } else if (document.getElementById(`b${a + 7}`).innerText[0] != toggle) {
                            document.getElementById(`b${a + 7}`).style.backgroundColor = 'green';
                        }
                    }
                    if (aside > 1 && aup > 100) {
                        if (document.getElementById(`b${a - 7}`).innerText.length == 0) {
                            document.getElementById(`b${a - 7}`).style.backgroundColor = 'green';
                        } else if (document.getElementById(`b${a - 7}`).innerText[0] != toggle) {
                            document.getElementById(`b${a - 7}`).style.backgroundColor = 'green';
                        }
                    }
                    item.style.backgroundColor = 'pink';
                }


                if (item.innerText == `${toggle}queen`) {
                    // Queen moves like a rook
                    for (let i = 1; i < 9; i++) {
                        if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green';
                        } else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText[0] != toggle) {
                            document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'green';
                            break;
                        }
                    }
                    for (let i = 1; i < 9; i++) {
                        if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green';
                        } else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText[0] != toggle) {
                            document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'green';
                            break;
                        }
                    }
                    for (let i = 1; i < 9; i++) {
                        if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green';
                        } else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText[0] != toggle) {
                            document.getElementById(`b${a + i}`).style.backgroundColor = 'green';
                            break;
                        }
                    }
                    for (let i = 1; i < 9; i++) {
                        if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green';
                        } else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText[0] != toggle) {
                            document.getElementById(`b${a - i}`).style.backgroundColor = 'green';
                            break;
                        }
                    }
                    item.style.backgroundColor = 'pink';
                }

            }
            if (tog % 2 !== 0) {
                document.getElementById('tog').innerText = "White's Turn"
                whosTurn ('W');
            }
            if (tog % 2 == 0) {
                document.getElementById('tog').innerText = "Black's turn"
                whosTurn('B');
            }

            reddish();

            numOfKings = 0;

            document.querySelectorAll('.box').forEach(win => {
                if (win.innertext == 'Wking' || win.innerText == 'Bking') {
                    numOfKings += 1;
                }
            });
            if (numOfKings == 1) {
                setTimeout(() => {
                    if (tog % 2 == 0) {
                        alert('White Wins !!')
                        location.reload()
                    }
                    else if (tog % 2 !== 0) {
                        alert('Black Wins !!')
                        location.reload();
                    }
                }, 100);
            }
        });
    })
    document.querySelectorAll('.box').forEach(hathiTest => {
        hathiTest.addEventListener('click', function () {
            if (hathiTest.style.backgroundColor == 'pink') {
                pinkId = hathiTest.id;
                pinkText = hathiTest.innerText;

                document.querySelectorAll('.box').forEach(hathiTest2 => {
                    hathiTest2.addEventListener('click', function () {
                        if (hathiTest2style.backgroundColor == 'green' && hathiTest2.innerText.length == 0) {
                            document.getElementById(pinkId).innerText = '';
                            hathiTest2.innerText = pinkText;
                            coloring();
                            insertImage();
                        }
                    });
                });
            }
        });
    });

    z = 0;
    document.querySelectorAll('.box').forEach(ee => {
        ee.addEventListener('click', function () {
            z = z + 1;
            if (z % 2 == 0 && ee.style.backgroundColor !== 'green') {
                coloring();
            }
        });
    });
});
