
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

    elementos_de_hobbies.pop()
    switch (decremento) {
        case 1:
                    --contador.hobbie

                    if(contador.hobbie == 0){
                        const botao = document.getElementById("botao_de_hobbies")
                              botao.textContent = "Adicionar Hobbie"
                    }
        break;

        case 2:
                --contador.profissao

                if(contador.profissao == 0){
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
