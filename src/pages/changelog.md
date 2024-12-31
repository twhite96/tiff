---
title: Changelog
permalink: /changelog/index.html
type: default
description: A running tally of this sites changes over time.
layout: page
---

{% for log in changelog.log %}
<div class="changelog-item">

### {{ log.date }}

<li class="changelog-tag" >${{ log.type }}</li>

{{ log.content | safe}}

</div>
{% endfor %}