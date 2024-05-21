// fazer menu de hamburger(header)
    let bntUm = document.querySelector("#botaoUm")
    let bar = document.querySelector('#iconeBarra')
    let barX = document.querySelector('#iconeX')
    let menu = document.querySelector('#menu')
    let nav = document.querySelector('nav.menu')

    
    const abrirFecharMenu = () => {
        if(menu.classList.contains('menuFechado')){
            menu.classList.remove('menuFechado')
            bar.style.display = 'none'
            barX.style.display = "inline"
            nav.style.display = 'inline-flex'
        }
        else{
            menu.classList.add('menuFechado')
            barX.style.display = 'none'
            bar.style.display = 'inline'
            nav.style.display = 'none'

        }
    }


   




// fazer botão para selecionar os cases (cases)
    // 1. mudar o nome de alguns elementos para ficar mais facil de localizar
    // 2. fazer um programar que mude as imagens e os textos 


    // Eventos para os botoes
    

    
    // funcoes
  const button = document.getElementById("botao");
  const div = document.getElementById('oncinha');

  // definir a funcao que vai nos elementos
  function mudarOncinha() {
    div.innerHTML = '<p>Reduzimos o desperdício de comida em uma escola em </p>';
  }

//   button.addEventListener(mudarOncinha);

  button.addEventListener("click", mudarOncinha)
        
    // adicionar evento no butao
    
    
            

        
        




    // 3. colocar essa função ao botão















// implementar sistemas API nos input (contate-nos)

const solicitarOrcamento = (event) => {
    // Pegar valorez dos inputs
    let valorNome = document.getElementById("campo-nome").value
    let valorEmail = document.getElementById("campo-email").value
    let valorDescricao = document.getElementById("campo-descricao").value

    // Organizar objetos com os valores
    let dadosForm = {
        nome: valorNome,
        email: valorEmail,
        descricao: valorDescricao
    }

    // Enviar requisicao para api
    // 127.0.0.1 -> localhost
    // metodo HTTP POST - Create -> Cadastra post
    fetch("http://127.0.0.1:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosForm)
    })
    .then (resposta => {
        console.log(resposta)

        // limpar os campos (inputs)
        document.querySelector("#contato form").reset()

        // mostra alert como msg de sucesso
        alert("solicitação cadastrada")
    })

        // CASO ERRO - alert com msg erro
        .catch(erro => {
            console.error(erro)
            alert("Erro inusitado")
        })
    
    event.prevenDefault()
}


// implementar sistema API nos input (feedback)  


const solicitarFeedback = (evento) => {
    // Pegar valorez dos inputs
    let valorUsuario = document.getElementById("nome-usuario").value
    let emailUsuario = document.getElementById("email").value
    let textoUsuario = document.getElementById("campo-texto").value

    // Organizar objetos com os valores
    let dadosFormu = {
        usuario: valorUsuario,
        email: emailUsuario,
        texto: textoUsuario
    }

    // Enviar requisicao para api
    // 127.0.0.1 -> localhost
    // metodo HTTP POST - Create -> Cadastra post
    fetch("http://localhost:3000/solicitacoes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dadosFormu)
    })
    .then (reposte => {
        console.log(reposte)

        // limpar os campos (inputs)
        document.querySelector("#feedback form").reset()

        // mostra alert como msg de sucesso
        alert("solicitação cadastrada")
    })

        // CASO ERRO - alert com msg erro
        .catch(erro => {
            console.error(erro)
            alert("Erro inusitado")
        })
    
    evento.prevenDefault()
}