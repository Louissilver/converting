function downloadTexto() {
    var textoDownload = document.querySelector("#texto").value;
    textoDownload = textoDownload.replace(/\n/g, "\r\n");
    var blob = new Blob([textoDownload], {
        type: "text/plain"
    });
    var linkDownload = document.createElement("a");
    linkDownload.download = "texto_formatado.txt";
    linkDownload.href = window.URL.createObjectURL(blob);
    linkDownload.target = "_blank";
    document.body.appendChild(linkDownload);
    linkDownload.click();
    document.body.removeChild(linkDownload);
}