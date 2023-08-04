---
title: Biolage
publishDate: 2020-03-02 00:00:00
img: /assets/work/biolage/listing.jpg
img_alt: Biolage Botanical Redesign
hero_type: img
hero_video: /assets/work/keratin-complex/black-seq-contrast-opt.mp4
hero_img: /assets/work/biolage/hero.jpg
logo: logos/biolage
description: |
  We designed a whodunnit-style game to introduce Markdown formatting. Suspense — suspicion — syntax!
tags:
  - UX / Visual Design
  - Frontend Development
  - E-mail Design and Development
---


<img src="/assets/work/biolage/large-leaf.png" class="large-leaf">

## The Challenge

The Biolage marketing team needed a new site experience split off from the Matrix brand. The new site needed to utilize the new botanical-inspired design coupled with creating a simple navigation process for the complex assortment of product collections and products.

<div class="heart-container">
<div class="heart"></div>
</div>

## The Solution

With the consumer’s experience in mind, we created wireframes to ensure a clear and thorough path to drive purchases. This also included an interactive hair consultation tool that provided tailored product recommendations for a consumer’s hair type. To keep the whole experience on brand, Elevate also designed trigger and utility emails for Account Registration, Reset Password, Hair Quiz Results, Blog Highlights & Newsletter Sign-Up. 

<img src="/assets/work/biolage/tile-sustainable-grass-logo.jpg">

During the visual design phase, we utilized lush botanical-inspired product laydowns, rich textured light wooden backgrounds paired with glowing fresh-faced models to draw the consumer in. To take it one step further and bring the design elements to life, we incorporated micro-animations and animated page scrolling to keep the consumer engaged.

To help the Client’s existing back-end Demandware team, we developed functional prototypes to showcase our vision for page animations and layouts. During the development phase, we participated in UAT with the Client’s IT team to ensure the finalized designs stayed true to our vision.

<div class="tile-sustainable__cards">
  <div class="tile-sustainable__card tile-sustainable__card--formulation animation-element in-view">
    <img src="/assets/work/biolage/sustainable-icon-formulation.png" alt="Formulation Icon" />
    Formulation
  </div>
  <div class="tile-sustainable__card tile-sustainable__card--manufacturing animation-element in-view">
    <img src="/assets/work/biolage/sustainable-icon-manufacturing.png" alt="Manufacturing Icon" />
    Manufacturing
  </div>
  <div class="tile-sustainable__card tile-sustainable__card--plastic animation-element in-view">
    <img src="/assets/work/biolage/sustainable-icon-plastic.png" alt="Plastic Pledge Icon" />
    Plastic Pledge
  </div>
  <div class="tile-sustainable__card tile-sustainable__card--giving animation-element in-view">
    <img src="/assets/work/biolage/sustainable-icon-giving.png" alt="Giving Back Icon" />
    Giving Back
  </div>
</div>


<style>

body {
  background-color: #fff;
}

.large-leaf {
  position: absolute;
  left: 0;
  top: 70%;
  z-index: 10;
}

.heart {
    position: absolute;
    right: -10px;
    top: -10px;
    width: 100px;
    height: 100px;
    background: url("/assets/work/biolage/heart-sprite.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
    transform: scale(2.75);
}

.heart:hover {
    /* background-position: -100px 0; */
        transition-duration: 1s;
    background-position: -2900px 0;
}

.heart:focus {
    background-position: 0 0;
}

.heart.is-active {
    transition-duration: 1s;
    background-position: -2900px 0;
}

.heart-container {
  position: relative;
  width: 100%;
}



.tile-sustainable {
	 text-align: center;
	 padding-bottom: 5em;
	 border-bottom: 1px solid #dee0e2;
	 max-width: 50em;
	 margin: 0 auto;
	 padding: 0;
}
 .tile-sustainable h4 {
	 font-size: 18px;
	 color: #323d47;
}
 .tile-sustainable__headline h2 {
	 display: inline;
}
 .tile-sustainable__about {
	 max-width: 650px;
	 display: flex;
	 flex-wrap: wrap;
	 justify-content: center;
	 align-items: center;
	 margin: 0 auto;
}
 .tile-sustainable__about--img {
	 width: 50%;
}
 .tile-sustainable__about--copy {
	 width: 50%;
	 text-align: left;
	 color: #7c858b;
	 padding-left: 40px;
}
 .tile-sustainable__cards {
	 display: flex;
	 flex-direction: row;
	 flex-wrap: wrap;
	 justify-content: center;
	 margin: 0 auto;
	 padding: 5em 0 70px 0;
}
 .tile-sustainable__card {
	 transform-origin: center -20px;
	 background-image: url(/assets/work/biolage/sustainable-icon-bg.png);
	 padding: 1em;
	 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	 width: 235px;
	 text-align: center;
	 font-size: 18px;
	 color: #323d47;
	 transition: all 0.5s;
	 cursor: pointer;
	 display: flex;
	 flex-direction: column;
	 position: relative;
	 margin: 2%;
}
 .tile-sustainable__card:after {
	 content: "";
	 border-radius: 5px;
	 position: absolute;
	 z-index: -1;
	 top: 0;
	 left: 0;
	 width: 100%;
	 height: 100%;
	 box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
	 opacity: 0;
	 transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}
 .tile-sustainable__card:hover:after {
	 opacity: 1;
}
 .tile-sustainable__card img {
	 width: 100%;
	 height: auto;
	 margin-bottom: 10px;
}
 .tile-sustainable__card--formulation.in-view {
	 animation: swing ease-in-out 5s;
}
 .tile-sustainable__card--manufacturing.in-view {
	 animation: swing ease-in-out 7s;
}
 .tile-sustainable__card--plastic.in-view {
	 animation: swing ease-in-out 5s;
}
 .tile-sustainable__card--giving.in-view {
	 animation: swing ease-in-out 8s;
}
 @keyframes swing {
	 0% {
		 transform: rotate(2deg);
	}
	 10% {
		 transform: rotate(-2deg);
	}
	 20% {
		 transform: rotate(2deg);
	}
	 30% {
		 transform: rotate(-2deg);
	}
	 40% {
		 transform: rotate(2deg);
	}
	 50% {
		 transform: rotate(-2deg);
	}
	 60% {
		 transform: rotate(1deg);
	}
	 70% {
		 transform: rotate(-1deg);
	}
	 85% {
		 transform: rotate(1deg);
	}
	 100% {
		 transform: rotate(0deg);
	}
}
 @keyframes hvr {
	 from {
		 transform: scale(1) translateX(0) translateY(0);
	}
	 to {
		 transform: scale(1.1) translateX(-10px) translateY(-10px);
	}
}
 
</style>