/////////////////////////
function TypeForms() {
    let radio = document.getElementsByName("TypeForms");
    console.log(radio)
}
TypeForms()

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
document.getElementById("Nome-Voluntario").addEventListener("blur", function() {
    ValidaNome(document.getElementById("Nome-Voluntario"))
})
document.getElementById("Nome-Doador").addEventListener("blur", function() {
    ValidaNome(document.getElementById("Nome-Doador"))
})

function ValidaçãoIdade(x) {
    x.classList.remove('is-valid')
    x.classList.remove('is-invalid')
    let dataNasc = new Date(x.value)
    let dataAtual = new Date()
    if (dataAtual.getFullYear() > dataNasc.getFullYear() 
    && dataNasc.getFullYear() > (dataAtual.getFullYear() - 120)) 
    {
        if (dataAtual.getFullYear() - dataNasc.getFullYear() < 18) 
        {
            x.classList.add('is-invalid')
            return false;
        } else if (dataAtual.getFullYear() - dataNasc.getFullYear() == 18) 
        {
            if(dataAtual.getMonth() == dataNasc.getMonth()) 
            {
                if (dataAtual.getDate() > dataNasc.getDate()) 
                {
                    x.classList.add('is-valid')
                    return true;
                } else {
                    x.classList.add('is-invalid')
                    return false;
                }
            } else if(dataAtual.getMonth() < dataNasc.getMonth()) {
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
document.getElementById("Data-Voluntário").addEventListener("blur", function() {
    ValidaçãoIdade(document.getElementById("Data-Voluntário"))
})
document.getElementById("Data-Doador").addEventListener("blur", function() {
    ValidaçãoIdade(document.getElementById("Data-Doador"))
})

//Validação CPF
const CPFExp = new RegExp(/^[a-z ,.'-]+$/i)
function ValidaCPF(x) {
    let CPF = document.getElementById(`${x}`).value;
    console.log(CPF.length)
    console.log(CPF)
    console.log(CPF)
    if (CPF.length == 11){
        let i =  0;
        let  newCPF =  0;
        let ObjCPF = Object.values(CPF);
        for (f = 10; f >= 2;f--) {
            ObjCPF[i] = parseInt(ObjCPF[i]) * f;
            console.log(ObjCPF);
            i++;
            newCPF = ObjCPF.slice(0,9);
        }
        var sum = newCPF.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        },0);
        console.log(sum)
        let j = sum / 11;
        console.log(parseFloat(j))
        console.log(parseInt(j))
        j = j - parseInt(j)
        j.toFixed(1);
    } else {
        console.log(false)
    }
}

const TelefoneExp = new RegExp(/^\9{1}?(\d{4})?[ -]?(\d{4})$/);
function ValidaTelefone(x) {
    //Regex Expression própria, verifica se há o digito 9 no início e após isso verifica se há 4 digitos numéricos 
    //se sim aceita a separação por hifén,espaço ou sem 
    x.classList.remove('is-valid')
    x.classList.remove('is-invalid')
    if (TelefoneExp.test(x.value) == true) {
        x.classList.add('is-valid')
        return true
    } else {

        x.classList.add('is-invalid')
        return false;
    }
}
document.getElementById("Telefone-Voluntario").addEventListener("blur", function() {
    ValidaTelefone(document.getElementById("Telefone-Voluntario"))
})
document.getElementById("Telefone-Doador").addEventListener("blur", function() {
    ValidaTelefone(document.getElementById("Telefone-Doador"))
})

//Validação Email;
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
//Previne Copiar ctrl+v;
document.querySelectorAll("input").forEach(i => 
    i.addEventListener("drop", e => e.preventDefault())
    )
document.querySelectorAll("input").forEach(i => 
    i.addEventListener("paste", e => e.preventDefault())
    )

document.getElementById("Email-Voluntario").addEventListener("blur", function() {
    
    ValidaEmail(document.getElementById("Email-Voluntario"))
})
document.getElementById("Email-Doador").addEventListener("blur", function() {
    ValidaEmail(document.getElementById("Email-Doador"))
})

//validação Imagem
const ImageExp = new RegExp(/.*\.(jpe?g|png|)$/igm)
function ValidaImagem(x) {
    x.classList.remove("is-invalid");
    x.classList.remove("is-valid");
    if (ImageExp.test(x.value) == true && x.value.length > 16) {
        x.classList.add("is-valid");
        return true;
    } else {
        x.classList.add("is-invalid");
        return false;
    }
}
document.getElementById("Foto-Doador").addEventListener("change", function() {
    ValidaImagem(document.getElementById("Foto-Doador"))
})