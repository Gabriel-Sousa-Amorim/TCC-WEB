//Botão Remover
document.getElementsByName('TypeForms').forEach(i => i.addEventListener('click', function () {
    document.getElementById('Form-Doador').classList.remove('d-none');
    document.getElementById('Form-Voluntario').classList.remove('d-none');
    if (i.value == 'Doador') {
        document.getElementById('Form-Voluntario').classList.add('d-none');
        document.getElementById('Form-Doador').classList.remove('d-none');
    }
    else if (i.value == 'Voluntário') {
        document.getElementById('Form-Doador').classList.add('d-none');
        document.getElementById('Form-Voluntario').classList.remove('d-none');
    }
    else {
        return false;
    }
}));

document.getElementById('Copy-Email-Btn').addEventListener('click', function () {
    let email = 'Ong.mangara@gmail.com'
    navigator.clipboard.writeText(email);
})

//Previne Colar informações nas tags input (Ctrl+V);
document.querySelectorAll("input").forEach(i =>
    i.addEventListener("drop", e => e.preventDefault())
)
document.querySelectorAll("input").forEach(i =>
    i.addEventListener("paste", e => e.preventDefault())
)

//Validador Nome;
const NameExp = new RegExp(/^[A-zÀ-ú ,.'-]+$/i)
function ValidaNome(x) {
    x.classList.remove("is-invalid");
    x.classList.remove("is-valid");
    if (NameExp.test(x.value) == true) {
        x.classList.add("is-valid");
        return true;
    } else {
        x.classList.add("is-invalid");
        return false;
    }
}
document.getElementById("Nome-Voluntario").addEventListener("blur", function () {
    ValidaNome(document.getElementById("Nome-Voluntario"))
})
document.getElementById("Nome-Doador").addEventListener("blur", function () {
    ValidaNome(document.getElementById("Nome-Doador"))
})

//Valida Idade (Não completo ainda)
function ValidaIdade(x) {
    x.classList.remove('is-valid')
    x.classList.remove('is-invalid')
    let dataNasc = new Date(x.value)
    let dataAtual = new Date()
    if (dataAtual.getFullYear() > dataNasc.getFullYear()
        && dataNasc.getFullYear() > (dataAtual.getFullYear() - 120)) {
        if (dataAtual.getFullYear() - dataNasc.getFullYear() < 18) {
            x.classList.add('is-invalid')
            return false;
        } else if (dataAtual.getFullYear() - dataNasc.getFullYear() == 18) {
            if (dataAtual.getMonth() == dataNasc.getMonth()) {
                if (dataAtual.getDate() > dataNasc.getDate()) {
                    x.classList.add('is-valid')
                    return true;
                } else {
                    x.classList.add('is-invalid')
                    return false;
                }
            } else if (dataAtual.getMonth() < dataNasc.getMonth()) {
                x.classList.add('is-invalid')
                return false;
            } else {
                x.classList.add('is-valid')
                return true;
            }
        } else {
            x.classList.add('is-valid')
            return true;
        };
    } else {
        x.classList.add('is-invalid')
        return false;
    }
}
document.getElementById("Data-Voluntário").addEventListener("focusout", function () {
    ValidaIdade(document.getElementById("Data-Voluntário"))
})
document.getElementById("Data-Doador").addEventListener("focusout", function () {
    ValidaIdade(document.getElementById("Data-Doador"))
})

//Valida CPF
    const CPFExp = new RegExp(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/i)
    function ValidaCPF(x) {
        x.classList.remove('is-invalid')
        x.classList.remove('is-valid')
        let CPF = x.value;
        let i = 0;
        let newCPF = 0;
        let ObjCPF = Object.values(CPF);
        let soma = 0;
        let v = 0;
        if (CPF.length == 11 && CPFExp.test(CPF) == true) {
            for (f = 10; f >= 2; f--) {
                ObjCPF[i] = parseInt(ObjCPF[i]) * f;
                i++;
                newCPF = ObjCPF.slice(0, 9);
            }
            soma = newCPF.reduce((accumulator, currentValue) => {
                return accumulator + currentValue;
            }, 0);
            v = (soma * 10) % 11;
            if (parseInt(v.toFixed(1)) == parseInt(CPF[CPF.length - 2])) {
                i = 0;
                newCPF = 0;
                ObjCPF = Object.values(CPF);
                soma = 0;
                v = 0;
                for (f = 11; f >= 2; f--) {
                    ObjCPF[i] = parseInt(ObjCPF[i]) * f;
                    i++;
                    newCPF = ObjCPF.slice(0, 10);
                }
                soma = newCPF.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue;
                }, 0);
                v = (soma * 10) % 11;
                if (parseInt(v) == parseInt(CPF[CPF.length - 1])) {
                    x.classList.add('is-valid')
                    return true
                } else {
                    x.classList.add('is-invalid')
                    return false
                }
            } else {
                x.classList.add('is-invalid')
                return false
            }
        } else {
            x.classList.add('is-invalid')
            return false
        }
    }
