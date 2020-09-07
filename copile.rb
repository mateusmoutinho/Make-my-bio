require 'fileutils'

Codigo = "coffee -c " 

Pasta= "engine/"



Arquivo_coffee = "principal.coffee" 
Arquivo_js    = "principal.js"



system(Codigo + Pasta +  Arquivo_coffee) 
