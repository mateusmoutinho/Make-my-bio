
class Hobbie 

 define_taxa_de_gosto:->
   @valor = []
   
   @valor.push(@taxa_de_gosto.indexOf("Um"))
   @valor.push(@taxa_de_gosto.indexOf("Mais"))
   @valor.push(@taxa_de_gosto.indexOf("Muito"))
   @taxa_de_gosto = @valor.indexOf(0)
   
 captura_elementos_escolhidos:->
  @elementos_escolhidos= []
  x = @id.length; --x
  for i in [0..x]
   @elementos_escolhidos.push(@id[i]) if document.getElementById(@id[i]).checked 

class Cinema extends Hobbie
 constructor:(tipo)->
  @taxa_de_gosto =  document.getElementById("cinema_taxa_de_gosto").selectedOptions[0].textContent
  @id = ["comedia","romance","ficao","acao","aventura","documentarios"] 
  @.define_taxa_de_gosto()
  @.captura_elementos_escolhidos()
 
 converte_id_em_textos:->
  @elementos_convertidos =  @elementos_escolhidos.map((x) -> 
   console.log(x)
   x = x.replace("comedia","comédia")
   x = x.replace("ficao","ficção científica")
   x = x.replace("acao","ação")
   x = x.replace("documentarios","documentários")
  )

 defini_texto:->
  switch @taxa_de_gosto 
   when 0 then texto = "curto um pouco de filmes"
   when 1 then texto = "gosto de filmes"
   when 2 then texto = "sou apaixonado por cinema"
  
  
  unless @elementos_escolhidos == 0
   @.converte_id_em_textos()
   texto = texto + ", especialmente de " + gerar_texto_de_itens(@elementos_convertidos)+""
   
class Musica extends Hobbie
 constructor:->
  @taxa_de_gosto =  document.getElementById("musica_taxa_de_gosto").selectedOptions[0].textContent
  @id = ["rock","samba","pagode","funk","rap","eletronica"] 
  @.define_taxa_de_gosto()
  @.captura_elementos_escolhidos()

 converte_id_em_textos:->

  @elementos_convertidos =  @elementos_escolhidos.map((x) -> 
   x = x.replace("eletronica","eletrônica")
  )

 defini_texto:->
  switch @taxa_de_gosto 
   when 0 then texto = "curto um pouco de música"
   when 1 then texto = "gosto de música"
   when 2 then texto = "adoro música"
  
  
  unless @elementos_escolhidos == 0
   @.converte_id_em_textos()
   texto = texto + ", especialmente " + gerar_texto_de_itens(@elementos_convertidos)+""
   
class Videogame extends Hobbie
 constructor:->
  @taxa_de_gosto =  document.getElementById("video_game_taxa_de_gosto").selectedOptions[0].textContent
  @id = ["rpg","fps","corrida","jogos_de_acao","jogos_de_aventura","sand_box"] 
  @.define_taxa_de_gosto()
  @.captura_elementos_escolhidos()

 converte_id_em_textos:->
  @elementos_convertidos =  @elementos_escolhidos.map((x) -> 
   console.log(x)
   x = x.replace("jogos_de_acao","ação")
   x = x.replace("jogos_de_aventura","aventura")
   x = x.replace("sand_box","sandbox")
  )
 defini_texto:->
  switch @taxa_de_gosto 
   when 0 then texto = "curto um game de vez enquando principalmente jogos de "
   when 1 then texto = "gosto de videogame, especialmente games de "
   when 2 then texto = "gamer fanático por jogos de "
  
  
  unless @elementos_escolhidos == 0
   @.converte_id_em_textos()
   texto = texto  + gerar_texto_de_itens(@elementos_convertidos)+""
   
class Carros extends Hobbie
 constructor:->
  @taxa_de_gosto =  document.getElementById("carros_taxa_de_gosto").selectedOptions[0].textContent
  @id = ["esportivos","classicos","corrida","jeeps"] 
  @.define_taxa_de_gosto()
  @.captura_elementos_escolhidos()



 converte_id_em_textos:->

  @elementos_convertidos =  @elementos_escolhidos.map((x) -> 
   x = x.replace("classicos","clássicos")

   )

 defini_texto:->
  switch @taxa_de_gosto 
   when 0 then texto = "curto  um pouco carros"
   when 1 then texto = "gosto de carros"
   when 2 then texto = "sou fanático por carros"
  
  
  unless @elementos_escolhidos == 0
   @.converte_id_em_textos()
   texto = texto + ", especialmente carros " + gerar_texto_de_itens(@elementos_convertidos)+""
     
