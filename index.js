let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let bia = document.querySelector("#bia");
let btnred = document.getElementById("butaovermei");
let txtfinal = document.getElementById("textofinal")
let resultadofinal = document.getElementById("resultadofinal")
let palpiteBia = (Math.random() * 100).toFixed();

function alterabotao(){
  if (btnred.classList.contains("hidden")){
    btnred.classList.remove("hidden");
    resultadofinal.innerText = palpiteBia;
  }else{
    btnred.classList.add("hidden");
    txtfinal.innerText = "";
    resultadofinal.innerText = "";
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
            alert("Bia está pensando em um numero menor")
        }else if(input.value < palpiteBia){
            alert("Bia está pensando em um numero maior");
        }else{
            bia.src = "./assets/bia-feliz.png";
        }
        palpites.push(input.value);
        if (palpites.length == 5 && input.value != palpiteBia){
            //txtfinal.innerText = "Voce perdeu, o numero era: ";
            //txtfinal.insertAdjacentHTML("afterend", <span class="text-amber-500">38</span>);
            bia.src = "./assets/bia-triste.png";
            alterabotao();
        } else if(input.value == palpiteBia){
            txtfinal.innerText = "Voce ganhou! O numero é: "
            bia.src = "./assets/bia-feliz.png";
            alterabotao();
        }
        input.value = "";
        textoPalpites.innerHTML = palpites.join("-");
}

function restart(){
        palpites = [];
        textoPalpites.innerHTML = "";
        alterabotao();
        bia.src = "./assets/bia.png";
        input.value = "";
        txtfinal.innerText = ""
        resultadofinal.innerText = ""
        palpiteBia = (Math.random() * 100).toFixed();
}