document.getElementById("CPFVoluntario").addEventListener("blur", function () {
    ValidaCPF(document.getElementById('CPFVoluntario'))
})
document.getElementById("CPF-Doador").addEventListener("blur", function () {
    ValidaCPF(document.getElementById('CPF-Doador'))
})

const TelefoneExp = new RegExp(/^\9{1}?(\d{4})?[ -]?(\d{4})$/);
function ValidaTelefone(x) {
    //Regex Expression própria, verifica se há o digito 9 no início e após isso verifica se há 4 digitos numéricos
    //se sim aceita a separação por hifén,espaço ou sem
    x.classList.remove('is-valid')
    x.classList.remove('is-invalid')
    if (TelefoneExp.test(x.value) == true) {
        x.classList.add('is-valid')
        return true;
    } else {

        x.classList.add('is-invalid')
        return false;
    }
}
document.getElementById("Telefone-Voluntario").addEventListener("blur", function () {
    ValidaTelefone(document.getElementById("Telefone-Voluntario"))
})
document.getElementById("Telefone-Doador").addEventListener("blur", function () {
    ValidaTelefone(document.getElementById("Telefone-Doador"))
})

//Valida Email;
const EmailExp = new RegExp(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i)
function ValidaEmail(x) {
    x.classList.remove("is-invalid");
    x.classList.remove("is-valid");
    if (EmailExp.test(x.value) == true) {
        x.classList.add("is-valid");
        return true;
    } else {
        x.classList.add("is-invalid");
        return false;
    }
}


document.getElementById("Email-Voluntario").addEventListener("blur", function () {

    ValidaEmail(document.getElementById("Email-Voluntario"))
})
document.getElementById("Email-Doador").addEventListener("blur", function () {
    ValidaEmail(document.getElementById("Email-Doador"))
})

//Valida Imagem
function ValidaImagem(x) {
    const ImageExp = new RegExp(/.*\.(jpe?g|png|)$/igm)
    x.classList.remove('is-valid')
    x.classList.remove('is-invalid')
    if (ImageExp.test(x.value) == true) {
        x.classList.add("is-valid");
        return true;
    } else {
        x.classList.add("is-invalid");
        return false;
    }
}

document.getElementById("Foto-Doador").addEventListener("change", function () {
    document.getElementById("Foto-Doador").classList.remove("is-invalid");
    document.getElementById("Foto-Doador").classList.remove("is-valid");
    ValidaImagem(document.getElementById("Foto-Doador"))
})

