---
title: Projects
icon: ⌨️
---
{% for page_ in site.pages %}
{% if page_.path contains 'pages/projects/' %}
{% linkpageblock %}
{{ page_.url | remove: ".html" }}
{% endlinkpageblock %}
{% endif %}
{% endfor %}