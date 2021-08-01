
let numberClass = document.querySelector('.numberclass');
let num7 = document.querySelector('.num7');
let num8 = document.querySelector('.num8');
let num9 = document.querySelector('.num9');
let num4 = document.querySelector('.num4');
let num5 = document.querySelector('.num5');
let num6 = document.querySelector('.num6');
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let num3 = document.querySelector('.num3');
let num0 = document.querySelector('.num0');
let del = document.querySelector('.numDel')
let addition = document.querySelector('.addition')
let division = document.querySelector('.division');
let multiplication = document.querySelector('.multiplication');
let soustraction = document.querySelector('.soustraction')
let reset = document.querySelector('.numreset');
let resultat1 = 0;
let resultat2 = 0; 
let resultat3 = 0; 
let resultat4 = 0;
let addition1 = false; 
let addition2 = false;
let soustraction1 = false;
let multiplication1 = false;
let division1 = false;
let resultatFinal = document.querySelector('.numuguale');
let point = document.querySelector('.point');
let zero = true
numberClass.textContent = '0';

function number(premierNombre, deuxiemeNombre) {
        if (addition1 || soustraction1 || division1 || multiplication1) {
            numberClass.style.display = 'block';
            numberClass.innerHTML += premierNombre
            resultat1 = parseInt(resultat1 + deuxiemeNombre);
            console.log(resultat1);    
        } else if (addition2) {
            numberClass.style.display = 'block';
            numberClass.innerHTML += premierNombre
            resultat4 = parseInt(resultat4 + deuxiemeNombre);
            console.log(resultat4);
        }
         else {
          if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += premierNombre
            resultat2 = parseInt(resultat2 +  deuxiemeNombre);
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += premierNombre
            resultat2 = parseInt(resultat2 +  deuxiemeNombre);
            console.log(resultat2); 
          }
        }
    }

num7.addEventListener('click', () => { number(7, "7")});
num8.addEventListener('click', () => { number(8, "8")});
num9.addEventListener('click', () => { number(9, "9")});
num1.addEventListener('click', () => { number(1, "1")});
num4.addEventListener('click', () => { number(4, "4")});
num5.addEventListener('click', () => { number(5, "5")});
num6.addEventListener('click', () => { number(6, "6")});
num2.addEventListener('click', () => { number(2, "2")});
num3.addEventListener('click', () => { number(3, "3")});
num0.addEventListener('click', () => { number(0, "0")});

addition.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.innerHTML += "+";
        addition1 = false;
        addition2 = true;
        soustraction1 = false;
        division1 = false;
        multiplication1 = false;
    } else if (addition2) {
        numberClass.innerHTML += "+"
        addition2 = false;
        addition2 = false;
        soustraction1 = false;
        division1 = false;
        multiplication1 = false;
    } else {
        numberClass.innerHTML += "+"
        addition1 = true;
        addition2 = false;
        soustraction1 = false;
        division1 = false;
        multiplication1 = false;
    }
});
soustraction.addEventListener('click', () => {
    
    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.innerHTML += "-";
        addition1 = false;
        addition2 = false;
        soustraction1 = false;
        division1 = false;
        multiplication1 = false;
    } else {
        numberClass.innerHTML += "-"
        addition1 = false;
        addition2 = false;
        soustraction1 = true;
        division1 = false;
        multiplication1 = false;
    }
});
multiplication.addEventListener('click', () => {
    
    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.innerHTML += "*";
        addition1 = false;
        addition2 = false;
        soustraction1 = false;
        division1 = false;
        multiplication1 = false;
    } else {
        numberClass.innerHTML += "*"
        addition1 = false;
        addition2 = false;
        soustraction1 = false;
        division1 = false;
        multiplication1 = true;
    }
});
division.addEventListener('click', () => {
    
    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.innerHTML += "/";
        addition1 = false;
        addition2 = false;
        soustraction1 = false;
        division1 = false;
        multiplication1 = false;
    } else {
        numberClass.innerHTML += "/"
        addition1 = false;
        addition2 = false;
        soustraction1 = false;
        division1 = true;
        multiplication1 = false;
    }
});
resultatFinal.addEventListener('click', () => {
    if (addition1 || addition2) {
        resultat3 = parseInt(resultat1 + resultat2 + resultat4);
        numberClass.innerHTML = resultat3;
        console.log(resultat3);
        addition1 = false;
        resultat1 = 0;
        resultat2 = 0;
        resultat4 = 0;
        resultat2 = parseInt(resultat3);
    } else if (soustraction1) {
        resultat3 = parseInt(resultat2 - resultat1);
        numberClass.innerHTML = resultat3;
        console.log(resultat3);
        soustraction1 = false;
        resultat1 = 0;
        resultat2 = 0;
        resultat4 = 0;
        resultat2 = parseInt(resultat3);
    } else if (multiplication1) {
        resultat3 = parseInt(resultat2 * resultat1);
        numberClass.innerHTML = resultat3;
        console.log(resultat3);
        multiplication1 = false;
        resultat1 = 0;
        resultat2 = 0;
        resultat4 = 0;
        resultat2 = parseInt(resultat3);
   } else if (division1) {
        resultat3 = parseFloat(resultat2 / resultat1).toFixed(2);
        resultat3 = parseFloat(resultat3);
        numberClass.innerHTML = resultat3;
        console.log(resultat3);
        division1 = false;
        resultat1 = 0;
        resultat2 = 0;
        resultat4 = 0;
        resultat2 = parseFloat(resultat3).toFixed(2);
   }
});
del.addEventListener('click', () => {
    if (addition1) {
        resultat1 =parseInt(resultat1.toString().substr(0, resultat1.toString().length - 1));
        numberClass.innerHTML = resultat1 - (resultat1 - Nombre)
        console.log(resultat1);
    } else if (addition2) {
        resultat4 =parseInt(resultat4.toString().substr(0, resultat4.toString().length - 1));
        numberClass.innerHTML += resultat4 - (resultat4 - Nombre)
        console.log(resultat4);
    } else {
        resultat2 =parseInt(resultat2.toString().substr(0, resultat2.toString().length - 1));
        numberClass.innerHTML = resultat2
        console.log(resultat2);
    }
});
reset.addEventListener('click', () => {
    numberClass.innerHTML = '0';
    resultat1 = 0;
    resultat2 = 0;
    resultat3 = 0;
    resultat4 = 0;
    zero = true;
    addition1 = false;
    soustraction1 = false;
    multiplication1 = false;
    division1 = false;
})
point.addEventListener('click', () => {
    numberClass.innerHTML += ".";
})
