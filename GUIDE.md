# Guiá de classes do framework

Aqui será listadas todas as classes que o framework possui juntamente com sua finalidade, e cada class será dividida de acordo
com o seu tipo.

## Botões

Classes    | Função 
-----------|-----------
.btn       | A classe .btn é responsavél por aplicar os estilos padrões de um botão, ela apenas formata o elemento sem aplicar cores ou bordar.
.btn-link  | A classe .btn-link é responsavél por aplicar os estilos de formatação padrão de botões em elementos com a tag "a" do HTML, logo toda vez que o usúario quiser criar um link com aparência de um botão ele deve utilizar esta classe, ela assim como a classe .btn não aplicar cores, borda e etc, apenas a formatação padrão.    
.btn-block | A classe .btn-block ela é utilizada nos botões para aplicar um display:block no botão.
.btn-sm    | Esta classe faz com quer, o botão que a utlize fique com um 30px de altura e 16px de font-size, essas medidas são as padrões da class .btn e .btn-link.
.btn-md    | Esta classe faz com quer, o botão que a utlize fique com um 40px de altura e 16px de font-size.
.btn-lg    | Esta classe faz com quer, o botão que a utlize fique com um 50px de altura e 16px de font-size.
.btn-ex-lg | Esta classe faz com quer, o botão que a utlize fique com um 60px de altura e 18px de font-size.
.flat-btn-* | Esta classe é utilizada para aplicar um estilo para o botão, ela é composta com .flat-btn-(alguma-cor), por exemplo para aplicar um background azul ao botão com esta classe, você poderia fazer flat-btn-blue-1, onde blue-1 determina a tonalidade do tom de azul que você pode utilizar, para mais flags de cores, consulte nosso esquema de cores, tenha em mente que todas começam com o nome da cor seguido de um traço e o nivél de sua tonalidade.
.ghost-btn-* | Esta classe é um outro estilo de botão, onde o (* asterisco) representa uma cor da nossa paleta padrão. assim como a classe .flat-btn-*, poŕem o estilo é diferente.

