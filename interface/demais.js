



function adiciona_profissao(){

    ++contador.profissao

    if(contador.profissao > 0){
        const botao = document.getElementById("botao_de_profissao")
              botao.textContent = "Adicionar outra Profissão"
    }
    const div = document.getElementById("profissao")

    const profissao = document.createElement("div")
     
    profissao.setAttribute("id", "profissao" + contador.profissao)
    
    div.appendChild(profissao)

    cria_pergunta(profissao,"Qual Sua Profissao ?")
    cria_entrada(profissao,"nome_da_profissao" + contador.profissao)
     
    const funcao_do_botao = "elimina_elemento(profissao,"   + "profissao" + contador.profissao + ",2" + ")"
    
    const quebra_de_linha = document.createElement("br")
     profissao.appendChild(quebra_de_linha)

    cria_botao(profissao,("botao_elemina_profissao"+ contador.profissao),"botao_elimina","Remover Profissão", funcao_do_botao)
   

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
     cria_checklist(religiao,"praticante_ou_nao",["Deixar em branco","praticante", "não praticante"])
    
 
    cria_botao(religiao,"botao_elemina_religiao","botao_elimina","Remover Religiao", funcao_do_botao)
  
}
