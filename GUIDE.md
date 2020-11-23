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
.text-* | Esta classe utilitaria serve para aplicar cor em elementos textuais, onde o (* asterisco) representa uma cor da nossa paleta padrão.
.color-* | Esta classe serve para aplicar cor em elementos distintos, a diferenciação entre .text-* e .color-* é necessaria para meios de organização e nomeclatura de classe.
.bg-* | Esta classe alica background-color em elementos distintos, onde o (* asterisco) representa uma cor da nossa paleta de cores padrão.

### Utilitários responsivos

Classes       | Função
--------------|------------
.d-m-sm-block | O elemento que utiliza esta classe, passa a ter um ``display: block;``, sempre que a largura da tela do usúario tiver no máximo 440px de largura.
.d-m-sm-inline | O elemento que utiliza esta classe, passa a ter um ``display: inline;``, sempre que a largura da tela do usúario tiver no máximo 440px de largura.
.d-m-sm-inline-block | O elemento que utiliza esta classe, passa a ter um ``display: inline-block;``, sempre que a largura da tela do usúario tiver no máximo 440px de largura.
.d-m-sm-table | O elemento que utiliza esta classe, passa a ter um ``display: table;``, sempre que a largura da tela do usúario tiver no máximo 440px de largura.
.d-m-sm-none | O elemento que utiliza esta classe, passa a ter um ``display: none;``, sempre que a largura da tela do usúario tiver no máximo 440px de largura.
             |
.d-sm-block | O elemento que utiliza esta classe, passa a ter um ``display: block;``, sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.d-sm-inline | O elemento que utiliza esta classe, passa a ter um ``display: inline;``, sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.d-sm-inline-block | O elemento que utiliza esta classe, passa a ter um ``display: inline-block;``, sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.d-sm-table | O elemento que utiliza esta classe, passa a ter um ``display: table;``, sempre que a largura da tela do usúario tiver no minimo 440px de largura.
.d-sm-none | O elemento que utiliza esta classe, passa a ter um ``display: none;``, sempre que a largura da tela do usúario tiver no minimo 440px de largura.
           |
.d-md-block | O elemento que utiliza esta classe, passa a ter um ``display: block;``, sempre que a largura da tela do usúario tiver no minimo 740px de largura.
.d-md-inline | O elemento que utiliza esta classe, passa a ter um ``display: inline;``, sempre que a largura da tela do usúario tiver no minimo 740px de largura.
.d-md-inline-block | O elemento que utiliza esta classe, passa a ter um ``display: inline-block;``, sempre que a largura da tela do usúario tiver no minimo 740px de largura.
.d-md-table | O elemento que utiliza esta classe, passa a ter um ``display: table;``, sempre que a largura da tela do usúario tiver no minimo 740px de largura.
.d-md-none | O elemento que utiliza esta classe, passa a ter um ``display: none;``, sempre que a largura da tela do usúario tiver no minimo 740px de largura.
           |
.d-lg-block | O elemento que utiliza esta classe, passa a ter um ``display: block;``, sempre que a largura da tela do usúario tiver no minimo 980px de largura.
.d-lg-inline | O elemento que utiliza esta classe, passa a ter um ``display: inline;``, sempre que a largura da tela do usúario tiver no minimo 980px de largura.
.d-lg-inline-block | O elemento que utiliza esta classe, passa a ter um ``display: inline-block;``, sempre que a largura da tela do usúario tiver no minimo 980px de largura.
.d-lg-table | O elemento que utiliza esta classe, passa a ter um ``display: table;``, sempre que a largura da tela do usúario tiver no minimo 980px de largura.
.d-lg-none | O elemento que utiliza esta classe, passa a ter um ``display: none;``, sempre que a largura da tela do usúario tiver no minimo 980px de largura.
           |
.d-xl-block | O elemento que utiliza esta classe, passa a ter um ``display: block;``, sempre que a largura da tela do usúario tiver no minimo 1200px de largura.
.d-xl-inline | O elemento que utiliza esta classe, passa a ter um ``display: inline;``, sempre que a largura da tela do usúario tiver no minimo 1200px de largura.
.d-xl-inline-block | O elemento que utiliza esta classe, passa a ter um ``display: inline-block;``, sempre que a largura da tela do usúario tiver no minimo 1200px de largura.
.d-xl-table | O elemento que utiliza esta classe, passa a ter um ``display: table;``, sempre que a largura da tela do usúario tiver no minimo 1200px de largura.
.d-xl-none  | O elemento que utiliza esta classe, passa a ter um ``display: none;``, sempre que a largura da tela do usúario tiver no minimo 1200px de largura.

