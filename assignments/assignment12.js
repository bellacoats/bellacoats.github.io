
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
    outputInt1 = randomNumber(100,999);
    output1.textContent = outputInt1;
    var string1 = outputInt1.toString();
    var length1 = string1.length;
    console.log(length1);
    console.log(string1);
    if (length1 === 2){
        string1 = '0' + string1;
    }
    if (length1 === 1){
        string1 = '00' + string1;
    }
    output1.textContent=string1;
    console.log(string1);
}

function random2(){
    outputInt2 = randomNumber(0,999);
    output2.textContent = outputInt2;
    var string2 = outputInt2.toString();
    var length2 = string2.length;
    console.log(length2);
    console.log(string2);
    if (length2 === 2){
        string2 = '0' + string2;
    }
    if (length2 === 1){
        string2 = '00' + string2;
    }
    output2.textContent=string2;
    console.log(string2);
}

function random3(){
    outputInt3 = randomNumber(0,9999);
    output3.textContent = outputInt3;
    var string3 = outputInt3.toString();
    var length3 = string3.length;
    console.log(length3);
    console.log(string3);
    if (length3 === 3){
        string3 = '0' + string3;
    }
    if (length3 === 2){
        string3 = string3 + '00';
    }
    if (length3 === 1){
        string3 = '000' + string3;
    }
    output3.textContent=string3;
    console.log(string3);   
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

const submitButton = document.querySelector('.submit-button').addEventListener('click',submit);

function yes(){
    alert('Congrats!');
}

function no(){
    alert('that sucks. goodbye.');
}


