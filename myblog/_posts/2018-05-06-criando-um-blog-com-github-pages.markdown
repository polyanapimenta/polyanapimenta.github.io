---
layout: post
title:  "Criando um Blog Usando GitHub Pages e Jekyll!"
date:   2018-05-06 16:43:02 -0300
categories: jekyll github
---

Introdução:

O Jekyll nada mais é do que um simples gerador de sites, ou seja, ele gera as páginas estáticas do seu site, também possui dentro de sua engine a capacidade de reconhecer a estrutura de um blog, onde ele "compila" todo o seu conteúdo, textos, posts e etc, e como resultado final, gera o seu site estruturado. 

Ele possui a seguinte estrutura:

{% highlight markdown%}
myblog$

404.html  about.md  _config.yml  Gemfile  Gemfile.lock  index.md  _posts  _site

{% endhighlight %}

Detalharei melhor cada arquivo dentro da estrutura do jekyll e como personalizar seu template mais abaixo. 

De início iremos utilizar o GitHub Pages, ele auxilia você a construir seu próprio site/portifólio do zero com o domínio `nome-usuario.github.io`, ou gerar páginas personalizavéis para os seus projetos em seus repositórios. 

O GitHub Pages oferece sites ilimitados para os seus projetos e apenas um site por conta ou organização portando o domínio `nome-usuario.github.io`

# Primeiros Passos:

1) Criando e hospedando nosso site no [GitHub Pages][github-pages] (passos 1 .. 5)

Primeiramente faremos que o GitHub Pages cuide da parte de hospedar o nosso site gratuitamente, para isso, seguem os passos abaixo para criação do mesmo:

+ 1.1) Crie um novo repositório utilizando a sua conta do [GitHub][github], nome do novo repositório: `username.github.io` (não esqueça de trocar o username pelo nome de usuário da sua conta no GitHub) 

**Se o nome do repositório não corresponder exatamente com seu nome de usuário, não funcionará, portanto, certifique-se primeiro antes de criar o repositório.**

**Usando o Terminal ou o [Git Bash][git-bash]:**

+ 1.2) Vá até a pasta que você deseja baixar o seu repositório em sua máquina local e dê um `git clone https://github.com/ username / username .github.io`

+ 1.3) Criando a página index.html, entre na pasta do seu projeto `cd username.github.io` e crie sua página inicial `echo "Hello World" >> index.html` 

+ 1.4) Adicione e confirme suas alterações no projeto: `git add .` depois efetue o commit das suas informações adicionadas `git commit -m "criando o index.html"` e envie ao repositório `git push -u origin master`

+ 1.5) Pronto! Site no ar com uma simples página index.html. Acesse pelo navegador sua url: `https://username.github.io` e veja.

[github-pages]: https://pages.github.com/
[github]: https://github.com/new
[git-bash]: https://git-scm.com/downloads