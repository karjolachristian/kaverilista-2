function lisaaNimi() {
    let nimi = document.getElementById('nimi').value;
    if (nimi.trim() !== '') {
        let listaElementti = document.createElement('li');
        listaElementti.appendChild(document.createTextNode(nimi));
        nimilista.appendChild(listaElementti);
        document.getElementById('nimi').value = '';
       }
}

function poistaKaveri() {
    let lista = document.getElementById("nimilista");
    let viimeisinNimi = nimilista.lastElementChild;
    if (viimeisinNimi) {
        lista.removeChild(viimeisinNimi);
    } else {
        alert("Kaverilista on tyhjä!");
    }
}

function jarjestaKaverit() {
    let nimilista = document.getElementById("nimilista");
    let nimet = Array.from(nimilista.children);
    nimet.sort(function(a, b) {
        return a.textContent.localeCompare(b.textContent);
    });
    nimilista.innerHTML = '';
    nimet.forEach(function(nimi) {
        nimilista.appendChild(nimi);
    });
}
