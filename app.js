const btn = document.querySelector('#btn2');
const btn2 = document.querySelector('#btn');
const title = document.querySelector('#title');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const weightP1 = document.querySelector('#weightP1')
const weightP2 = document.querySelector('#weightP2');

weightP1.style.display = "none"
weightP2.style.display = "none"



function kgToLbs(){
    first.value = '';
    second.value = '';
    weightP1.innerHTML = "kg"
    weightP2.innerHTML = "lbs"
    weightP1.style.display = "block"
    weightP2.style.display = "block"
    btn2.addEventListener('click', function(){
        const lbs = 2.20462;
        const value = first.value;
        const result = value * 2.20462;
        second.value = Math.round(result);
    });

}

function lbsToKg(){
    first.value = '';
    second.value = '';
    weightP1.innerHTML = "lbs"
    weightP2.innerHTML = "kg"
    weightP1.style.display = "block"
    weightP2.style.display = "block"
    btn2.addEventListener('click', function(){
        const lbs = 2.20462;
        const value = first.value;
        const result = value / 2.20462;
        second.value = Math.round(result);
        
    });
}

function kgToStones(){
    first.value = '';
    second.value = '';
    weightP1.innerHTML = "kg"
    weightP2.innerHTML = "st"
    weightP1.style.display = "block"
    weightP2.style.display = "block"
    btn2.addEventListener('click', function(){
        const stone = 6.35029318;
        const value = first.value;
        const result = value / 6.35029318;
        second.value = Math.round(result);
    });
}






