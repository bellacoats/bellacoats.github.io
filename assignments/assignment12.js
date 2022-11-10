
//reset button
function reset1(){
    outputInt1 = 000;
    output1.textContent = outputInt1;
}

function reset2(){
    outputInt2 = 000;
    output2.textContent = outputInt2;
}

function reset3(){
    outputInt3 = 0000;
    output3.textContent = outputInt3;
}

//random button
function random1(){
    outputInt1 = randomNumber(0,999);
    output1.textContent = outputInt1;
    var length1 = outputInt1.toString().length;
    if (length1 === 2){
        outputInt1 == '0' + outputInt1;
    }
    if (length1 === 1){
        outputInt1 == '00' + outputInt1;
    }
    console.log(length1);
    console.log(outputInt1);
}

function random2(){
    outputInt2 = randomNumber(0,999);
    output2.textContent = outputInt2;
}

function random3(){
    outputInt3 = randomNumber(0,9999);
    output3.textContent = outputInt3;
}

function randomNumber(min,max){
    const num = Math.floor(Math.random() * (max-min + 1)) + min;
    return num;
}

//submit button
function submit(){
    alert(output1.textContent + output2.textContent + output3.textContent);
}

const output1 = document.querySelector('.output1');
const output2 = document.querySelector('.output2');
const output3 = document.querySelector('.output3');
let outputInt1 = parseInt(output1.textContent);
let outputInt2 = parseInt(output2.textContent);
let outputInt3 = parseInt(output3.textContent);


const resetButton1 = document.querySelector('.reset-button1').addEventListener('click',reset1);
const randomButton1 = document.querySelector('.random-button1').addEventListener('click',random1);

const resetButton2 = document.querySelector('.reset-button2').addEventListener('click',reset2);
const randomButton2 = document.querySelector('.random-button2').addEventListener('click',random2);

const resetButton3 = document.querySelector('.reset-button3').addEventListener('click',reset3);
const randomButton3 = document.querySelector('.random-button3').addEventListener('click',random3);
const yesButton = document.querySelector('.yes-button').addEventListener('click',yes);
const noButton = document.querySelector('.no-button').addEventListener('click',no);

function yes(){
    alert('Congrats!');
}

function no(){
    alert('that sucks. goodbye.');
}


