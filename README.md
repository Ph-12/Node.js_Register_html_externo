# Node.js_Register_html_externo
 registro de dados usando javascript para node.js guardado em postgreSQL

=================================================

Este projeto foi desenvolvido para o sistema COLETA DE LIXO, da iniciativa CODERS4FUTURE.

Nesse projeto a muitas modificaçoes da aula 27 do prof. Willys Campos.

- html esta 3 tipos de inputs text,datalist e radio
- adição de css
- modificaçoes no javascript para get ser obtido pelos novos tipos de input 'radio' usando querySelector no lugar do getElementById
- modificaçoes no require do node.js removendo o bodyparser, pra chamada express que ja o mesmo incorpora o bodyparser apartir da version 4.16


obs: o codigo html e css não esta mais limpo pois somente fiz modificaçoes em cima de um arquivo index da aula 25.

====================================

***** RODANDO NODE.js *****

Copie o arquivo sRegister.js para sua pasta node.js 
A conexao com o banco de dados postgreSQL esta vazio.
modifique os campos dentro do Pool aparti da linha 16
e ponha para rodar

-Requisitos de bibliotecas

*express
*bodyparser(não testado sem a sua instalação. Aparentemente não e mas nescessario aparti do express 4.16)
*cors
*pg


====================================

***** HTML *****

Após estar rodando o sRegister.js
basta abrir register.html dentro da pasta html, com qualquer navegador.


====================================

***** BANCO DE DADOS *****

Add o arquivo .SQL, na pasta SQLfile. Para a criação de tabelas no DB coletalixo.
São apenas criados tabelas o banco "coletalixo". O mesmo ja deve existir para o script funcionar corretamente.

obs: O banco de dados do coletalixo não permite dados vazies.
