document.getElementById('calculate_button').addEventListener('click', click)

function click() {
    let weight = Number(document.getElementById('weight_input').value)
    let height = Number.parseFloat(document.getElementById('height_input').value)
    let imc = calculateIMC(weight, height)
    if (validationData(imc)) {
        let bio_type = defineBioType(imc)
        let message = defineMessage(bio_type)
        showResults(message) 
    } else {
        showResults('Insira os dados corretamente')
    }

}

function calculateIMC(peso, altura) {   
    let imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

function showResults(message) {
    let results_div = document.getElementById('div_results')
    results_div.innerHTML = `<h2>Resultado</h2>`
    results_div.innerHTML +=`<p>${message.warning}</p>`
    results_div.innerHTML +=`<p>${message.text}</p>`
    
    
}
/*
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
*/
function defineBioType(imc) {
    if (imc < 10) {
        let bio_type = 0
        return bio_type
    }

    if (imc >= 10 && imc < 13) {
        let bio_type = 1
        return bio_type
    }

    if (imc >= 13 && imc < 16) {
        let bio_type = 2
        return bio_type
    }

    if (imc >= 16 && imc < 17) {
        let bio_type = 3
        return bio_type
    }

    if (imc >= 17 && imc < 18.5) {
        let bio_type = 4
        return bio_type
    }

    if (imc >= 18.5 && imc < 25) {
        let bio_type = 5
        return bio_type
    }

    if (imc >= 25 && imc < 30) {
        let bio_type = 6
        return bio_type
    }

    if (imc >= 30 && imc < 35) {
        let bio_type = 7
        return bio_type
    }

    if (imc >= 35 && imc < 40) {
        let bio_type = 8
        return bio_type
    }

    if (imc >= 40) {
        let bio_type = 9
        return bio_type
    }
}

function defineMessage(n) {
    switch (n) {
        case 0:
            
            break;
        case 1:
            let message = new Message(`a`, `b`)
            return message

            break;
        case 2:

            break;

        case 3:

            break;

        case 4:

            break;

        case 5:

            break;

        case 6:

            break;

        case 7:

            break;

        case 8:

            break;

        case 9:

            break;
    
        default:
            break;
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

function Message(warning, text) {
    this.warning = warning;
    this.text = text;
}