let palpites = [];
let textoPalpites = document.querySelector("#palpites");
let bia = document.querySelector("#bia");
let btnred = document.getElementById("butaovermei");
let palpiteBia = (Math.random() * 100).toFixed();

function alterabotao(){
  if (btnred.classList.contains("hidden")){
    btnred.classList.remove("hidden")
  }else{
    btnred.classList.add("hidden");
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
            bia.src = "./assets/bia-triste.png";
            alterabotao()
        } else if(input.value == palpiteBia){
            bia.src = "./assets/bia-feliz.png";
            alterabotao()
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
}