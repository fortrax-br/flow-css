# FlexCss

## Dependências do projeto atualmente

No projeto estamos utlizando o pré-processador css Sass e o Postcss para
minimizar e prefixar o código css gerado na build.

[Sass](https://sass-lang.com/)

[Postcss](https://postcss.org/)

## Testar as implementações localmente

Para você poder conferir as features atuais do framework, atualmente, é necessário seguir os passos abaixo
, para poder visualizar as ṕáginas html em seu browser.

* Primeiro clone o repositório para sua máquina.

```sh
git clone https://notabug.org/Altos-Codigos/flow-css.git
# ou caso já tenha clonado:
# cd flex-css
# git pull
```

* Após isso, acesse a pasta criada, (o exemplo é usando comandos linux, em seu cmd pode ser diferente caso o sistema não seja linux).

```sh
cd flex-css
```

* Agora é necessário instalar as depêndencias do projeto, para isso faça o seguinte, ( é necessário ter o nodejs instalado em sua máquina).

```sh
yarn
```

ou com npm 

```sh
npm install
```

* Agora basta iniciar o servidor próprio do projeto, é necessário ter o nodejs instalado em sua máquina.

```sh
node server.js
```

* Agora basta acessar o endereço ``http://localhost:3003`` em seu navegador.

## Trabalhando no projeto

Toda vez que você finalizar algo no projeto, é necessário compilar os arquivos css criados ou modificados
para garantir que o arquivo de build final esteja sempre atualizado, para isso nosso arquivo de configuração,
package.json contém um comando para fazer este processo, simplismente execute:

```sh
yarn run css-build
```

ou com npm:

```sh
npm run css-build
```

Enquanto tiver testando as funcionalidades, não é necessário fazer este processo, basta apenas 
executar o comando para o sass fazer a compilação automatica a cada nova modifcação que você fizer em algum arquivo .scss,
esse auto compile, vai facilitar no processo de modificação antes de fazer o build em si, para isos apenas diite o comando.

```sh
yarn run css-autocompile
```

ou com npm:

```sh
npm run css-autocompile
```

Feito isso, o sass vai ficar automaticamente recompilando os arquivos a cada nova modificação, sem necessidade 
de se fazer este processo manualmente.

## Em produção

O projeto final apenas necessita de um arquivo, atualmente, sendo ele o arquivo presente na pasta raiz do projeto
na pasta dist, onde fica o arquivo css final, que deve ser importado no arquivo html, que se deseja
utilizar o framework. Todos os outros arquivos são a respeito de desenvolvimento e teste.

```sh
cd dist/css/flex.min.css
```
