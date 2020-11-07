import React, { useEffect } from "react";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

import "./contact.styles.scss";

const ContactPage = () => {

    const animateFrom = (elem, direction) => {
        direction = direction | 1;
        
        var x = 0,
            y = direction * 100;
        if(elem.classList.contains("gs_reveal_fromLeft")) {
          x = -100;
          y = 0;
        } else if(elem.classList.contains("gs_reveal_fromRight")) {
          x = 100;
          y = 0;
        }
        gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
          duration: 4.25, 
          x: 0,
          y: 0, 
          autoAlpha: 1, 
          ease: "expo", 
          overwrite: "auto"
        });
      }
      
      const hide = (elem) => {
        gsap.set(elem, {autoAlpha: 0});
      }
      
      useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        
        gsap.utils.toArray(".gs-reveal").forEach(function(elem) {
          hide(elem); // assure that the element is hidden when scrolled into view
          
          ScrollTrigger.create({
            trigger: elem,
            onEnter: function() { animateFrom(elem) }, 
            onEnterBack: function() { animateFrom(elem, -2) },
            onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
          });
        });
      });

    return (
<div className="container">
    <div className="cInnerContent">
        <h1 className="header-section gs-reveal ipsType_center">We are pasionate about exploring great outdoors</h1>

        <div className="features">
            <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                <div className="featured-image-container ipsGrid_span5 gs-reveal gs-reveal_fromLeft">
                    <div className="card">
                        <img width="479" src="https://picsum.photos/479/479?index=1" alt=""/>
                    </div>
                </div>

                <div className="ipsGrid_span7 ipsType_left">
                    <h2 className="heading_large gs-reveal">Find amazing <strong>places</strong> to explore</h2>
                    <p className="gs-reveal"><a href="https://greensock.com/drawsvg/">DrawSVGPlugin</a> allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. <a href="https://greensock.com/morphsvg/">MorphSVGPlugin</a> to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. <a href="/docs/v3/Plugins/MotionPathPlugin">MotionPathPlugin</a> allows you to easily move any object along a path.</p>
                </div>
            </div>
        </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span7 ipsType_right">
                <h2 className="heading_large gs-reveal">Supercharge immersive <strong>WebGL</strong> experiences</h2>
                <p className="gs-reveal">GreenSock is used in some of the most popular <a href="//threejs.org/">Three.js</a> powered WebGL projects. Animate any object in a scene. <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a> makes animating <a href="//www.pixijs.com/">Pixi.js</a> objects with GSAP a breeze. Animate position, scale, color effects and more with all the power and control of GSAP and the rendering speed of Pixi.js.</p>
            </div>

            <div className="featured-image-container ipsGrid_span5 gs-reveal gs-reveal_fromRight">
                <div className="card">
                    <img width="479" src="https://picsum.photos/479/479?index=2" alt=""/>
                </div>
            </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="featured-image-container ipsGrid_span5 gs-reveal gs-reveal_fromLeft">
                <div className="card">
                    <img width="479" src="https://picsum.photos/479/479?index=3" alt=""/>
                </div>
            </div>
            

            <div className="ipsGrid_span7 ipsType_left">
                <h2 className="heading_large gs-reveal">Control performant <strong>Canvas</strong> animations</h2>
                <p className="gs-reveal">GSAP makes animating with Canvas even easier by providing an easier way to look and sequence animations. GSAP works great with <a href="//www.adobe.com/products/animate.html">Adobe Animate</a> and <a href="//createjs.com/easeljs">EaseJS</a> through GSAP's <a href="https://greensock.com/easelplugin/">EaselJSPlugin</a>.</p>
            </div>
        </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span7 ipsType_right">
                <h2 className="heading_large gs-reveal"><strong>Award winning</strong> websites</h2>
                <p className="gs-reveal">GSAP is used on over 8,500,000 sites and over 1,000 sites featured on <a href="https://www.awwwards.com/websites/gsap-animation/" target="_blank">Awwwards</a>. For some of our favorites, check out .</p>
            </div>

            <div className="featured-image-container ipsGrid_span5 gs-reveal gs-reveal_fromRight">
                <div className="card">
                    <img width="479" src="https://picsum.photos/479/479?index=4" alt=""/>
                </div>
            </div>
        </div>

        </div>

    </div>
</div>
    )
};

export default ContactPage;