document.getElementById('calculate_button').addEventListener('click', click)

function click() {
    let weight = Number(document.getElementById('weight_input').value)
    let height = Number.parseFloat(document.getElementById('height_input').value)
    let imc = calculateIMC(weight, height)
    if (validationData(imc)) {
        let bio_type = defineBioType(imc)
        let result = defineMessage(bio_type)
        showResults(result, imc) 
    } else {
        showError()
    }

}

function calculateIMC(peso, altura) {   
    let imc = peso / (altura ** 2)
    return imc.toFixed(2)
}

function showResults(message, imc) {
    let results_div = document.getElementById('div_results')
    let elImage = document.createElement('img')
    elImage.setAttribute('src', message.image)
    elImage.setAttribute('id', 'results_image')
 

    results_div.innerHTML = `<h2>Resultado</h2>`
    results_div.innerHTML +=`<h4>Seu IMC é de <u>${imc}</u></h4>`
    results_div.innerHTML += `<p>${message.warning}</p>`
    results_div.innerHTML +=`<p>${message.text}</p>`
    results_div.innerHTML +=`</br>`
    results_div.appendChild(elImage)
}

function showError() {
    let results_div = document.getElementById('div_results')
    results_div.innerHTML = `<h2>Erro</h2>`
    results_div.innerHTML +=`<p>Insira os dados corretamente</p>`
}

function defineBioType(imc) {
    if (imc < 16) {
        let bio_type = 0
        return bio_type
    }

    if (imc >= 16 && imc < 17) {
        let bio_type = 1
        return bio_type
    }

    if (imc >= 17 && imc < 18.5) {
        let bio_type = 2
        return bio_type
    }

    if (imc >= 18.5 && imc < 25) {
        let bio_type = 3
        return bio_type
    }

    if (imc >= 25 && imc < 30) {
        let bio_type = 4
        return bio_type
    }

    if (imc >= 30 && imc < 35) {
        let bio_type = 5
        return bio_type
    }

    if (imc >= 35 && imc < 40) {
        let bio_type = 6
        return bio_type
    }

    if (imc >= 40) {
        let bio_type = 7
        return bio_type
    }
}

function defineMessage(n) {
    switch (n) {
        case 0:
            let message0 = new Message(`Por isso você pode ser considerado uma pessoa com desnutrição grave.`, `b`, `images/0.jpg`)
            return message0

            break;

        case 1:
            let message1 = new Message(`Por isso você pode ser considerado uma pessoa com desnutrição moderada.`, `b`, `images/1.jpg`)
            return message1
            
            break;

        case 2:
            let message2 = new Message(`Por isso você pode ser considerado uma pessoa com desnutrição leve.`, `b`, `images/2.jpg`)
            return message2
            
            break;

        case 3:
            let message3 = new Message(`Portanto você está próximo do peso ideal.`, `b`, `images/3.jpg`)
            return message3
            
            break;

        case 4:
            let message4 = new Message(`Por isso você pode ser considerado uma pessoa com sobrepeso.`, `b`, `images/4.jpg`)
            return message4
            
            break;

        case 5:
            let message5 = new Message(`Por isso você pode ser considerado uma pessoa com obesidade grau 1`, `b`, `images/5.jpg`)
            return message5
            
            break;

        case 6:
            let message6 = new Message(`Por isso você pode ser considerado uma pessoa com obesidade grau 2`, `b`, `images/6.jpg`)
            return message6
            
            break;

        case 7:
            let message7 = new Message(`Por isso você pode ser considerado uma pessoa com obesidade grau 3`, `b`, `images/7.jpg`)
            return message7
            
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

function Message(warning, text, image) {
    this.warning = warning;
    this.text = text;
    this.image = image
}

