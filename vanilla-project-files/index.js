let card1 = document.getElementsByClassName("card1");
let card2 = document.getElementsByClassName("card2");
let card3 = document.getElementsByClassName("card3");
let card4 = document.getElementsByClassName("card4");
let card5 = document.getElementsByClassName("card5");

let next1 = document.getElementById("next1");
let next2 = document.getElementById("next2");
let next3 = document.getElementById("next3");
let next4 = document.getElementById("next4");

let back2 = document.getElementById("back2");
let back3 = document.getElementById("back3");
let back4 = document.getElementById("back4");

let btnNav = document.getElementsByClassName("btn-nav");

const M = "Monthly";
const Y = "Yearly";
const m = "mo";
const y = "yr";
let mY = document.getElementsByClassName("m-y");

function yearlyCost() {
    // let checkbox = document.getElementById("checkbox");
    var checkbox = document.querySelector('input[class="M-or-Y1"]');
    console.log(checkbox);
    let monthlycost = document.getElementsByClassName("monthlyCost");
    console.log(monthlycost[0].innerHTML);
    let offer = document.getElementsByClassName("gr-offer");
    let addOnRates = document.getElementsByClassName("addOn-rates");
    let finishRates = document.getElementsByClassName("finish-rate");
    let MY = document.getElementById("Mo-Ye");
    console.log(mY);
    checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
            monthlycost[0].innerHTML = "90";
            monthlycost[1].innerHTML = "120";
            monthlycost[2].innerHTML = "150";
            offer[0].style.display = "block";
            offer[1].style.display = "block";
            offer[2].style.display = "block";
            addOnRates[0].innerHTML = "10";
            addOnRates[1].innerHTML = "20";
            addOnRates[2].innerHTML = "20";
            finishRates[0].innerHTML = "90";
            finishRates[1].innerHTML = "10";
            finishRates[2].innerHTML = "20";
            console.log("checked");
            console.log(monthlycost[0].innerHTML);
            for(let i = 0; i < mY.length; i++){
                mY[i].innerHTML = y;
                MY.innerHTML = Y;
                console.log(`${i}`,y, mY.length);
            }
        } else {
            monthlycost[0].innerHTML = "9";
            monthlycost[1].innerHTML = "12";
            monthlycost[2].innerHTML = "15";
            offer[0].style.display = "none";
            offer[1].style.display = "none";
            offer[2].style.display = "none";
            addOnRates[0].innerHTML = "1";
            addOnRates[1].innerHTML = "2";
            addOnRates[2].innerHTML = "2";
            finishRates[0].innerHTML = "9";
            finishRates[1].innerHTML = "1";
            finishRates[2].innerHTML = "2";
            console.log(monthlycost[0].innerHTML);
            for(let i = 0; i < mY.length; i++){
                mY[i].innerHTML = m;
                MY.innerHTML = M;
            }
        }  
    });
}
//     let radioButtons = document.getElementsByName("Plan");
//     radioButtons[0].addEventListener('change', function () {
//         if (radioButtons[0].checked == true) {
//             radioButtons[0].parentNode.classList.add("radio-border");
//             console.log(radioButtons[0].parentNode.classList);
//         } else {
//             radioButtons[0].parentElement.classList.replace("radio-no-border");
//             console.log(radioButtons[0].parentNode.classList);
//         }
//     });
// }
    // function updateStyles() {
    //     const radios = document.getElementsByClassName('plan');
    //     radios.forEach(radio => {
    //         if (radio.checked) {
    //             radio.parentElement.style.borderColor = 'blue';
    //             console.log("Running");
    //         } else {
    //             radio.parentElement.style.borderColor = 'lightgrey';
    //         }
    //     });
    // }

document.addEventListener('DOMContentLoaded', function () {
    yearlyCost();
});

btnNav[0].addEventListener('click', display_card1);
btnNav[1].addEventListener('click', display_card2);
btnNav[2].addEventListener('click', display_card3);
btnNav[3].addEventListener('click', display_card4);

function display_card1() {
    card2[0].classList.add("d-none");
    card3[0].classList.add("d-none");
    card4[0].classList.add("d-none");
    card5[0].classList.add("d-none");
    card1[0].classList.remove("d-none");
    btnNav[0].classList.add("bg-blue");
    btnNav[1].classList.remove("bg-blue");
    btnNav[2].classList.remove("bg-blue");
    btnNav[3].classList.remove("bg-blue");
}
display_card1();
function display_card2() {
    card1[0].classList.add("d-none");
    card2[0].classList.remove("d-none");
    card3[0].classList.add("d-none");
    card4[0].classList.add("d-none");
    card5[0].classList.add("d-none");
    btnNav[0].classList.remove("bg-blue");
    btnNav[1].classList.add("bg-blue");
    btnNav[2].classList.remove("bg-blue");
    btnNav[3].classList.remove("bg-blue");
    yearlyCost()
}
function display_card3() {
    card1[0].classList.add("d-none");
    card2[0].classList.add("d-none");
    card3[0].classList.remove("d-none");
    card4[0].classList.add("d-none");
    card5[0].classList.add("d-none");
    btnNav[0].classList.remove("bg-blue");
    btnNav[1].classList.remove("bg-blue");
    btnNav[2].classList.add("bg-blue");
    btnNav[3].classList.remove("bg-blue");
    yearlyCost()
}
function display_card4() {
    card1[0].classList.add("d-none");
    card2[0].classList.add("d-none");
    card3[0].classList.add("d-none");
    card4[0].classList.remove("d-none");
    card5[0].classList.add("d-none");
    btnNav[0].classList.remove("bg-blue");
    btnNav[1].classList.remove("bg-blue");
    btnNav[2].classList.remove("bg-blue");
    btnNav[3].classList.add("bg-blue");
    yearlyCost()
}
function display_card5() {
    card1[0].classList.add("d-none");
    card3[0].classList.add("d-none");
    card2[0].classList.add("d-none");
    card4[0].classList.add("d-none");
    card5[0].classList.remove("d-none");
    yearlyCost()
}

next1.addEventListener('click', display_card2);
next2.addEventListener('click', display_card3);
next3.addEventListener('click', display_card4);
next4.addEventListener('click', display_card5);

back2.addEventListener('click', display_card1);
back3.addEventListener('click', display_card2);
back4.addEventListener('click', display_card3);

function getSelectedRadio() {
    let radioButtons = document.getElementsByName("Plan");
    for (let radio of radioButtons) {
        if (radio.checked) {
            // radio.parentElement.style.border = "2px solid blue";
            console.log(radio.parentNode);
        }
    }
}


// let yearlycost = document.getElementsByClassName("yearlycost");
