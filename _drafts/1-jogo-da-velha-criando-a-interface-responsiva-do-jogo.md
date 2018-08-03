---
layout: post
title:  "1/3 - Jogo da Velha: Criando a Interface Responsiva do Jogo"
date:   18-07-04 15:25:02 -0300
category: javascript
description: "Esta é uma série de 3 posts que irá ensinar de forma prática o desenvolvimento do Jogo da Velha, e neste primeiro post, implementaremos a interface do jogo com HTML e CSS, utilizando o conceito prático de mobile first."
thumbnail-post: "/assets/thumbnails/jogo-da-velha.png" 
---

## Introdução:


Preparado para iniciar essa nova jornada de desenvolvimento grande Padawan? :D  

Já vou dizendo que o nível requerido para completar totalmente o entendimento sobre a mecânica do desenvolvimento de um jogo da velha é muito fácil, e foi por isso mesmo eu o escolhi.

Por ser um jogo extremamente simples, e por todo mundo conhecer suas regras universais de jogabilidade, essa vantagem facilita o desenrolar do nosso desenvolvimento, assim, conseguimos focar não muito na lógica para entender como implementar o jogo, mas conseguimos focar em obter os resultados da prática no desenvolviemnto em si com a linguagem, fortalecendo o nosso conhecimento de Javascript.

Nossas vantagens e incentivo é que estaremos programando um projeto real do zero, e com total certeza, vocês sentirão no término do desenvolvimento, uma imensa satisfação de tê-lo concluído e compreendido algumas façanhas do javascript.

### Início:

Para prosseguirmos, primeiramente vamos organizar nosso ambiente de trabalho:

**1. Forque (copie) o repositório para você em seu repositório no GitHub**  
 [img aqui, fork do repositório]  
 ***LINK: ***  

 *Não se preocupe ele está livre de cola!
 este repositório contém apenas a estrutura de pastas, arquivos (vazios), e imagens do projeto que utilizaremos no decorrer desse desenvolvimento*

**2. Após ter forkado (copiado) a estrutura de arquivos e pastas do repositório acima, clone-o para qualquer pasta de sua preferencia na sua máquina**

**3. Tenha um editor de texto instalado, eu recomendo o [Visual Studio Code][visual-studio-code], mas isso indifere, pode ser qualquer um que você tenha uma familiaridade**

**4. Com seu editor de texto aberto, abra a pasta `/jogo-da-velha` clonada anteriormente do seu repostitório Git. E abra o arquivo `jogo-da-velha.html`, pois iremos utilizá-lo agora**

### #1 - Criando a estrutura HTML:

Vamos definir toda a nossa estrutura, após isso começaremos a estilizá-lo. Nossa estrutura básica de html é bem simples, nosso layout será dividido respectivamente em 3 partes importantes, três divs com os seguintes Id's:

{% highlight html %}
<body>
   <div id="painel"> ... </div>

   <div id="tabuleiro"> ... </div>

   <div id="placar"> ... </div>
</body>
{% endhighlight %}

Vamos prosseguir dentro do `id=painel`, ele será o painel de ações e informações que estão acontecendo em nosso jogo, por exemplo, terá hora que ele pedirá para o usuário  *'Escolha um jogador X ou O'*, ou mostrará o vencedor da partida *'O vencedor foi X !'* ou irá determinar o empate dela *'Empatou, Game Over!'*

Para fins didáticos, vamos adicionar dentro do `div#painel` o parágrafo abaixo, para posteriormente ele servir na estilização em nosso CSS dos elementos que surgirão no painel, ele nos dará uma noção de como tudo ficará:

{% highlight html %}
<body>
   <div id="painel">
       <p>Escolha um Jogador</p>
       <img src="./assets/x.svg" alt="x">
       <p>ou</p>
       <img src="./assets/o.svg" alt="o">
   </div>
   ...
</body>
{% endhighlight %}

