---
title: Pages
icon: 📄
---

{% for page_ in site.pages %}
{% assign slashes = page_.path | split: '/' | size | minus: 1 %}
{% if slashes == 1 %}
{% linkpageblock %}
{{ page_.url | remove: ".html" }}
{% endlinkpageblock %}
{% endif %}
{% endfor %}