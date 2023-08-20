---
title: Champion Real Champions
projectType: Shopable Landing Pages
publishDate: 2019-10-02 00:00:00
img: ../../assets/work/real-champions/listing.jpg
img_alt: Soft pink and baby blue water ripples together in a subtle texture.
hero_type: video
hero_video: /assets/work/real-champions/hero-c
hero_img: ../../assets/work/real-champions/hero.jpg
logo: logos/champion
bodyclass: theme-dark nav-theme-light
description: |
  We developed brand positioning and design assets for the launch
  of a new colored water product.
tags:
  - Visual Design
  - UX Design
  - User Testing
  - Prototyping
  - Front-end Development
---


<div class="work-col">
<div class="flow">
<h2>Project Overview</h2>
<p>Champion needed a site experience for their Real Champions social campaign, which shares the stories of four real people who have overcome personal challenges through sport.</p>

<p>Social selling is successful because of its authenticity, so the strategy was to focus on real people (the Real Champions) and let them share their own stories in their own words and to keep their stories front and center.</p>



<h2>The Solution</h2>

<p>The site was built with a focus on a story-driven shopping experience. Vignettes for each athlete featured vivid action photography and narrative videos. The Champion products were introduced as supporting features of the Real Champion’s athletic pursuits and personal style.  Whether consumers related directly with each challenge of the atheletes or saw how Champion was used to help support these athelete, it was all a win-win.  The campaign was successful because of it's shoppable short documentary feel vs just using an influencer.</p>

<p>In addition to the site experience and promotion on social channels, an email marketing series was designed and develop to further promote the campaign.</p>


</div>
</div>

<div class="screens">
<img src="/assets/work/real-champions/screen-clair.jpg" alt="Clair" class="img-zoomable">
<img src="/assets/work/real-champions/screen-john.jpg" alt="John" class="img-zoomable">
<img src="/assets/work/real-champions/screen-julian.jpg" alt="Julian" class="img-zoomable">
<img src="/assets/work/real-champions/screen-karla.jpg" alt="Karla" class="img-zoomable">
</div>


<style>
body {
  background-color: #000;
}

main .container {
  position: relative;
}

.work-logo svg {
  fill: #fff;
}

main .container:after {
  content: ""; 
  display: block;
  width: clamp(200px, 40%, 418px);
  height: clamp(71px, 40%, 136px);
  position: absolute;
  top: -25px;
  right: 0;
  background-image: url('/assets/work/real-champions/logo-real-champions.png');
  background-size: contain; /* Adjust as needed, like contain, 100%, etc. */
  background-repeat: no-repeat;
  z-index: 8
}


.screens {
  display: flex;
  flex-wrap: wrap;
  max-width: 100%;
  gap: 20px;
  margin-top: 5rem;
}

.screens img {
  flex: 25%;
  width: 100%;
}

@media (min-width: 50em) {
  .screens {
    flex-direction: row;
    flex-wrap: nowrap;
  }

  .screens img {
    flex: 25%;
  }

  main .container:after {
    top: -55px;
  }

}
</style>