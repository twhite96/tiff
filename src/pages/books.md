---
title: Book Reviews
description: 'Brief reviews of non-work related books I am reading'
layout: blog
pagination:
  data: collections.books
  size: 6
permalink: 'book-reviews/page-{{ pagination.pageNumber }}/index.html'
redirectFrom: ['/book-reviews/', '/book-reviews/page-0/']
---

{% set itemList = collections.books %}