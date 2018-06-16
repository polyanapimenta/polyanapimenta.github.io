---
layout: page
title: Categorias
permalink: /tags/
---
<div class="tag-link">
{% for category in site.categories %}
    {% capture category_name %}{{ category | first }}{% endcapture %}
    <a href="/tags/{{ category_name }}">
        <img id="img-tags" src="/assets/stikers/{{ category_name }}.gif" alt="{{ category_name }}" title="posts sobre {{ category_name }}">
    </a>
{% endfor %}
</div>