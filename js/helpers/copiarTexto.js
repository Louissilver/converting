const copiarTexto = () => {
    document.querySelector("#texto").select();
    document.execCommand('copy');
}