// link Data base
URL = 'https://storage-epets.herokuapp.com/empresa';

//Get Empresa
const petShopList = document.getElementById('petShopList');
const form  = document.getElementById('form');
const search = document.getElementById('search');

fetch(URL)
    .then(res => res.json())
    .then(empresa => {
        let petShopData = "";
        for(let i = 0; i < empresa.length; i++){
            petShopData += `
                <div class="row produtos col-12 col-md-6 col-lg-3">
                    <img src="${empresa[i].img}" alt="produtos">
                    <div class="infor_loja">
                        <p>${empresa[i].nome}</p>
                        <span>CEP: ${empresa[i].cep} - ${empresa[i].rua}, ${empresa[i].num} - ${empresa[i].complemento} - ${empresa[i].bairro}, ${empresa[i].cidade} - ${empresa[i].uf}</span>
                    </div>
                </div>
            `;
            petShopList.innerHTML = petShopData;
        }
    })

function buscaCEP(cep) {

    var cep = cep.slice(0, 2);
    console.log(cep);
    fetch(URL)
        .then(res => res.json())
        .then(empresa => {
            let petShopData = "";
            for (let i = 0; i < empresa.length; i++) {
                if (empresa[i].cep.startsWith(cep)) {
                    petShopData += `
                <div class="row produtos col-12 col-md-6 col-lg-3">
                    <img src="${empresa[i].img}" alt="produtos">
                    <div class="infor_loja">
                        <p>${empresa[i].nome}</p>
                        <span>CEP: ${empresa[i].cep} - ${empresa[i].rua}, ${empresa[i].num} - ${empresa[i].complemento} - ${empresa[i].bairro}, ${empresa[i].cidade} - ${empresa[i].uf}</span>
                    </div>
                </div>
            `;
                    petShopList.innerHTML = petShopData;
                }
            }
        })
}


//post PETshop
const cadastroEMP = document.getElementById('dados_emp');

function postLoja() {

    const empresa = JSON.stringify({
        id: 0,
        img: document.getElementById('img').value,
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        cep: document.getElementById('cep').value,
        rua: document.getElementById('rua').value,
        bairro: document.getElementById('bairro').value,
        cidade: document.getElementById('cidade').value,
        uf: document.getElementById('uf').value,
        num: document.getElementById('num').value,
        complemento: document.getElementById('complemento').value

    })

    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: empresa
    })
        .then(res => res.json())
        .then(() => location.reload);
}