Vamos definir agora nossa `div#tabuleiro`, a parte mais importante da estrutura do jogo. 

Primeiramente vamos pensar como é composto o tabuleiro de um jogo da velha, tendo em mente isso, sabemos que nosso `# jogo da velha` contém 3 linhas e 3 colunas, iremos nomeá-las, as linhas como l1, l2, e l3, e nossas colunas de a, b, e c, portanto se você já chegou no reciocínio da estrutura desejada, ela ficará assim:

[img do tabuleiro da velha]

`<div>'s` para compor as linhas e `<span>` para compor as colunas por ter um display padrão `inline` facilitando a disposição dos elementos, formando exatamente um `#`.

{% highlight html %}
<body>
    ...
    <div id="tabuleiro"> 
        <div class="l1">
            <span class="a"></span>
            <span class="b"></span>
            <span class="c"></span>
        </div>
        <div class="l2">
            <span class="a"></span>
            <span class="b"></span>
            <span class="c"></span>
        </div>
        <div class="l3">
            <span class="a"></span>
            <span class="b"></span>
            <span class="c"></span>
        </div>
    </div>
    ...
</body>
{% endhighlight %}

Agora que temos nossa estrutura de jogo da velha, vamos preenchê-las com algumas informações que nos ajudarão na hora da estilização (imagem do player), alguns atributos e classes necessários para a lógica de programação do jogo.

Precisamos adicionar a `class=".. space"` e adicionar um novo atributo `jogada=""` aos nossos `<span>'s`. A classe `.space` servirá para demarcar e representar nossos quadradros do jogo da velha, e o atributo `jogada` servirá para receber posteriormente se foi 'X' ou 'O' que marcou naquele quadradinho durante a partida.


{% highlight html %}
<body>
    ...
    <div id="tabuleiro"> 
        <div class="l1">
            <span class="a space" jogada=""><img src="assets/x.svg" alt="x"></span>
            <span class="b space" jogada=""></span>
            <span class="c space" jogada=""></span>
        </div>
        <div class="l2">
            <span class="a space" jogada=""></span>
            <span class="b space" jogada=""></span>
            <span class="c space" jogada=""></span>
        </div>
        <div class="l3">
            <span class="a space" jogada=""></span>
            <span class="b space" jogada=""></span>
            <span class="c space" jogada=""></span>
        </div>
    </div>
    ...
</body>
{% endhighlight %}

Agora vamos colocar algumas informações dentro do `div#placar`. 

A div do placar irá conter informações de pontuação dos jogadores 'X' e 'O', também terá um botão de restart do jogo, caso um dos jogadores vencer a partida ou em caso de empate, dê a oportunidade dos jogadores continuarem jogando suas inúmeras partidas, isso sem perder a pontuação feita dos últimos vencedores. 

A estrutura ficará assim:

{% highlight html %}
<body>
    ...
   <div id="placar">
       <div id="x">
            <img src="assets/x.svg" alt="x">
            <span class="pontos-x">0</span>
       </div>

       <div id="o">
            <img src="assets/o.svg" alt="o">
            <span class="pontos-o">0</span>
       </div>

       <div class="restart">
            <button>REINICIAR</button>
       </div>
   </div>
   ...
</body>
{% endhighlight %}

OBS.: *Alguns elementos serão eliminados do nosso HTML, pois posteriormente quando estivermos manipulando nosso script eles serão inseridos dinamicamente com JS, nosso `<button>` é um deles. Mas para fins de estilização, iremos manter por enquanto.*


Pronto! temos toda nossa estrutura HTML completa, agora como boa prática, antes do fechamento da tag `<body>` adicione a tag `<scripts>` para não nos esquecermos posteriormente de linkar nosso arquivo `.js` à nossa estrutura:

{% highlight html %}
<body> 
    ... 
    <script type="text/javascript" src="./mecanismo.js"></script>
</body>
{% endhighlight %}