class Futebol extends Hobbie
 constructor:->
  @taxa_de_gosto =  document.getElementById("futebol_taxa_de_gosto").selectedOptions[0].textContent
  @time          =   document.getElementById("time").value
  @.define_taxa_de_gosto()

 defini_texto:->
  switch @taxa_de_gosto 
   when 0 then texto = "não ligo muito, mas torço pro"
   when 1 then texto = "sou torcedor do "
   when 2 then texto = "sou fanático pelo "
  
  
  unless @elementos_escolhidos == 0
   texto = texto + @time

class Outros extends Hobbie
 constructor:->
  @taxa_de_gosto =   document.getElementById("outros_taxa_de_gosto" + contador.hobbie).selectedOptions[0].textContent
  @nome        =   document.getElementById("outros" + contador.hobbie).value
  @.define_taxa_de_gosto()


 defini_texto:->
  switch @taxa_de_gosto 
   when 0 then texto = "curto  um pouco "
   when 1 then texto = "gosto de  "
   when 2 then texto = "adoro "
  
  
  unless @elementos_escolhidos == 0
   texto = texto + @nome

   
captura_nome = -> 
 document.getElementById("nome").value;
 
capturar_idade =-> 
 idade = document.getElementById("valor_da_idade")
 idade.value unless idade == null 

captura_profissoes =(contador) ->
 profissoes =[]
 for i in [1..contador]
  profissao_atual = document.getElementById("nome_da_profissao" + i).value
  profissoes.push(profissao_atual)
 profissoes

captura_religiao = -> 
 religiao = document.getElementById("nome_da_religiao")
 selecao = document.getElementById("praticante_ou_nao")
 valor = []
 valor.push( religiao.value unless religiao == null)
 valor.push(selecao.selectedOptions[0].textContent unless selecao == null)
 valor

define_tipo_de_hobbie =(hobbie) ->
 switch hobbie 
  when   "Futebol"   then new Futebol 
  when   "Cinema"    then new Cinema
  when   "Videogame" then new Videogame
  when   "Música"    then new Musica
  when   "Carros"    then new Carros
  when   "Outros"    then new Outros


gerar_nome = (texto)->
 "Meu nome é " + texto + ""

gerar_idade = (idade) ->
 "tenho " + idade + " anos"

gerar_profissoes = (profissoes) ->
 "sou " +  gerar_texto_de_itens(profissoes)
  
gerar_religiao = (religiao) -> 
 unless religiao[1] == "Deixar em branco"
  texto = "com relação à religião sou " + religiao[0] + " " + religiao[1] + "" 
  
 else 
  texto = "com relação à religião sou "+ religiao[0]
 texto 

gerar_texto_de_itens = (vetor)->
 tamanho = vetor.length; --tamanho
 if tamanho == 0
  vetor[0]
 else 
  vetor_novo = vetor.slice()
  vetor_novo.pop()
  texto = vetor_novo.join(x = ", ")
  texto = texto + " e " + vetor[tamanho]  

gerar_texto = -> 
 nome = captura_nome() 
 idade = capturar_idade()
 profissoes = captura_profissoes(contador.profissao) unless contador.profissao == 0
 religiao = captura_religiao() 

 
 unless contador.hobbie == 0
  hobbies = []
  for i in [1..contador.hobbie] 
   escolha = document.getElementById("select" + i).selectedOptions[0].textContent
   hobbies.push(define_tipo_de_hobbie(escolha))
   
 
 itens = []
 itens.push(gerar_nome(nome)) unless nome == ""
 itens.push(gerar_idade(idade)) unless idade == undefined 
 itens.push(gerar_profissoes(profissoes)) unless profissoes == undefined
 itens.push(gerar_religiao(religiao)) unless religiao[0]  == undefined
 unless contador.hobbie == 0
  for i in [0..hobbies.length - 1] 
   itens.push(hobbies[i].defini_texto())
   



 texto = gerar_texto_de_itens(itens) unless itens.length == 0
 
 div = document.getElementById("final")
 div.setAttribute("style","visibility: visible")
 elemento = document.getElementById("texto_final")


 elemento.textContent = texto
  





botao = document.getElementById("botao_gerar_texto")

botao.addEventListener("click",gerar_texto)
