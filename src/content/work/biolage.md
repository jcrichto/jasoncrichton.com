---
title: L'Oréal - Biolage
projectType: Immersive Commerce
publishDate: 2020-03-02 00:00:00
img: ../../../public/assets/work/biolage/listing.jpg
img_alt: Biolage Botanical Redesign
hero_type: img
hero_img: ../../../public/assets/work/biolage/hero.jpg
meta_img: /assets/work/biolage/meta.jpg
logo: logos/biolage
description: The Biolage marketing team required a new immersive e-commerce site through design enhancement of their components library.
tags:
  - UX Design
  - Visual Design
  - Frontend Development
  - E-mail Design and Development
---






<div class="work-col">
<div class="work-content flow">

## The Challenge
The Biolage marketing team required a new immersive e-commerce site that originally lived under the Matrix brand. The goal was to showcase a new botanical-inspired “organic” design and move away from the typical boxy storefront by emphasizing the level of engagement, interactivity, and micro-animations offered to visitors.

## The Solution
The wireframing and design for the site had to follow a L’Oréal library of reference components that is used across a number of their brands. Those components had to be pushed in terms of layout and design, with complicated overlaps and animation. An interactive hair consultation tool was designed to offer consumers a personalized product recommendation based on their hair type. Additionally, all forms of marketing communication were designed for their blog, consumer email marketing, and newsletter sign-up flows.

</div>

<div class="results">
<img src="/assets/work/biolage/design-system.png" alt="Design System Enhancements" />
</div>

</div>
</div>




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



<h2 class="text-center" style="margin-bottom: 1rem">Animations - Home Page</h2>

<div class="biolage-video_wrap">
<div class="biolage-video">

<video id="video" class="vid-big" playsinline="true" autoplay="true" loop="true" muted="true" width="100%" frameborder="0">
<source src="/assets/work/biolage/biolage-home_c.webm" type="video/webm" />
<source src="/assets/work/biolage/biolage-home_c.mp4" type="video/mp4" />
</video>
</div>
</div>


<div class="screens">
<img src="/assets/work/biolage/biolage-homepage@2x.jpg" alt=""  class="img-zoomable">
<img src="/assets/work/biolage/biolage-lookbook@2x.jpg" alt=""  class="img-zoomable">
<img src="/assets/work/biolage/biolage-pdp@2x.jpg" alt=""  class="img-zoomable">
<img src="/assets/work/biolage/biolage-flow@2x.png" alt=""  class="img-zoomable">
</div>

</div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/ScrollTrigger.min.js"></script>

<script>
// Function to add the class when the element comes into view
// function addClassOnScroll(entries, observer) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('in-view');
//       observer.unobserve(entry.target); // Unobserve the target after adding the class
//     }
//   });
// }

function toggleClassOnScroll(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    } else {
      entry.target.classList.remove('in-view');
    }
  });
}

// Create the observer
const observer = new IntersectionObserver(toggleClassOnScroll, {
  rootMargin: '0px', // Set the margin around the viewport, e.g., '10px 0px -50px 0px'
  threshold: 0.5 // Set the percentage of the element that needs to be visible to trigger the callback
});

// Get the element to watch
const elementToWatch = document.querySelector('.tile-sustainable__cards');

// Start observing the element
observer.observe(elementToWatch);
</script>

<style>

body {
  background-color: #fff;
}

.biolage-video {
	overflow: hidden;
	clip-path: inset(2px 2px);
	width: 100%;
	margin-inline: auto;
}



.biolage-video video:focus {
	background-color: #fff;
}

.biolage-video_wrap {
	background: #eee;
	padding: 2rem;
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
	     display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
	 margin: 0 auto;
	 padding: 5em 0 70px 0;
}
 .tile-sustainable__card {
	 transform-origin: center -20px;
	 background-image: url(/assets/work/biolage/sustainable-icon-bg.png);
	 padding: 1em;
	 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	 max-width: 235px;
	 text-align: center;
	 font-size: 18px;
	 color: #323d47;
	 transition: all 0.5s;
	 display: flex;
	 user-select: none;
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

 .tile-sustainable__card img {
	 width: 100%;
	 height: auto;
	 margin-bottom: 10px;
}
 .tile-sustainable__cards.in-view .tile-sustainable__card--formulation {
	 animation: swing ease-in-out 5s;
}
 .tile-sustainable__cards.in-view .tile-sustainable__card--manufacturing {
	 animation: swing ease-in-out 7s;
}
 .tile-sustainable__cards.in-view .tile-sustainable__card--plastic {
	 animation: swing ease-in-out 5s;
}
 .tile-sustainable__cards.in-view .tile-sustainable__card--giving {
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
 



@media (min-width: 50em) {

	.biolage-video {
		width: 50%;
	}

	 .tile-sustainable__cards {
	    display: grid;
    	grid-template-columns: 1fr 1fr 1fr 1fr;
		max-width: 1200px;
	 }
}
</style>