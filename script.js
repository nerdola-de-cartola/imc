document.getElementById('calculate_button').addEventListener('click', click)

function click() {
    let weight = Number(document.getElementById('weight_input').value)
    let height = Number.parseFloat(document.getElementById('height_input').value)
    let imc = calculateIMC(weight, height)
    if (validationData(imc)) {
        showResults(defineMessage(imc))
    } else {
        showResults('Insira os dados corretamente')
    }

}

function calculateIMC(peso, altura) {   
    let imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

function showResults(results) {
    let results_div = document.getElementById('div_results')
    results_div.innerHTML = `<h2>Resultado</h2>`
    results_div.innerHTML += `<p>${results}</p>`
}

function defineMessage(imc) {
    if (imc < 10) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com desnutrição grau 5.`
    }

    if (imc >= 10 && imc < 13) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com desnutrição grau 4.`
    }

    if (imc >= 13 && imc < 16) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com desnutrição grau 3.`
    }

    if (imc >= 16 && imc < 17) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com desnutrição grau 2.`
    }

    if (imc >= 17 && imc < 18.5) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com desnutrição grau 1.`
    }

    if (imc >= 18.5 && imc < 25) {
        return `Seu IMC é de ${imc} <br> Portanto você está próximo do peso ideal.`
    }

    if (imc >= 25 && imc < 30) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com sobrepeso.`
    }

    if (imc >= 30 && imc < 35) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com obesidade grau 1.`
    }

    if (imc >= 35 && imc < 40) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com obesidade grau 2.`
    }

    if (imc >= 40) {
        return `Seu IMC é de ${imc} <br> Por isso você pode ser considerado uma pessoa com obesidade grau 3.`
    }
}

function validationData(imc) {
    if (imc <=0) {
        return false
    }

    if (imc == undefined) {
        return false
    }

    if (isNaN(imc)) {
        return false
    }

    if (imc == null) {
        return false
    }

    if (imc >= Infinity) {
        return false
    }

    else {
        return true
    }
    
}
