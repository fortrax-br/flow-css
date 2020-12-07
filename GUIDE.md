# Guiá de classes do framework

Aqui será listadas todas as classes que o framework possui juntamente com sua finalidade, e cada class será dividida de acordo
com o seu tipo.

## Botões

Classes      | Função 
-------------|-----------
.btn         | A classe .btn é responsavél por aplicar os estilos padrões de um botão, ela apenas formata o elemento sem aplicar cores ou bordar.
.btn-link    | A classe .btn-link é responsavél por aplicar os estilos de formatação padrão de botões em elementos com a tag "a" do HTML, logo toda vez que o usúario quiser criar um link com aparência de um botão ele deve utilizar esta classe, ela assim como a classe .btn não aplicar cores, borda e etc, apenas a formatação padrão.    
.btn-block   | A classe .btn-block ela é utilizada nos botões para aplicar um display:block no botão.
.btn-sm      | Esta classe faz com quer, o botão que a utlize fique com 30px de altura e 16px de font-size, essas medidas são as padrões da class .btn e .btn-link.
.btn-md      | Esta classe faz com quer, o botão que a utlize fique com 40px de altura e 16px de font-size.
.btn-lg      | Esta classe faz com quer, o botão que a utlize fique com 50px de altura e 16px de font-size.
.btn-xl      | Esta classe faz com quer, o botão que a utlize fique com 60px de altura e 18px de font-size.
.flat-btn-*  | Esta classe é utilizada para aplicar um estilo para o botão, ela é composta com .flat-btn-(alguma-cor), por exemplo para aplicar um background azul ao botão com esta classe, você poderia fazer flat-btn-blue-1, onde blue-1 determina a tonalidade do tom de azul que você pode utilizar, para mais flags de cores, consulte nosso esquema de cores, tenha em mente que todas começam com o nome da cor seguido de um traço e o nivél de sua tonalidade.
.ghost-btn-* | Esta classe é um outro estilo de botão, onde o (* asterisco) representa uma cor da nossa paleta padrão. assim como a classe .flat-btn-*, poŕem o estilo é diferente.

__OBS__ Os botões que não utilizam nenhuma classe que modifique o tamanho padrão dele, passa a receber
40px de altura e 16px de font-size assim que a tela do usúario tiver no minimo uma largura de 740px, essa regrinha
é para garantir uma melhor experiência do usúario, mas caso seu botão utilize alguma classe que modifique seu tamanho
para grande ou pequeno, idenpendente da largura da tela, ele ficara com a medida especificada.

## Typográfia

Classes      | Função
-------------|------------
.h1 até .h6  | Esta classe aplica o mesmo estilo dos headings HTML em outros elementos textuais, por exemplo na tag P.
.expand-1 até expand-6 | Esta classe aumenta o tamanho da fonte ao extremo, desde o 80px até 55px de font-size.
.text | A classe .text deve ser utilizada para estilizar seus paragráfos, textos, frases, algo do tipo.
.text-left | A classe .text-left alinha seu texto, titulo ou algo do tipo, ao lado esquerdo da posição que ele se encontra.
.text-right | Esta classe alinha o elemento textual ao lado esquerdo da sua posição.
.text-center | Esta classe alinha o seu elemento textual ao centro da sua posição.
.text-justify | Esta classe justifica o item em relção a sua posição.
.bold-* | A classe bold-*  aplica um negrito ao elemento textual que ele é aplicado, o (* asterisco) representa um valor que pode ser um dos seguintes valores (300, 400, 500, 600, 700, 800, 900) 
.italic | Esta classe aplica um estilo itálico ao elemento textual que a utiliza _itálico_.
.text-underline | Esta classe aplica um underline no elemento.

## Utilitários

Classes      | Função
-------------|----------
.d-block     | Esta classe aplica um ``display: block;`` no elemento que a utiliza.
.d-inline    | Esta classe aplica um ``display: inline;`` no elemento que a utiliza.
.d-inline-block | Aplica um ``display: inline-block;`` no elemento que a utiliza.
.d-none | Aplica um ``display: none;`` ao elemento que a utiliza.
.d-table | Esta classe aplica um ``display: table;`` ao elemento.
.color-* | Esta classe serve para aplicar cor em elementos textuais, onde o (* asterisco) representa uma cor da nossa paleta.
.bg-* | Esta classe aplica background-color em elementos distintos, onde o (* asterisco) representa uma cor da nossa paleta de cores padrão.
.radius-* | Esta classe aplica um border-radius ao elememento que a utilize, o (* asterisco) representa uma medida que varia de 1 até 10, tendo tambem os valores 50 e 100 onde 50 representa 50% e 100 representa 100%.
.br-color-* | Esta classe define a cor da bordar do elemento caso ele tenha borda, o (* asterisco) representa uma cor da nossa paleta padrão.
.br-dotted-* | Define uma borda pontilhada, o (* asterisco) representa um valor entre 1 e 10, para indicar a largura da borda.
.br-dashed-* | Define uma borda tracejada  o (* asterisco) representa um valor entre 1 e 10, para indicar a largura da borda.
.br-solid-* | Define uma borda sólida  o (* asterisco) representa um valor entre 1 e 10, para indicar a largura da borda.
.br-double-* | Define uma borda dupla  o (* asterisco) representa um valor entre 1 e 10, para indicar a largura da borda.
.br-groove-* | Define uma borda com sulcos 3D. O efeito depende do valor da cor da borda, o (* asterisco) representa um valor entre 1 e 10, para indicar a largura da borda.
.br-ridge-* | Define uma borda 3D estriada. O efeito depende do valor da cor da borda, o (* asterisco) representa um valor entre 1 e 10, para indicar a largura da borda.
.br-inset-* | Define uma borda de inserção 3D. O efeito depende do valor da cor da borda,  o (* asterisco) representa um valor entre 1 e 10, para indicar a largura da borda.
.br-outset-* | Define uma borda de início 3D. O efeito depende do valor da cor da borda,  o (* asterisco) representa um valor entre 1 e 10, para indicar a largura da borda.

