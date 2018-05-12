---
layout: page
title: Arquivos do Site
permalink: /arquivos/
posts-size: true
---

<div class="post-items">
    <br>
    {% if site.posts %}
        <ul>
            {% for post in site.posts %}
                {% assign ano-post = post.date | date: "%Y" %}

                {% if ano-post != ano %}
                    <li class="post-header">{{ ano-post }}</li>
                    {% assign ano = ano-post %} 
                {% endif %}
                <li class="page-item-list">{{ post.date | date: "%d/%m" }}<a href="{{ post.url | escape }}"><span> | </span>{{ post.title }}</a></li>
                <hr>
            {% endfor %}
        </ul>
    {% else %}
        Não Existe Posts Para Listagem! :(
    {% endif %}
</div>
