---
layout: post
title:  "Criando um Blog Usando GitHub Pages e Jekyll!"
date:   18-05-10 16:43:02 -0300
category: github
description: "Gere inúmeras páginas de posts facilmente, tendo comentários associados a todas as suas postagens utilizando ferramentas e hospedagem gratuitas!"
thumbnail-post: "/assets/thumbnails/jekyll-theme.png"
---

## Introdução:

O Jekyll nada mais é do que um simples gerador de sites, ou seja, ele gera as páginas estáticas do seu site, também possui dentro de sua engine a capacidade de reconhecer a estrutura de um blog, onde ele "compila" todo o seu conteúdo, textos, posts e etc, e como resultado final, gera o seu site estruturado.

Ele possui a seguinte estrutura:

{% highlight markdown%}
myblog$

404.html  about.md  _config.yml  Gemfile  Gemfile.lock  index.md  _posts  _site

{% endhighlight %}

Detalharei melhor cada arquivo dentro da estrutura do jekyll e como personalizar seu template mais abaixo.

De início iremos utilizar o GitHub Pages, ele auxilia você a construir seu próprio site/portifólio do zero com o domínio `nome-usuario.github.io`, ou gerar páginas personalizavéis para os seus projetos em seus repositórios.

O GitHub Pages oferece sites ilimitados para os seus projetos e apenas um site por conta ou organização portando o domínio `nome-usuario.github.io`

## Parte 1:

1) Criando e hospedando nosso site no [GitHub Pages][github-pages] (passos 1 .. 5)

Primeiramente faremos que o GitHub Pages cuide da parte de hospedar o nosso site gratuitamente, para isso, seguem os passos abaixo para criação do mesmo:

+ 1.1) Crie um novo repositório utilizando a sua conta do [GitHub][github], nome do novo repositório: `username.github.io` (não esqueça de trocar o username pelo nome de usuário da sua conta no GitHub)

**Se o nome do repositório não corresponder exatamente com seu nome de usuário, não funcionará, portanto, certifique-se primeiro antes de criar o repositório.**

**Usando o Terminal ou o [Git Bash][git-bash]:**

+ 1.2) Vá até a pasta que você deseja baixar o seu repositório em sua máquina local e dê um `git clone https://github.com/ username / username .github.io`

+ 1.3) Criando a página index.html, entre na pasta do seu projeto `cd username.github.io` e crie sua página inicial `echo "Hello World" >> index.html`

+ 1.4) Adicione e confirme suas alterações no projeto: `git add .` depois efetue o commit das suas informações adicionadas `git commit -m "criando o index.html"` e envie ao repositório `git push -u origin master`

+ 1.5) Pronto! Site no ar com uma simples página index.html. Acesse pelo navegador sua url: `https://username.github.io` e veja.

*Referência: [GitHub Pages][github-pages]*

## Parte 2:

Após ter toda a Parte 1 feita, vamos abrir o terminal no caminho onde se encontra o seu repositório `cd username.github.io/` criado anteriormente em sua máquina, pois iremos inatalar o Jekyll, o cara que gera a estrutura do seu blog!

### Requisitos antes de instalar o Jekyll:

- Ter intalado o [Ruby][ruby] versão 2.2.5 ou superior na sua máquina `ruby -v`
- Ter instalado o [RubyGem][rubygem] na sua máquina `gem -v`

#### Intalar o Jekyll e o Bundler através do RubyGem:
**ATENÇÃO:** A intalação do Jekyll e do Bundler só é feita uma vez, não é necessário instalar outra vez quando for criar novos projetos

- No terminal rodar: `sudo gem install bundler jekyll`

####ERROR:
Caso ao rodar o comando acima dê algum erro (em sistemas Linux):

{% highlight markdown%}
ERROR:  Error installing jekyll:
ERROR: Failed to build gem native extension.
{% endhighlight %}

Solucionei intalando o G++ (GNU C++ Compiler)
pois no ato da instalação o erro se dá por não conseguir compilar um arquivo em C:

{% highlight markdown%}
fatal error: stdio.h: No such file or directory
 #include <stdio.h>
          ^~~~~~~~~
compilation terminated.

{% endhighlight %}

Após ter instalado o G++ rode novamente o comando que tinha gerado erro:
`sudo gem install bundler jekyll`

para verificar se o jekyll foi intslado corretamente, rode: `jekyll -v`

`bundler` é uma gema que gerencia outras gemas de Ruby. Ele garante que suas gemas e versões de `gem` sejam compatíveis uma com as outras e que você tenha todas as dependências necessárias que cada `gem` requer.

### Criando a estrutura do seu blog com o jekyll

- `jekyll new myblog` myblog pode ser qualquer nome que você queira dar ao seu projeto/blog, pois esta será a pasta principal da estrutura do jekyll, onde contém toda a informação de arquivos que estruturam o seu novo blog.

- Entre na pasta criada acima `cd myblog`

- Rode: `bundle exec jekyll serve` para bildar/construir o site no servidor para visualização

Obs. Quando você executa `bundle exec jekyll serve`, o Bundler usa as gemas e versões conforme especificado `Gemfile.lock` para garantir que o seu site Jekyll seja construído sem conflitos de compatibilidade ou dependência.

- Pronto, agora acesse no seu browser `http://localhost:4000` ou  `http://127.0.0.1:4000` para ver rodando o seu blog em seu servidor local!

*Referência: [Jekyll QuickStart][jekyll-quickstart]*

[github-pages]: https://pages.github.com/
[github]: https://github.com/new
[git-bash]: https://git-scm.com/downloads
[ruby]: https://www.ruby-lang.org/en/documentation/installation/
[rubygem]: https://rubygems.org/pages/download
[jekyll-quickstart]: https://jekyllrb.com/docs/quickstart/
