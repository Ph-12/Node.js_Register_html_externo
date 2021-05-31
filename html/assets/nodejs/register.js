/*REGISTRO */ 
const RegistraNome = async() => {

let cpf = document.getElementById("cpf").value
let nome = document.getElementById("nome").value
let tipo = document.getElementById("browser").value
let localizacao = document.getElementById("localizacao").value
let senha = document.getElementById("senha").value
let status = document.querySelector('input[name="status"]:checked').value

fetch('http://localhost:8081/registro_U', {
  method: 'POST',
  mode: 'cors',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  body: JSON.stringify({
    "usuario": {
      "usuario_cpf": cpf,
      "usuario_nome": nome,
      "usuario_tipo": tipo,
      "usuario_localizacao": localizacao,
      "usuario_senha": senha,
      "usuario_status": status
    }
  }),
})
  .then(response => {
    console.log(response)
    document.location = 'sucess.html';
  })
  .catch(err => {
    console.log(err)
  })
}

