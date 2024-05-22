---
title: Journal
description: "Images from my journal."
layout: blog
pagination:
  data: collections.journal
  size: 6
permalink: 'journal/page-{{ pagination.pageNumber }}/index.html'
redirectFrom: ['/journal/', '/journal/page-0/']
---

Posts with images from the journal in my notes app.

{% set itemList = collections.journal %}