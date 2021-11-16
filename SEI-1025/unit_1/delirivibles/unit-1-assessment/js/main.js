let numberOutput = document.querySelector("#output");
//console.log(numberOutput);
let buttonMinus = document.querySelector(".minus");
//console.log(buttonMinus);
let buttonPlus = document.querySelector(".plus");
//console.log(buttonPlus);

let inputField = document.querySelector("#input");
//console.log(inputField);


window.addEventListener('DOMContentLoaded', function (e) {

});


buttonPlus.addEventListener('click', function () {


    let inputNum = parseInt(inputField.value);
    let outputNum = parseInt(numberOutput.innerHTML);
    let res = outputNum + inputNum;
    numberOutput.innerHTML = res;
    if (res < 0) {
        numberOutput.style.color = "red"
    }
});


buttonMinus.addEventListener('click', function () {
    let inputNum = parseInt(inputField.value);
    let outputNum = parseInt(numberOutput.innerHTML);
    let res = outputNum - inputNum;
    numberOutput.innerHTML = res;

    if (res < 0) {
        numberOutput.style.color = "red"
    }

});

buttonPlus.addEventListener('mouseover', function () {
    buttonPlus.style.backgroundColor = "white";
    buttonPlus.style.color = "rgb(167, 164, 164)"
    setInterval();

})


buttonMinus.addEventListener('mouseover', function () {
    buttonMinus.style.backgroundColor = "white";
    buttonMinus.style.color = "rgb(167, 164, 164)"
    setInterval();

})


setInterval(function () {
    buttonPlus.style.backgroundColor = "rgb(167, 164, 164)";
    buttonPlus.style.color = "white"
}, 2000);

setInterval(function () {
    buttonMinus.style.backgroundColor = "rgb(167, 164, 164)";
    buttonMinus.style.color = "white"
}, 2000);