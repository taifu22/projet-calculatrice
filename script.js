
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

num7.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 7
        resultat1 = parseInt(resultat1 + "7");
        console.log(resultat1);    
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 7
        resultat4 = parseInt(resultat4 + "7");
        console.log(resultat4);
    }
     else {
      if (zero) {
        numberClass.textContent = "";
        numberClass.style.display = 'block';
        numberClass.innerHTML += 7
        resultat2 = parseInt(resultat2 +  "7");
        console.log(resultat2); 
        zero = false;  
      } else {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 7
        resultat2 = parseInt(resultat2 +  "7");
        console.log(resultat2); 
      }
    }
});
num8.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 8
        resultat1 = parseInt(resultat1 + "8");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 8
        resultat4 = parseInt(resultat4 + "8");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 8
            resultat2 = parseInt(resultat2 +  "8");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 8
            resultat2 = parseInt(resultat2 +  "8");
            console.log(resultat2); 
          }
    }
});
num9.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 9
        resultat1 = parseInt(resultat1 + "9");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 9
        resultat4 = parseInt(resultat4 + "9");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 9
            resultat2 = parseInt(resultat2 +  "9");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 9
            resultat2 = parseInt(resultat2 +  "9");
            console.log(resultat2); 
          }
    }
});
num1.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 1
        resultat1 = parseInt(resultat1 + "1");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 1
        resultat4 = parseInt(resultat4 + "1");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 1
            resultat2 = parseInt(resultat2 +  "1");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 1
            resultat2 = parseInt(resultat2 +  "1");
            console.log(resultat2); 
          }
    }
});
num4.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 4
        resultat1 = parseInt(resultat1 + "4");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 4
        resultat4 = parseInt(resultat4 + "4");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 4
            resultat2 = parseInt(resultat2 +  "4");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 4
            resultat2 = parseInt(resultat2 +  "4");
            console.log(resultat2); 
          }
    }
});
num5.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 5
        resultat1 = parseInt(resultat1 + "5");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 5
        resultat4 = parseInt(resultat4 + "5");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 5
            resultat2 = parseInt(resultat2 +  "5");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 5
            resultat2 = parseInt(resultat2 +  "5");
            console.log(resultat2); 
          }
    }
});
num6.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 6
        resultat1 = parseInt(resultat1 + "6");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 6
        resultat4 = parseInt(resultat4 + "6");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 6
            resultat2 = parseInt(resultat2 +  "6");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 6
            resultat2 = parseInt(resultat2 +  "6");
            console.log(resultat2); 
          }
    }
});
num2.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 2
        resultat1 = parseInt(resultat1 + "2");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 2
        resultat4 = parseInt(resultat4 + "2");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 2
            resultat2 = parseInt(resultat2 +  "2");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 2
            resultat2 = parseInt(resultat2 +  "2");
            console.log(resultat2); 
          }
    }
});
num3.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 3
        resultat1 = parseInt(resultat1 + "3");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 3
        resultat4 = parseInt(resultat4 + "3");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 3
            resultat2 = parseInt(resultat2 +  "3");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 3
            resultat2 = parseInt(resultat2 +  "3");
            console.log(resultat2); 
          }
    }
});
num0.addEventListener('click', () => {

    if (addition1 || soustraction1 || division1 || multiplication1) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 0
        resultat1 = parseInt(resultat1 + "0");
        console.log(resultat1);
    } else if (addition2) {
        numberClass.style.display = 'block';
        numberClass.innerHTML += 0
        resultat4 = parseInt(resultat4 + "0");
        console.log(resultat4);
    } else {
        if (zero) {
            numberClass.textContent = "";
            numberClass.style.display = 'block';
            numberClass.innerHTML += 0
            resultat2 = parseInt(resultat2 +  "0");
            console.log(resultat2); 
            zero = false;  
          } else {
            numberClass.style.display = 'block';
            numberClass.innerHTML += 0
            resultat2 = parseInt(resultat2 +  "0");
            console.log(resultat2); 
          }
    }
});

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
    numberClass.style.display = 'none';
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
});
reset.addEventListener('click', () => {
    numberClass.style.display = 'none';
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
