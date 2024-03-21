document.addEventListener("DOMContentLoaded", function () {
    function insertImage(){
        document.querySelectorAll('.box').forEach(image => {
            if(image.innertext.length !== 0){
                if(image.innertext == 'Wpawn' || image.innerText == 'Bpawn'){
                    image.innerHTML = '${image.innerText} <img class="alligmg allpawn" src="${image.innerText}.png" alt="">'
                }
            }
        })
    }
});