function ValidaLocal(Element) {
    Element.classList.remove('is-valid')
    Element.classList.remove('is-invalid')
    if (Element.value.length < 3) {
        Element.classList.add("is-invalid")
        return false
    } else {
        Element.classList.add("is-valid")
        return true
    }
}
document.getElementById('Distritos-Input-Search').addEventListener("blur", function () {
    ValidaLocal(document.getElementById('Distritos-Input-Search'))
})
function ValidaRegião(Element) {
    Element.classList.remove('is-valid')
    Element.classList.remove('is-invalid')
    if (Element.value == 'null') {
        Element.classList.add("is-invalid")
        return false
    } else {
        Element.classList.add("is-valid")
        return true
    }
}
document.getElementById('unidade-doador').addEventListener("change", function () {
    ValidaRegião(document.getElementById('unidade-doador'))
})

document.getElementById('Doador-Enable').addEventListener("change", function () {
    if (document.getElementById('Doador-Enable').checked == true) {
        document.getElementById("Submit-Doador").classList.remove('disabled')
    } else {
        document.getElementById("Submit-Doador").classList.add('disabled')
    }
})
document.getElementById('Voluntario-Enable').addEventListener("change", function () {
    if (document.getElementById('Voluntario-Enable').checked == true) {
        document.getElementById("Submit-Voluntário").classList.remove('disabled')
    } else {
        document.getElementById("Submit-Voluntário").classList.add('disabled')
    }
})

document.getElementById("Submit-Doador").addEventListener("click", function () {
    if (
        ValidaNome(document.getElementById("Nome-Doador")) == true &&
        ValidaIdade(document.getElementById("Data-Doador")) == true &&
        ValidaCPF(document.getElementById('CPF-Doador')) == true &&
        ValidaEmail(document.getElementById("Email-Doador")) == true &&
        ValidaImagem(document.getElementById("Foto-Doador")) == true &&
        ValidaTelefone(document.getElementById("Telefone-Doador")) == true &&
        ValidaLocal(document.getElementById('Distritos-Input-Search')) == true &&
        ValidaRegião(document.getElementById('unidade-doador')) == true
    ) {
        document.querySelector('main').classList.add('d-none')
        document.getElementById('Form-Doador').classList.add("d-none");
        document.getElementById('Submit-Section-Doador').classList.remove("d-none");
        document.getElementById('Span-nome').textContent = `${document.getElementById('Nome-Doador').value}`
    } else {
        ValidaNome(document.getElementById("Nome-Doador"))
        ValidaIdade(document.getElementById("Data-Doador"))
        ValidaCPF(document.getElementById('CPF-Doador'))
        ValidaImagem(document.getElementById("Foto-Doador"))
        ValidaEmail(document.getElementById("Email-Doador"))
        ValidaTelefone(document.getElementById("Telefone-Doador"))
        ValidaLocal(document.getElementById('Distritos-Input-Search'))
        ValidaRegião(document.getElementById('unidade-doador'))
    }
})

document.getElementById("Submit-Voluntário").addEventListener("click", function() {
    if (
        ValidaNome(document.getElementById("Nome-Voluntario")) == true &&
        ValidaIdade(document.getElementById("Data-Voluntário")) == true &&
        ValidaCPF(document.getElementById('CPFVoluntario')) == true &&
        ValidaEmail(document.getElementById("Email-Voluntario")) == true &&
        ValidaTelefone(document.getElementById("Telefone-Voluntario")) == true
    ) {
        document.getElementById('Span-nome-voluntário').textContent = `${document.getElementById("Nome-Voluntario").value}`
        document.querySelector('main').classList.add('d-none')
        document.getElementById('Form-Voluntário').classList.add("d-none");
        document.getElementById('Submit-Section-Voluntário').classList.remove("d-none");
    } else {
        ValidaNome(document.getElementById("Nome-Voluntario"))
        ValidaIdade(document.getElementById("Data-Voluntário"))
        ValidaCPF(document.getElementById('CPFVoluntario'))
        ValidaEmail(document.getElementById("Email-Voluntario"))
        ValidaTelefone(document.getElementById("Telefone-Voluntario"))
    }
})
