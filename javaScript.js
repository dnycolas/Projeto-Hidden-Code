// fazer menu de hamburger(header)
let menu = document.getElementById("menu")
let iconeBarra = document.getElementById("iconeBarra" [0]) 
let iconeX = document.getElementById("iconeX" [1])

let eventos = [
    iconeBarra,
    iconeX,
]

let contator = 0

let hamburger = eventos.length

let botao = document.querySelector(".bitao")

botao.classList.add(eventos[botaoFechadoAberto])

const abrirFecharMenu = () => {
    botao.classList.remove(eventos[contator])

    if( eventos < (hamburger - 1)){
        contator++
    } else {
        contator = 0
    }


    botao.classList.add(eventos[contator])
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
    oncinha.innerHTML = '<p>Reduzimos o desperdício de comida em uma escola em </p>';
  }

  button.addEventListener(mudarOncinha);
        
    // adicionar evento no butao
    
    
            

        
        




    // 3. colocar essa função ao botão


// implementar sistemas API nos input (contate-nos)
// implementar sistema API nos input (feedback)  
