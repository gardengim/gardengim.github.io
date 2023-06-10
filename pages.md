---
title: Pages
icon: 📄
---
{% for page_ in site.pages %}
{% if page_.path contains 'pages/' %}
{% unless page_.path contains 'projects/' %}
{% linkpageblock %}
{{ page_.url | remove: ".html" }}
{% endlinkpageblock %}
{% endunless %}
{% endif %}
{% endfor %}