### #2 - Criando a estilização CSS:

Agora que temos nossa estrutura de jogo pronta, abra o arquivo `interface.css` que se encontra na raiz da pasta `/jogo-da-velha` e adicione o `<link>` do seu estilo dentro do `<head>` do seu `jogo-da-velha.html`


{% highlight html %}
<head> 
    ... 
    <link rel="stylesheet" href="./interface.css">
    ...
</head>
{% endhighlight %}

OBS.: *`./` representa o diretório raiz onde se encontra o arquivo respectivo*

Como você já deve ter visto, quando abrimos o `jogo-da-velha.html` no browser o resultado visual é horroroso. :,(

    [img-01 aqui]

Iremos codificar iniciando por telas mobile, utilizando o conceito de *mobile first*, com esta técnica ganhamos um melhor desempenho em dispositivos mobile, pois conseguimos deixar mais rápida a exibição da página neles, além de ser bem mais legível, simples e curto o código, evitamos redundâncias de trechos do que se fossemos iniciar a estilização pelo tradicional *desktop first*, no mobile, estilizaremos apenas quando for necessário ajustes no loyout para as telas maiores.

Foi utilizado para todo o documento a fonte 'Concert One', você encontra ela no [Google Fonts][google-fonts] gratuitamente. Iremos importar essa fonte para dentro do nosso css, também vamos resetar a margin, padding dos elementos e iremos diminuir o tamanho das imagens dos nossos jogadores para uma proporção adequada:

{% highlight css %}
@import url('https://fonts.googleapis.com/css?family=Concert+One');

body, p, img, div, span, button {
    margin: 0;
    padding: 0;
}
body{
    background-color: #000;
    font-family: 'Concert One', cursive;
    color:#fff;
}
img {
    width: 13%;
}
{% endhighlight %}

Tornou-se um pouco mais legível:

[img-02 aqui]

Agora que está mais legível, vamos iniciar as configurações pelo ID `#painel` o primeiro bloco de `<div>` que destacamos do nosso documento. 

Queremos todos os elementos centralizados na tela, e por padrão, deixaremos todas as frases que aparecerá no painel em maiúsculo, colocaremos um cursor pointer para habilitar o ícone de clique do *mouse* ou dar o efeito de clique na imagem do player, os peddings serão setados conforme adequação da tela, o código fica assim:

{% highlight css %}
#painel {
    text-align: center;
}
#painel p {
    text-transform: uppercase;
    font-size: 3em;
    display: inline-block;
    padding: 8% 5% 0;           /* significado: top = 8, left / right = 5, e bottom = 0 */  
}
#painel img {
    cursor: pointer;
    vertical-align: middle;
    padding-bottom: 6%;
}
{% endhighlight %}

[ img 03 aqui ]

**Dicas:** *a estilização de alguns blocos `<div>'s` na tela torna-se mais fácil se você colocar um `background-color` no id da `<div>` respectiva, pois assim você consegue localizar facilmente onde o elemento se encontra na tela, outro meio facilitador é o uso da ferramenta de inspecionar do navegador, utilizo sempre para testar configurações antes de aplicar aos meus arquivos ou para verificar se algum trecho de script está funcionando conforme esperado.*

Para praticar vamos colocar uma cor no fundo da `div#placar` para manipularmos as configurações dele, faça a mesma coisa com a `div#tabuleiro` mas usando outra cor.

{% highlight css %}
#placar {
    background-color: rebeccapurple;
}
#tabuleiro {
    background-color: palegreen;
}
{% endhighlight %}

[ img 04 aqui]

Vamos ajustar primeiro a `div#placar`, pois assim fica melhor vizualizarmos a pontuação, ajustarmos a posição do botão de reinicio e o tabuleiro fica livre para mexermos no final, vamos fazer isso com css:

[visual-studio-code]:https://code.visualstudio.com/download

[google-fonts]: https://fonts.google.com/?query=concert+one