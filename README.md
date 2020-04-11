# **Mensagens Secretas**
Um site voltado a encriptação de mensagens, através da utilização da Cifra de César, método milenar de criptografia para o envio de mensagens.

Você pode conferir o projeto, [clicando aqui](https://carolpinheiro.github.io/SAP004-cipher/src/).

## 1.  O que é Cifra de César?

A *Cifra de César* é um processo milenar de criptografia, originado da Roma Antiga, onde através da movimentação das letras em um alfabeto (normalmente usando um número pré-definido por ambas as partes), uma mensagem pode ser encriptada ou desencriptada.. 
Por exemplo, tornando um A com um offset (número de movimentação) 7 se tornar um H, pois estaríamos somando a posição do A (1) + 7, chegando a 8, que no alfabeto romano equivale a letra H.
Esse processo foi usado amplamente por Julio César para se comunicar com seus generais.

## 2.  Usuários
Voltado para que as pessoas que desejam estabelecer um nível de segurança, ao enviar mensagens para seus amigos e/ou conhecidos.

## 3. Objetivos
Com base em um offset previamente definido (número de casas que o código irá se deslocar no alfabeto em relação a letra original), criar a possibilidade de encriptação e decriptação das mensagens trocadas.
O programa se permite resolver os problemas de seus usuários, ao permitir com uma interface simples e intuitiva, que todos consigam utilizar de suas funcionalidades sem maiores problemas.

## 4. Tela de trabalho

![alt text](https://github.com/CarolPinheiro/SAP004-cipher/blob/master/src/img/page.png "Página inicial")

O design da página foi pensado para ser o mais simples e intuitivo possível, assim a pessoa que acessasse ao mesmo, apenas precisaria digitar sua mensagem e sem maiores complicações conseguiria a resposta que estava buscando.

## 5. Como testar isso em sua máquina
É possível apenas realizar o download de um arquivo zip com os códigos, mas caso queira clonar o arquivo, esses são os passos que deve seguir inicialmente:
Primeiramente você deve possuir o programa chamado **Git** em sua máquina (ele pode ser baixado [aqui](https://git-scm.com/)). E o Node.js disponível também (link para download [aqui](https://nodejs.org/en/)), para podermos executar o programa com NPM.
Após estar com ele instalado em sua máquina, copie o link HTTPs do repositório, no botão **Clone or Download**, e em seu terminal digite `git clone` e cole o link. 
Assim que o terminal anunciar que terminou de baixar tudo, digite `cd SAP004-cipher`e já estará dentro do repositório.
Terminando esses passos, basta digitar `npm install`, para que a pasta **node_modules** seja instalada, e assim que o processo se encerrar, com um simples `npm run start`, você poderá executar o programa sem maiores problemas.
Contudo, como foi dito acima, caso opte por simplesmente fazer o download dos códigos, poderá executar eles com algumas extensões que criam mini servidores no navegador, como por exemplo a [Watch in Chrome](https://chrome.google.com/webstore/detail/vs-code-watch-in-chrome/mmbnmofkiadlcapnmgnkheoadkpeefii) de simples execução.


