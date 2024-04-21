document.addEventListener("DOMContentLoaded", function () {
    if ( document.querySelectorAll('.button') !== null) {
        let buttons = document.querySelectorAll('.button');
        buttons.forEach(button => button.addEventListener('click', processForm))
    }
    document.getElementById('name').addEventListener('change', function (eventData) {
        let nameOutput = document.getElementById('nameOutput');
        nameOutput.innerText = eventData.target.value;
    });
    document.getElementById('name1').addEventListener('change', function (eventData) {
        let nameOutput1 = document.getElementById('nameOutput1');
        nameOutput1.innerText = eventData.target.value;
    });
    document.getElementById("myName").addEventListener("submit", function (eventData) {
        eventData.preventDefault(); 
        console.log(eventData.target);
        var formData = new FormData(eventData.target);
        formData = Object.fromEntries(formData);

        let nameOutput = document.getElementById('nameOutput');
        let nameOutput1 = document.getElementById('nameOutput1')
        nameOutput.innerText = formData.name;
        nameOutput1.innerText = formData.sign;
        changeCert(formData.type)
      });
    console.log("Ready");
});
