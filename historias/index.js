const input = document.querySelector("input")
const  add = document.querySelector("#add")
const initButton = document.querySelector("#init")
const ul = document.createElement("ul")
add.addEventListener("click", nomes)
initButton.addEventListener("click",historia)

const nome = []
const historias = ["Nome pegou uma faca e matou Nome","Nome pode acabar saindo da casa","Nome bateu no apresentador e foi neutralizado pelo Nome" ]
function sortear(arr){
        return Math.floor(Math.random()*arr.length)
    }
function escrever(str){
    document.querySelector("span").innerText=" "
    const char = str.split(' ').reverse()
    let typer = setInterval(()=>{
      if (!char.length){ return clearInterval(typer);}
      
      let next = char.pop();
      next == "Nome"?next = nome[sortear(nome)]:next
    document.querySelector("span").innerText+=" "+next
    },100)
}

    
function nomes(){
    const li = document.createElement("li")
    if(input.value){
        li.innerHTML=input.value
        ul.appendChild(li)
        nome.push(input.value)
        input.value = ""
        if(document.querySelectorAll("li").length >3){
            initButton.style.display = "block"
        }
    }
    document.body.appendChild(ul)
    
}

function historia(){
    const history = historias[sortear(historias)]
    escrever(history)
}