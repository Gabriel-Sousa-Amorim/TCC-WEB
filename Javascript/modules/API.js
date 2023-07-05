
let url = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes-imediatas/350001/distritos'


let items = []

document.getElementById('Distritos-Input-Search').oninput = () => {
    document.getElementById('distritos-content').classList.remove('d-none');
    document.getElementById('distritos-content').innerHTML = "";
    items
        .filter((item) =>
            item.toLowerCase().includes(document.getElementById('Distritos-Input-Search').value.toLowerCase()))
            .forEach((item) => createDistrito(item))
}
document.getElementById('Distritos-Input-Search').onblur = () => {
    document.getElementById('distritos-content').classList.add('d-none');
}

function createDistrito(distrito) {
    const div = document.createElement('div')
    div.classList = 'p-3 border rounded my-2 '

    div.addEventListener('mouseover', function() {
        div.classList = 'p-3 border rounded my-2 bg-primary text-black shadow-primary '
        document.getElementById('Distritos-Input-Search').value = distrito
    })
    div.addEventListener('mouseout', function() {
        div.classList = 'p-3 border rounded my-2'
    })
    div.innerHTML = distrito
    document.getElementById('distritos-content').append(div)
}
let options = {
    method: 'GET'
}
fetch(url, options)
    .then(response => response.json())
    .then((distritos) => {
        distritos.forEach((distrito) => {
            createDistrito(distrito.nome)
            items.push(distrito.nome)
        });
    })