### Utilitários flexbox 

Classes       | Função
--------------|------------
.flex   | Esta classe define ao elemento que a utiliza um display flex, ( todas as classes abaixo, só funcionaram se o elemento que forem utilizalas tiverem a classe flex, ou serem filhos de um elemento com a classe flex).
.flex-row | Esta classe definie que os filhos do elementos flex que a utilize, devem ficar alinhados em uma unica linha, este é o valor padrão~do display flex.
.flex-row-reverse | Define que os filhos de um elemento flex, deve ficar em uma unica linha, pórem na posição reversa.
.flex-column | Esta classe define que os filhos de um elemento flex, deve ficar alinhados em colunas.
.flex-column-reverse | Funciona como a classe acima, poŕem os items ficam na posição reversa.
.flex-wrap | Define que os filhos de um elemento flex, deve quebrar de linha caso fiquem maior que o container do elemento flex.
.flex-wrap-reverse | Funciona como a classe acima, pórem os items que quebram de linham ficam acima dos outros elementos, que não quebraram de linha.
.flex-nowrap | Define que em hipotese alguma os filhos de um elemento flex, devem quebrar de linha, este é o valor padrão do display flex.
.flex-flow-row-wrap | Coloca os filhos do elemento flex, em linha e não permite a quebra de linha.
.flex-flow-row-nowrap | Coloca os filhos do elemento flex, em linha e permite a quebra de linha.
.flex-flow-column | Coloca os filhos do elemento flex, em coluna e não permite a quebra de linha.
.justify-ct-start | Alinha os itens ao início do container.
.justify-ct-end | Alinha os itens ao final do container.
.justify-ct-between | Cria um espaçamento igual entre os elementos. ou seja cada um no seu quadrado.
.justify-ct-around | Cria um espaçamento entre os elementos. Os espaçamentos do meio são duas vezes maiores que o inicial e final.
.justify-ct-center | Alinha os itens ao centro do container.
.justify-ct-evenly | Cria um espaçamento entre os elementos, o espaço é igual tanto entre os elementos, quanto no final e no inicio do container.

__OBS__ A expressão _elemento flex_ é conhecida também como _container flex_, que nada mais é que 
uma div por exemplo, que tem seu display como flex, ``display: flex``, que no nosso framework, seria utlizando a classe
``.flex``.

__OBS__ as classes justify-ct-*, que no css seriam ``justify-content: *;``, 
alinha os itens flex no container de acordo com a a direção especificada. A propriedade só funciona se os itens atuais não ocuparem todo o elemento flex ou seja
não ocupar todo o elemento pai, que contém a classe ``.flex``.

### Utilitários responsivos

Classes       | Função
--------------|------------
.d-sm-* | O elemento que utiliza esta classe, aplica um tipo de display sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.d-md-* | O elemento que utiliza esta classe, aplica um tipo de display sempre que a largura da tela do usúario tiver no minimo 740px de largura.
.d-lg-* | O elemento que utiliza esta classe, aplica um tipo de display sempre que a largura da tela do usúario tiver no minimo 980px de largura.
.d-xl-* | O elemento que utiliza esta classe, aplica um tipo de display sempre que a largura da tela do usúario tiver no minimo 1200px de largura.
.d-xxl-* | O elemento que utiliza esta classe, aplica um tipo de display sempre que a largura da tela do usúario tiver no minimo 1400px de largura.
.justify-ct-sm-* | O elemento que utiliza esta classe, aplica um tipo de justify-content sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.justify-ct-sm-* | O elemento que utiliza esta classe, aplica um tipo de justify-content sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.justify-ct-sm-* | O elemento que utiliza esta classe, aplica um tipo de justify-content sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.justify-ct-sm-* | O elemento que utiliza esta classe, aplica um tipo de justify-content sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.justify-ct-sm-* | O elemento que utiliza esta classe, aplica um tipo de justify-content sempre que a largura da tela do usúario tiver no minimo 440px de largura.

