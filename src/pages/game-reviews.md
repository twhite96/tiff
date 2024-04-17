---
title: Game Reviews
description: 'Brief reviews of games I am playing'
layout: blog
pagination:
  data: collections.games
  size: 6
permalink: 'game-reviews/page-{{ pagination.pageNumber }}/index.html'
redirectFrom: ['/game-reviews/', '/game-reviews/page-0/']
---

{% set itemList = collections.games %}