<h1 align="center">Flow Css</h1>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=Flow-Css&message=Welcome&color=16DD8E&labelColor=ffffff" alt="PRs welcome!" />
  <img alt="License" src="https://img.shields.io/static/v1?label=version&message=1.0&color=16DD8E&labelColor=ffffff">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=16DD8E&labelColor=ffffff">
</p>

![Flow Csss](https://github.com/fortrax-br/assets/blob/main/flow-css/flow-2.png);

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
# cd flow-css
# git pull
```

* Após isso, acesse a pasta criada, (o exemplo é usando comandos linux, em seu cmd pode ser diferente caso o sistema não seja linux).

```sh
cd flow-css
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
yarn run css-compile
```

ou com npm:

```sh
npm run css-compile
```

Feito isso, o sass vai ficar automaticamente recompilando os arquivos a cada nova modificação, sem necessidade 
de se fazer este processo manualmente.

## Em produção

O projeto final apenas necessita de um arquivo, atualmente, sendo ele o arquivo presente na pasta raiz do projeto
na pasta dist, onde fica o arquivo css final, que deve ser importado no arquivo html, que se deseja
utilizar o framework. Todos os outros arquivos são a respeito de desenvolvimento e teste.

```sh
cd dist/css/flowcss.min.css
```
