class Elementos_da_checkbox{
     constructor(id,texto){
         this.id = id
         this.texto = texto
     }
      get_id() {
             return this.id;
     }
     get_texto(){
             return this.texto
     }
}


let contador_do_hobbie  = 0;
let contador_de_profissao = 0;


const elementos_de_hobbies = []

function remove_elementos_iguals(elementos,elementos_a_serem_removidos){

    for(let i = 0; i< elementos.length; i++){
        const valor = elementos_a_serem_removidos.indexOf(elementos[i])
       
              if(valor != -1){
                 elementos_a_serem_removidos.splice(valor,1)
              }
    }
   
    return elementos_a_serem_removidos
}

function elimina_elemento(div_mae,elemento_a_ser_eliminado,decremento){


    switch (decremento) {
        case 1:
                    --contador_do_hobbie

                    if(contador_do_hobbie == 0){
                        const botao = document.getElementById("botao_de_hobbies")
                              botao.textContent = "Adicionar Hobbie"
                    }
        break;

        case 2:
                --contador_de_profissao

                if(contador_de_profissao == 0){
                    const botao = document.getElementById("botao_de_profissao")
                          botao.textContent = "Adicionar Profissao"
                }
        break;      
    }

    try{
        div_mae.removeChild(elemento_a_ser_eliminado)
    }catch{}  
}

function recria_div(div_mae,id_da_div_a_ser_recriada){

         const div_antiga = document.getElementById(id_da_div_a_ser_recriada)
      
          elimina_elemento(div_mae,div_antiga)

        
         const div_nova = document.createElement("div")
               div_nova.setAttribute("id",id_da_div_a_ser_recriada)

         div_mae.appendChild(div_nova)
         return div_nova
}

function cria_botao(div,id,classe,texto,funcao_de_onclick){

         const botao = document.createElement("h5")
               botao.setAttribute("id",id)
               botao.setAttribute("class",classe)
               botao.setAttribute("onclick",funcao_de_onclick)

               botao.textContent = texto
          div.appendChild(botao)  
          return botao   
}

function cria_checklist(div,id,textos){
     const select = document.createElement("select")
          select.setAttribute("id",id)

     let opcoes = []
     for(let i = 0; i < textos.length; i++){
       opcoes[i] = document.createElement("option") 
       opcoes[i].textContent = textos[i]
       select.add(opcoes[i])
     }
     
     div.appendChild(select)
     return select;
}

function move_botao_para_baixo(div,botao){
       div.removeChild(botao)
       div.appendChild(botao)
}

function cria_pergunta(div,texto){
    const pergunta = document.createElement("h3");
    pergunta.textContent = texto
    div.appendChild(pergunta)
}

function cria_entrada(div,id){
    const entrada = document.createElement("input")
    entrada.setAttribute("class","entrada")
     entrada.setAttribute("id",id)
    div.appendChild(entrada)
    return entrada;
}

function cria_checkbox(div_mae,elementos_da_checkbox){
    const checkbox = []
    const label = []
    const div_filha = document.createElement("div")
    div_filha.setAttribute("class","checkbox")
    div_mae.appendChild(div_filha)

    for(let i = 0; i < elementos_da_checkbox.length; i++){
        checkbox[i] = document.createElement("input")
        label[i] =  document.createElement("label")
        const quebra_de_linha = document.createElement("br")

        checkbox[i].setAttribute("type","checkbox")
        checkbox[i].setAttribute("id",elementos_da_checkbox[i].get_id())
        
        label[i].setAttribute("for", elementos_da_checkbox[i].get_id())
        label[i].textContent = elementos_da_checkbox[i].get_texto()
  

        div_filha.appendChild(checkbox[i])
        div_filha.appendChild(label[i])
        div_filha.appendChild(quebra_de_linha)
    }



   
}

function cria_propriedas_de_futebol(div){

    cria_pergunta(div,"Qual time você torce ?");
    cria_entrada(div,"time")
    cria_pergunta(div, "O quão fanático pelo seu time você é ?")
 
    const taxa_de_gosto = []
    taxa_de_gosto.push("um pouco, não sou muito fan de futebol")
    taxa_de_gosto.push("mais ou menos, acompanho os jogos")
    taxa_de_gosto.push("bastante, vou ao estádio direto")
    
    cria_checklist(div,"futebol_taxa_de_gosto",taxa_de_gosto)
}

