
const cria_propriedas_de_futebol = div =>{

    cria_pergunta(div,"Qual time você torce ?");
    cria_entrada(div,"time")
    cria_pergunta(div, "O quão fanático pelo seu time você é ?")
 
    const taxa_de_gosto = []
    taxa_de_gosto.push("Um pouco, não sou muito fan de futebol")
    taxa_de_gosto.push("Mais ou menos, acompanho os jogos")
    taxa_de_gosto.push("Muito, vou ao estádio direto")
    
    cria_checklist(div,"futebol_taxa_de_gosto",taxa_de_gosto)
}

const  cria_propriedas_de_cinema = div =>{

    cria_pergunta(div, "Que tipo de filmes você gosta ?")

    const elementos_da_checkbox = []

    elementos_da_checkbox.push(new Elementos_da_checkbox("comedia","Comédia"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("romance","Romance"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("ficao","Fição Científica"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("acao","Ação"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("aventura","aventura"))
    elementos_da_checkbox.push(new Elementos_da_checkbox("documentarios","Documentarios"))

    cria_checkbox(div,elementos_da_checkbox)

    cria_pergunta(div, "O quanto você gosta de Cinema ?")

    const taxa_de_gosto = []

    taxa_de_gosto.push("Um pouco, quem não curte um netflix")
    taxa_de_gosto.push("Mais ou menos, assisto alguns filmes")
    taxa_de_gosto.push("Muito, Vivo no cinema todas as quartas feiras")

    cria_checklist(div,"cinema_taxa_de_gosto",taxa_de_gosto)
}

const cria_propriedas_de_videogame = div =>{
   
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

const  cria_propriedades_de_musica =div =>{
   
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

const cria_propriedades_de_carro =div =>{
    cria_pergunta(div, "Que tipo de  carro você gosta ?")
    const elementos_da_checkbox = []
          elementos_da_checkbox.push(new Elementos_da_checkbox("esportivos","Esportivos"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("classicos","Clássicos"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("corrida","De Corrida"))
          elementos_da_checkbox.push(new Elementos_da_checkbox("jeeps","Jeeps"))

    cria_checkbox(div,elementos_da_checkbox)

    cria_pergunta(div, "O quanto você gosta de Carros ?")

    const taxa_de_gosto = []
        taxa_de_gosto.push("Um pouco,afinal ninguém gosta de andar de Ônibos")
        taxa_de_gosto.push("Mais ou menos, mas gosto de da uma acelerada")
        taxa_de_gosto.push("Muito, Vivo em track day")

    cria_checklist(div,"carros_taxa_de_gosto",taxa_de_gosto)

}

const cria_propriedade_de_outros =div=>{
    cria_pergunta(div, "Qual o Hobbie que você gosta ?")
    
    cria_entrada(div,"outros" + contador.hobbie)
    cria_pergunta(div, "O quanto você gosta desse hobbie?")

    const taxa_de_gosto = []
        taxa_de_gosto.push("Um pouco")
        taxa_de_gosto.push("Mais ou menos")
        taxa_de_gosto.push("Muito")

    cria_checklist(div,"outros_taxa_de_gosto" + contador.hobbie ,taxa_de_gosto)

}


function retorna_tipo_de_hobbie(hobbie){
    switch (hobbie){
        case "Futebol": 
                        return 0
        case "Cinema": 
                        return 1
       case "Videogame": 
                        return 2
       case   "Música": 
                        return 3
       case   "Carros": 
                        return 4
       case   "Outros": 
                        return 5
   }
}

function trata_hobbies(hobbie_vigente){
  
    const div   = document.getElementById("hobbie" + hobbie_vigente)

    const elementos_do_hobbie = recria_div(div,"elementos_do_hobbie" + hobbie_vigente)
   
    const selecao = document.getElementById("select" + hobbie_vigente).selectedOptions[0].textContent
    
    if(selecao !== "Outros"){
        elementos_de_hobbies.push(selecao)

    }
     
    const funcoes = [ cria_propriedas_de_futebol,
                      cria_propriedas_de_cinema,
                      cria_propriedas_de_videogame,
                      cria_propriedades_de_musica,
                      cria_propriedades_de_carro,
                      cria_propriedade_de_outros
                     ]
    const numero_da_funcao = retorna_tipo_de_hobbie(selecao)
       funcoes[numero_da_funcao](elementos_do_hobbie)

    const botao = document.getElementById("botao_elemina_hobbie" + hobbie_vigente)

    move_botao_para_baixo(div,botao)
}

function adiciona_robbie() {
      
    ++contador.hobbie

    if(contador.hobbie > 0){
        const botao = document.getElementById("botao_de_hobbies")
              botao.textContent = "Adicionar outro Hobbie"
    }
     const div = document.getElementById("hobbies")
    
     const hobbie = document.createElement("div")
     
     hobbie.setAttribute("id", "hobbie" + contador.hobbie)
     
     div.appendChild(hobbie)
     
     cria_pergunta(hobbie,"Selecione um hobbie")
     
     
     const tipos_de_hobbies = remove_elementos_iguals(elementos_de_hobbies,["","Cinema","Música","Futebol","Videogame","Carros","Outros"])
      
  
     const select = cria_checklist(hobbie,"select" + contador.hobbie,tipos_de_hobbies)
     
     select.setAttribute("onchange","trata_hobbies("+ contador.hobbie + ")")
       
     const quebra_de_linha = document.createElement("br")
     hobbie.appendChild(quebra_de_linha)
      
     const funcao_do_botao = "elimina_elemento(hobbies,"   + "hobbie" + contador.hobbie + "," + '1'+ ")"

     cria_botao(hobbie,("botao_elemina_hobbie"+ contador.hobbie),"botao_elimina","Remover Hobbie", funcao_do_botao)
     
}