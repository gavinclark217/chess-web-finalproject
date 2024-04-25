document.addEventListener("DOMContentLoaded", function () {



    console.log(boardSize);


    function drawBoard() {
        let board = document.getElementById("board");
        for (let i = 8; i > 0; i--) {
            board.innerHTML += '<div class="divv" id="row' + i + '"></div>';
        }
        for (let j = 8; j > 0; j--) {

            let idName = "row" + j;
            let column = document.getElementById(idName);
            for (let k = 0; k < 8; k++) {
                column.innerHTML += '<li class="box" ondrop="drop(event)" ondragover="allowDrop(event)" id="b' + j + '0' + k + '"></li>';
            }
        }
        const blackPieces = ["Brook", "Bknight", "Bbishop", "Bqueen", "Bking", "Bbishop", "Bknight", "Brook", "Bpawn"];
        for (let l = 0; l < 8; l++) {
            let blackRows = document.getElementById('b80' + l);
            blackRows.innerHTML = blackPieces[l];
            let blackPawns = document.getElementById('b70' + l);
            blackPawns.innerHTML = blackPieces[8];
        }
        const whitePieces = ["Wrook", "Wknight", "Wbishop", "Wqueen", "Wking", "Wbishop", "Wknight", "Wrook", "Wpawn"];
        for (let m = 0; m < 8; m++) {
            let whiteRows = document.getElementById('b20' + m);
            whiteRows.innerHTML = whitePieces[8];
            let whitePawns = document.getElementById('b10' + m);
            whitePawns.innerHTML = whitePieces[m];
        }
    }
    drawBoard();




    function insertImage() {
        document.querySelectorAll('.box').forEach(image => {
            if (image.innerText.length !== 0) {
                if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                    image.innerHTML = `${image.innerText}<img class="alligmg allpawn" src="${image.innerText}.png" draggable="true" ondragstart="drag(event)" alt="">`;
                    image.style.cursor = 'pointer';
                }
                else {
                    image.innerHTML = `${image.innerText}<img class="alligmg" src="${image.innerText}.png" draggable="true" ondragstart="drag(event)" alt="">`;
                    image.style.cursor = 'pointer';
                }
            }
        });
    }
    insertImage();

    function coloring() {
        const boxes = document.querySelectorAll('.box');

        boxes.forEach(box => {
            const id = box.id;
            const row = id.slice(1, -1); // Remove the first and last characters (a or 1)
            const col = parseInt(id.charAt(2));
            // const aside = col.pop();
            // const aup = col.shift();
            const rowNumber = row.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            const a = rowNumber + col;

            if (a % 2 == 0) {
                box.style.backgroundColor = 'rgb(240, 201, 150)';
            }
            else {
                box.style.backgroundColor = 'rgb(100, 75, 43)';
            }
        });
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

            getId = stem.id;
            arr = Array.from(getId);
            arr.shift();
            aside = eval(arr.pop());
            arr.push('0');
            aup = eval(arr.join(''));
            a = aside + aup;

            function whosTurn(toggle) {
                if (item.innerText == `${toggle}pawn`) {
                    item.style.backgroundColor = 'pink';

                    if (tog % 2 !== 0 && aup < 800) {
                        if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                            document.getElementById(`b${a + 100}`).style.backgroundColor = 'green';
                        }
                        if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'green';
                        }
                        if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'green';
                        }
                    }

                    if (tag % 2 == 0 && aup > 100) {
                        if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                            document.getElementById(`b${a + 100}`).style.backgroundColor = 'green';
                        }
                        if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                            document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'green';
                        }
                        if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
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
                whosTurn('W');
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
