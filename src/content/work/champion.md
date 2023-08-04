---
title: Champion Life
publishDate: 2019-10-02 00:00:00
img: /assets/work/champion-life/listing.jpg
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
hero_type: img
hero_video: /assets/work/keratin-complex/black-seq-contrast-opt.mp4
hero_img: /assets/work/champion-life/hero.jpg
logo: logos/champion
description: |
  We developed brand positioning and design assets for the launch
  of a new colored water product.
tags:
  - Visual Design
  - UX Design
  - User Testing
  - Prototyping
---

How does one motivate young, trend-setting consumers? Design a brand experience that encourages exploration of an exclusive fashion collection on the devices they use most.

Exclusivity and self-expression motivate the streetwear consumer. They connect with authentic brands that offer unique styles that are not mass produced. This valuable feedback informed design iterations and the end result was an experience that reflected the Champion LIFE brand and resonated with this millennial consumer.

Elevate’s design team used interactive prototypes and tested them in the field with real users to drive the most successful design solution. The shoppable lookbook made up of time-released collections resulted in several product lines selling out in days after release.



{%- import { next } from '@astrojs/renderer' -%}

{%- set nextPost = next(posts, postIndex, '/posts/*.md') -%}

{# Render the link to the next post if it exists #}
{# Otherwise, show a message indicating there is no next post #}

{%- if nextPost -%}
  <a href="{{ nextPost.url }}">Next Post: {{ nextPost.title }}</a>
{%- else -%}
  <p>No next post available.</p>
{%- endif -%}
