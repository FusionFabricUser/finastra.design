// import of styles
import './styles/index.scss'

import { gsap } from "gsap"; 

const middle = innerWidth / 2;

window.addEventListener("mousemove", e => {
  let pos = middle - e.pageX;
  
  gsap.to(".title", {x: -(0.10*pos), duration: 1});
  gsap.to(".img1", {x: -(0.040*pos), duration: 1});
  gsap.to(".img2", {x: -(0.025*pos), duration: 1});
  gsap.to(".img3 ", {x: -(0.080*pos), duration: 1});
  gsap.to(".crop-mark ", {x: -(0.075*pos), duration: 1});
});