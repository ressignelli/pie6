function abrirModal(imc, cirabd, cirqua) {
	document.getElementById("form1").style.opacity = "0.5";
	document.getElementById("modalRelatorio").style.display = "block";
	document.getElementById("form1").classList.add("form-inativo");
	imcModal(imc);
	circAbdModal(cirabd);
	relAbdQua(cirqua);
}

function fecharModal() {
	document.getElementById("form1").style.opacity = "1";
    	document.getElementById("modalRelatorio").style.display = "none";
}

function imcModal(imc){
	let classe;
      if (imc > 40) {
        classe = "Obesidade Grau 3";
      } else if (imc > 35 && imc < 39.9) {
        classe = "Obesidade Grau 2";
      } else if (imc > 30 && imc < 34.9) {
        classe = "Obesidade Grau 1";
      } else if (imc > 25 && imc < 29.9) {
        classe = "Sobrepeso";
      } else if (imc > 18.5 && imc < 24.9) {
        classe = "Peso Normal";
	} else if (imc > 17 && imc < 18.4) {
        classe = "Baixo Peso";
	} else if (imc > 0 && imc < 16.99) {
	  classe = "Muito Baixo Peso";
	} else { 
	  classe = "Não avaliado";
	}

	document.getElementById("resultaimc").innerHTML = classe;
	
}
function circAbdModal(cirabd) {
    let classe = "";
    let etnia = parseInt(document.getElementById("etnia").value); 
    let sexo = parseInt(document.getElementById("sexo").value); 

    if (etnia === 1) {
        if (sexo === 0) { 
            if (cirabd > 90) {
                classe = "Risco Cardiovascular Alto";
            }
        }
        if (sexo === 1) {
            if (cirabd > 85) {
                classe = "Risco Cardiovascular Alto";
            }
        }
    } else {
        if (sexo === 0) {
            if (cirabd > 102) {
                classe = "Risco Cardiovascular Altíssimo";
            } else if (cirabd > 94 && cirabd < 103) {
                classe = "Risco Cardiovascular Alto";
            } else if (cirabd > 90 && cirabd < 95) {
                classe = "Risco Cardiovascular Médio";
            } else if (cirabd < 91) {
                classe = "Risco Cardiovascular Normal";
            }
        } else if (sexo === 1) {
            if (cirabd > 88) {
                classe = "Risco Cardiovascular Altíssimo";
            } else if (cirabd > 84 && cirabd < 89) {
                classe = "Risco Cardiovascular Alto";
            } else if (cirabd > 80 && cirabd < 85) {
                classe = "Risco Cardiovascular Médio";
            } else if (cirabd < 81) {
                classe = "Risco Cardiovascular Normal";
            }
        }
    }

    if (classe === "" || cirabd===0) {
        classe = "Não avaliado";
    }
    document.getElementById("resultcirabd").innerHTML = classe;
    document.getElementById("resultcirabd2").innerHTML = classe;
}

function relAbdQua(cirqua) {
    let classe = "";
    let sexo = 0;
    if (cirqua === 0 || cirqua === null || cirqua === undefined) {
        classe = "Não avaliado";
    } else {
        if (sexo === 0) { // masculino
            if (cirqua >= 0.9) {
                classe = "Valor acima do normal";
            } else {
                classe = "Valor normal";
            }
        } else { // feminino
            if (cirqua >= 0.85) {
                classe = "Valor acima do normal";
            } else {
                classe = "Valor normal";
            }
        }
    }

    document.getElementById("resultabdqua").innerHTML = classe;
}
