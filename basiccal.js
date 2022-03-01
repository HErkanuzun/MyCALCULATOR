const yazdir = document.getElementById(`sonuc`);

const operator = "+";

const number1 = document.getElementById(`number1`);
const number2 = document.getElementById(`number2`);

const  topla=document.querySelector('#topla');

console.log(topla);
topla.addEventListener('click',function(){
    console.log(number2,number1);
    yazdir.innerHTML=Number(number1.value)+Number(number2.value);
})


cikar.addEventListener(`click`,function(){
    console.log(number1,number2);
    yazdir.innerHTML=Number(number1.value)-Number(number2.value);
})
carp.addEventListener(`click`, function(){
    console.log(number1,number2);
    yazdir.innerHTML=Number(number1.value)* Number(number2.value);
})

bol.addEventListener(`click`,function(){
    console.log(number1,number2);
    if(Number(number2.value)==0){
        yazdir.innerHTML=`Payda sifir olamaz`;

    }
    else{
    yazdir.innerHTML=(Number(number1.value)/ Number(number2.value)).toFixed(3);
    }
})
