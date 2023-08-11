---
title: L'Oréal - Biolage
projectType: Site Redesign
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


<div class="work-wrapper">
<div class="work-content flow">


## The Challenge
The Biolage marketing team faced the task of creating a new site that originally lived under the Matrix brand. The goal was to showcase a new botanical-inspired “organic” design and move away from the typical boxy storefront.

Technically, the new design and UX needed to support the IT team’s storefront reference architecture (SFRA) which was a L’Oréal library of components within their Salesforce Commerce instance used across a number of their brands.

## The Solution
Keeping the consumer’s experience in mind, wireframes and visual designs were created from the library of components to provide a clear path to purchase. An interactive hair consultation tool was designed to offer consumers a personalized product recommendation based on their hair type. Additionally, all forms of marketing communication were designed for their blog, consumer email marketing, and newsletter sign-up flows.

To assist the client’s existing development partner, fully developed UI prototypes were created that showcased the vision for page animations and layouts. During the development phase, I helped collaborate with the client’s IT team for User Acceptance Testing (UAT) to ensure the final designs aligned with the intended vision.

After the first iteration of the site was launched, it served as a reference for other L’Oréal brands, demonstrating how to really push the library of components through the use of responsive organic shapes.

## What I Learned
Achieving effective communication with the development partner required finding a balance between defining unique, one-off elements and ensuring scalability with the organic shapes for reusable components across different devices. Building out fully working UI prototypes is an extremely effective way to communicate responsive and animation challenges.

Defining requirements for hero images also posed interesting challenges, requiring extensive exploration with various images to establish safe zones on a template for the merchandising team. By thinking creatively and incorporating micro animations, we successfully delivered a project that all teams involved could take great pride in.



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



<div class="heart-container">
<div class="heart"></div>
</div>






<div class="work-highlight">
<img src="/assets/work/biolage/biolage-homepage@2x.jpg" alt="">
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

.large-leaf {
  position: absolute;
  left: 0;
  top: 70%;
  z-index: 10;
}

.heart {
    position: absolute;
    right: 0;
    top: 0;
    width: 100px;
    height: 100px;
    background: url("/assets/work/biolage/heart-sprite.png") no-repeat;
    background-position: 0 0;
    cursor: pointer;
    transition: background-position 1s steps(28);
    transition-duration: 0s;
	/* transform: scale(0.75); */
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
 
</style>