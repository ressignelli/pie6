function calculaIMC(){
	let sign = "";
	let massa = parseFloat(document.getElementById("massa").value);
	let estatura = parseFloat(document.getElementById("estatura").value);

   	if (!isNaN(massa) && !isNaN(estatura) && estatura > 0) {
      	const imc = (massa / Math.pow(estatura, 2))*10000;

        if (imc < 18.5) {
            sign = "Abaixo do peso (magreza)";
        } else if (imc < 25) {
            sign = "Peso normal";
        } else if (imc < 30) {
            sign = "Sobrepeso";
        } else if (imc < 35) {
            sign = "Obesidade grau I";
        } else if (imc < 40) {
            sign = "Obesidade grau II";
        } else {
            sign = "Obesidade grau III (muito elevada)";
        }
	  document.getElementById("resultIMC").innerHTML = "IMC: " + imc.toFixed(2) + " kg/m² - " + sign;
    	} else {
		document.getElementById("resultIMC").innerHTML = "";
	}

}
function calculacirabd(){

// falta pegar o sexo genético cadastrado

	let cirabd = parseFloat(document.getElementById("cirabd").value);
	let etnia = document.getElementById("etnia").value;
	let result = "";

	if (etnia === "0"){
		if (sexo === "f"){
			if (cirabd > 80){
				result = "Acima do normal";
			}else{
				result = "Dentro dos padrões de normalidade";
			}
		}else {
			if (cirabd > 94){
				result = "Acima do normal";
			}else{
				result = "Dentro dos padrões de normalidade";
			}
		}
	}else{
		if (sexo === "f"){
			if (cirabd > 80){
				result = "Acima do normal";
			}else{
				result = "Dentro dos padrões de normalidade";
			}
		}else {
			if (cirabd > 90){
				result = "Acima do normal";
			}else{
				result = "Dentro dos padrões de normalidade";
			}
		}
	}
	if (result !== ""){
		document.getElementById("resultcirabd").innerHTML = result;
	}
}

function calcularcq(){

// falta pegar o sexo genético cadastrado

	let cirabd = parseFloat(document.getElementById("cirabd").value);
	let cirqua = parseFloat(document.getElementById("cirqua").value);
	let result = "";

	if (isNaN(cirabd) || isNaN(cirqua)){
		alert("É necessário preencher os valores da circunferência abdominal e do quadril!");
		return;
	}

	const rcp = cirabd / cirqua;

	if (sexo === "f"){
		if (rcp > 0.85){
			result = "Acima do normal";
		}else{
			result = "Dentro dos padrões de normalidade";
		}
	}else{
		if (rcp > 0.95){
			result = "Acima do normal";
		}else{
			result = "Dentro dos padrões de normalidade";
		}
	}
	if (result !== ""){
		document.getElementById("resultcintquad").innerHTML = result;
	}

}