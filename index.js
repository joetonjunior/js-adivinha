let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let bia = document.querySelector("#bia");
let btnred = document.getElementById("butaovermei");
let txtfinal = document.getElementById("textofinal");
let palpiteBia = (Math.random() * 100).toFixed();
console.log(palpiteBia);

function alterabotao(){
  if (btnred.classList.contains("hidden")){
    btnred.classList.remove("hidden");
  }else{
    btnred.classList.add("hidden");
    txtfinal.innerText = "";
  }
}

function receberPalpite(input){
        for(let i = 0; i < palpites.length; i++){
            if(input.value == palpites[i]){
                alert("Este palpite já foi utilizado");
                input.value = "";
                return;
            }
        }
        if(input.value > palpiteBia){
            alert("Bia está pensando em um numero menor " + input.value);
        }else if(input.value < palpiteBia){
            alert("Bia está pensando em um numero maior " + input.value);
        }else{
            bia.src = "./assets/bia-feliz.png";
        }
        palpites.push(input.value);
        if (palpites.length == 5 && input.value != palpiteBia){
            txtfinal.innerHTML = "Voce perdeu, o numero era: <span class='text-amber-500'>" + palpiteBia + "</span>";
            bia.src = "./assets/bia-triste.png";
            alterabotao();
        } else if(input.value == palpiteBia){
            txtfinal.innerHTML = "Voce ganhou, o numero é: <span class='text-amber-500'>" + palpiteBia + "</span>";
            bia.src = "./assets/bia-feliz.png";
            alterabotao();
        }
        input.value = "";
        textoPalpites.innerHTML = palpites.join("-");
}

function restart(){
        palpites = [];
        palpiteBia = (Math.random() * 100).toFixed();
        textoPalpites.innerHTML = "";
        txtfinal.innerHTML = "";
        alterabotao();
        bia.src = "./assets/bia.png";
        input.value = "";
}