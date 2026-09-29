let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let bia = document.querySelector("#bia");
let palpiteBia = (Math.random() * 100).toFixed();

function receberPalpite(input){
    if(palpites.length < 5){
        for(let i = 0; i < palpites.length; i++){
            if(input.value == palpites[i]){
                alert("Este palpite já foi utilizado");
                input.value = "";
                return;
            }
        }
        if(input.value > palpiteBia){
            alert("Bia está pensando em um numero menor")
        }else if(input.value < palpiteBia){
            alert("Bia está pensando em um numero maior")
        }else{
            bia.src = "./assets/bia-feliz.png";
        }
        palpites.push(input.value);
        input.value = "";
        textoPalpites.innerHTML = palpites.join("-");
    } else {
        alert("Suas chances acabaram");
        bia.src = "./assets/bia-triste.png";
        palpites = [];
        textoPalpites.innerHTML = "";
        input.value = "";
    }
}