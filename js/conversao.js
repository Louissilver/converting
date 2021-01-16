inputTextArea = document.querySelector("#texto");

const converterPrimeiraDaFrase = () => {
    let textoParaFormatar = inputTextArea.value;
    let arrayDeFrasesDoTexto = textoParaFormatar.split('. ');
    let arrayDeNovasFrases = [];

    inputTextArea.value = '';
    for (let i = 0; i < arrayDeFrasesDoTexto.length; i++) {
        let fraseOriginal = arrayDeFrasesDoTexto[i];
        arrayDeNovasFrases.push(fraseOriginal[0].toUpperCase() + fraseOriginal.substring(1).toLowerCase());
    }
    inputTextArea.value = arrayDeNovasFrases.join('. ');
}

const converterPrimeiraDaPalavra = () => {
    let textoParaFormatar = inputTextArea.value;
    let arrayDePalavrasDoTexto = textoParaFormatar.split(' ');
    let arrayDeNovasPalavras = [];

    inputTextArea.value = '';
    for (let i = 0; i < arrayDePalavrasDoTexto.length; i++) {
        let palavraOriginal = arrayDePalavrasDoTexto[i];
        let palavraFinal = '';
        for (let j = 0; j < palavraOriginal.length; j++) {
            if (j == 0) {
                palavraFinal += palavraOriginal[j].toUpperCase();
            } else {
                palavraFinal += palavraOriginal[j].toLowerCase();
            }
        }
        arrayDeNovasPalavras.push(palavraFinal);
    }
    inputTextArea.value = arrayDeNovasPalavras.join(' ');
}

const converterParaMaiusculas = () => {
    let textoParaFormatar = inputTextArea.value;
    inputTextArea.value = textoParaFormatar.toUpperCase();
}

const converterParaMinusculas = () => {
    let textoParaFormatar = inputTextArea.value;
    inputTextArea.value = textoParaFormatar.toLowerCase();
}

const converterParaAlternado = () => {
    let textoParaFormatar = inputTextArea.value;
    let arrayDePalavrasDoTexto = textoParaFormatar.split(' ');
    let arrayDeNovasPalavras = [];

    inputTextArea.value = '';
    for (let i = 0; i < arrayDePalavrasDoTexto.length; i++) {
        let palavraOriginal = arrayDePalavrasDoTexto[i];
        let palavraFinal = '';
        for (let j = 0; j < palavraOriginal.length; j++) {
            if ((palavraOriginal.length - j) % 2 == 0) {
                palavraFinal += palavraOriginal[j].toUpperCase();
            } else {
                palavraFinal += palavraOriginal[j].toLowerCase();
            }
        }
        arrayDeNovasPalavras.push(palavraFinal);
    }
    inputTextArea.value = arrayDeNovasPalavras.join(' ');
}