function cria_propriedas_de_cinema(div){

    cria_pergunta(div, "Que tipo de filmes você gosta ?")

    const elementos_da_checkbox = []

    elementos_da_checkbox.push(new Elementos_da_checkbox("comedia","Comedia"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("romance","Romance"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("ficao","Fição Científica"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("acao","Ação"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("aventura","aventura"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("documentaris","Documentarios"))

    cria_checkbox(div,elementos_da_checkbox)

    cria_pergunta(div, "O quanto você gosta de Cinema ?")

    const taxa_de_gosto = []

    taxa_de_gosto.push("Um pouco, quem não curte um netflix")
    taxa_de_gosto.push("mais ou menos, assisto alguns filmes")
    taxa_de_gosto.push("Muito, Vivo no cinema todas as quartas feiras")

    cria_checklist(div,"cinema_taxa_de_gosto",taxa_de_gosto)
}

function cria_propriedas_de_videogame(div){
   
    cria_pergunta(div, "Que tipo de  jogos você gosta")
    const elementos_da_checkbox = []
    elementos_da_checkbox.push(new Elementos_da_checkbox("rpg","RPG"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("fps","FPS"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("corrida","Corrida"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("jogos_de_acao","Ação"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("jogos_de_aventura","aventura"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("sand_box","Sandbox"))
    cria_checkbox(div,elementos_da_checkbox)

    cria_pergunta(div, "O quanto você gosta de jogar video game ?")

    const taxa_de_gosto = []
    taxa_de_gosto.push("Um pouco, curto um joguinho as vezes")
    taxa_de_gosto.push("Mais ou menos, sou casual curto jogar")
    taxa_de_gosto.push("Muito,Só não virei pró ainda por falta de habilidade")
    cria_checklist(div,"video_game_taxa_de_gosto",taxa_de_gosto)

}

function cria_propriedades_de_musica(div){
   
    cria_pergunta(div, "Que tipo de  músicas você gosta")
    const elementos_da_checkbox = []
          elementos_da_checkbox.push(new Elementos_da_checkbox("rock","Rock"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("samba","Samba"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("pagode","Pagode"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("funk","Funk"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("rap","Rap"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("eletronica","Eletrônica"))

    cria_checkbox(div,elementos_da_checkbox)

    cria_pergunta(div, "O quanto você gosta de escutar música")

    const taxa_de_gosto = []
        taxa_de_gosto.push("Um pouco,mais quando to sem nada pra fazer")
        taxa_de_gosto.push("Mais ou menos, tenho uma assinatura do spotfy")
        taxa_de_gosto.push("Muito, Vivo em shows")

    cria_checklist(div,"musica_taxa_de_gosto",taxa_de_gosto)

}
function cria_propriedades_de_carro(div){
    cria_pergunta(div, "Que tipo de  carro você gosta ?")
    const elementos_da_checkbox = []
          elementos_da_checkbox.push(new Elementos_da_checkbox("esportivos","Esportivos"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("classicos","Clássicos"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("corrida","Corrida"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("jeeps","Jeeps"))

    cria_checkbox(div,elementos_da_checkbox)

    cria_pergunta(div, "O quanto você gosta de Carros ?")

    const taxa_de_gosto = []
        taxa_de_gosto.push("Um pouco,afinal ninguém gosta de andar de Ônibos")
        taxa_de_gosto.push("Mais ou menos, mas gosto de da uma acelerada")
        taxa_de_gosto.push("Muito, Vivo em track day")

    cria_checklist(div,"carros_taxa_de_gosto",taxa_de_gosto)

}
function cria_propriedade_de_outros(div){
    cria_pergunta(div, "Qual o Hobbie que você gosta ?")
    
    cria_entrada(div,"outros" + contador_do_hobbie)
    cria_pergunta(div, "O quanto você gosta desse hobbie?")

    const taxa_de_gosto = []
        taxa_de_gosto.push("Um pouco")
        taxa_de_gosto.push("Mais ou menos")
        taxa_de_gosto.push("Muito")

    cria_checklist(div,"outros_taxa_de_gosto" + contador_do_hobbie ,taxa_de_gosto)

}

function trata_hobbies(hobbie_vigente){
  
    const div   = document.getElementById("hobbie" + hobbie_vigente)

    const elementos_do_hobbie = recria_div(div,"elementos_do_hobbie" + hobbie_vigente)
   
    const selecao = document.getElementById("select" + hobbie_vigente).selectedOptions[0].textContent
    
    if(selecao !== "Outros"){
        elementos_de_hobbies.push(selecao)

    }

    switch (selecao){
         case "Futebol": 
                         cria_propriedas_de_futebol(elementos_do_hobbie)
                         break;
         case "Cinema": 
                         cria_propriedas_de_cinema(elementos_do_hobbie)
                         break;
        case "Videogame": 
                         cria_propriedas_de_videogame(elementos_do_hobbie)
                         break;
        case   "Música": 
                         cria_propriedades_de_musica(elementos_do_hobbie)
                         break;
        case   "Carros": 
                         cria_propriedades_de_carro(elementos_do_hobbie)
                         break;
        case   "Outros": 
                         cria_propriedade_de_outros(elementos_do_hobbie)
                         break;
    }
    const botao = document.getElementById("botao_elemina_hobbie" + hobbie_vigente)

    move_botao_para_baixo(div,botao)
}

function adiciona_robbie() {
      
    ++contador_do_hobbie

    if(contador_do_hobbie > 0){
        const botao = document.getElementById("botao_de_hobbies")
              botao.textContent = "Adicionar outro Hobbie"
    }
     const div = document.getElementById("hobbies")
    
     const hobbie = document.createElement("div")
     
     hobbie.setAttribute("id", "hobbie" + contador_do_hobbie)
     
     div.appendChild(hobbie)
     
     
     cria_pergunta(hobbie,"Selecione um hobbie")
     
     
     const tipos_de_hobbies = remove_elementos_iguals(elementos_de_hobbies,["","Cinema","Música","Futebol","Videogame","Carros","Outros"])
      
  
     const select = cria_checklist(hobbie,"select" + contador_do_hobbie,tipos_de_hobbies)
     
     select.setAttribute("onchange","trata_hobbies("+ contador_do_hobbie + ")")
       
     const quebra_de_linha = document.createElement("br")
     hobbie.appendChild(quebra_de_linha)
      
     const funcao_do_botao = "elimina_elemento(hobbies,"   + "hobbie" + contador_do_hobbie + "," + '1'+ ")"

     cria_botao(hobbie,("botao_elemina_hobbie"+ contador_do_hobbie),"botao_elimina","Remover Hobbie", funcao_do_botao)
      
     
     
    

   

     
}

function adiciona_profissao(){

    ++contador_de_profissao

    if(contador_de_profissao > 0){
        const botao = document.getElementById("botao_de_profissao")
              botao.textContent = "Adicionar outra Profissão"
    }
    const div = document.getElementById("profissao")

    const profissao = document.createElement("div")
     
    profissao.setAttribute("id", "profissao" + contador_de_profissao)
    
    div.appendChild(profissao)

    cria_pergunta(profissao,"Qual Sua Profissao ?")
    cria_entrada(profissao,"nome_da_profissao" + contador_de_profissao)
     
    const funcao_do_botao = "elimina_elemento(profissao,"   + "profissao" + contador_de_profissao + ",2" + ")"
    
    const quebra_de_linha = document.createElement("br")
     profissao.appendChild(quebra_de_linha)

    cria_botao(profissao,("botao_elemina_profissao"+ contador_de_profissao),"botao_elimina","Remover Profissão", funcao_do_botao)
   

}


function adiciona_idade(){
    
    if(document.getElementById("div_de_idade") != null ){
        return
    }
   
    
    const div = document.getElementById("idade")
     
    const idade = document.createElement("div")
     

    idade.setAttribute("id", "div_de_idade")

    div.appendChild(idade)

    cria_pergunta(idade,"Qual a Sua Idade ?")

   const entrada  = cria_entrada(idade,"valor_da_idade")
         entrada.setAttribute("class","numero")
         entrada.setAttribute("type","number")

    const botao = cria_botao(idade,"","botao_elimina","Remover Idade","elimina_elemento(idade,div_de_idade)")
    
    botao.setAttribute("class","botao_elimina_de_numero")
}


function adiciona_religiao(){

    if(document.getElementById("div_de_religiao") != null ){
        return
    }
  
    const div = document.getElementById("religiao")

    const religiao = document.createElement("div")
     
    religiao.setAttribute("id", "div_de_religiao")
    
    div.appendChild(religiao)

    cria_pergunta(religiao,"Qual Sua Religiao ?")
    cria_entrada(religiao,"nome_da_religiao")
     
    const funcao_do_botao = "elimina_elemento(religiao,div_de_religiao)"
    
    const quebra_de_linha = document.createElement("br")
     religiao.appendChild(quebra_de_linha)
     
     cria_pergunta(religiao,"Você é Praticante ?")
     cria_checklist(religiao,"praticante_ou_nao",["Deixar em branco","Praticante", "Não praticante"])
    
 
    cria_botao(religiao,"botao_elemina_religiao","botao_elimina","Remover Religiao", funcao_do_botao)
  
}
