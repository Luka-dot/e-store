import React from "react";

import "./contact.styles.scss";

const ContactPage = () => {

    return (
<div>
    <div className="cInnerContent">
        <h1 className="header-section gs_reveal ipsType_center">We are pasionate about exploring great outdoors</h1>

        <div className="features">
            <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                    <div className="card">
                        <img width="479" src="https://picsum.photos/479/479?index=1" alt=""/>
                    </div>
                </div>

                <div className="ipsGrid_span7 ipsType_left">
                    <h2 className="heading_large gs_reveal">Find amazing <strong>places</strong> to explore</h2>
                    <p className="gs_reveal"><a href="https://greensock.com/drawsvg/">DrawSVGPlugin</a> allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. <a href="https://greensock.com/morphsvg/">MorphSVGPlugin</a> to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. <a href="/docs/v3/Plugins/MotionPathPlugin">MotionPathPlugin</a> allows you to easily move any object along a path.</p>
                </div>
            </div>
        </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span7 ipsType_right">
                <h2 className="heading_large gs_reveal">Supercharge immersive <strong>WebGL</strong> experiences</h2>
                <p className="gs_reveal">GreenSock is used in some of the most popular <a href="//threejs.org/">Three.js</a> powered WebGL projects. Animate any object in a scene. <a href="https://greensock.com/PixiPlugin/">PixiPlugin</a> makes animating <a href="//www.pixijs.com/">Pixi.js</a> objects with GSAP a breeze. Animate position, scale, color effects and more with all the power and control of GSAP and the rendering speed of Pixi.js.</p>
            </div>

            <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
                <div className="card">
                    <img width="479" src="https://picsum.photos/479/479?index=2" alt=""/>
                </div>
            </div>

        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div class="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
                <div class="card">
                    <img width="479" src="https://picsum.photos/479/479?index=3" alt=""/>
                </div>
            </div>
            

            <div className="ipsGrid_span7 ipsType_left">
                <h2 className="heading_large gs_reveal">Control performant <strong>Canvas</strong> animations</h2>
                <p className="gs_reveal">GSAP makes animating with Canvas even easier by providing an easier way to look and sequence animations. GSAP works great with <a href="//www.adobe.com/products/animate.html">Adobe Animate</a> and <a href="//createjs.com/easeljs">EaseJS</a> through GSAP's <a href="https://greensock.com/easelplugin/">EaselJSPlugin</a>.</p>
            </div>
        </div>

        <div class="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div class="ipsGrid_span7 ipsType_right">
                <h2 class="heading_large gs_reveal"><strong>Award winning</strong> websites</h2>
                <p class="gs_reveal">GSAP is used on over 8,500,000 sites and over 1,000 sites featured on <a href="https://www.awwwards.com/websites/gsap-animation/" target="_blank">Awwwards</a>. For some of our favorites, check out <a href="https://greensock.com/showcase/">our showcase</a>.</p>
            </div>

            <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight">
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

/*

<div className="cInnerContent">
  <h1 className="header-section gs_reveal ipsType_center">Scroll down and up to see different reveal animations</h1>
  
  <div className="features"> **********************

    <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">


      <div className="featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft">
        <div className="card">
          <img width="479" src="https://picsum.photos/479/479?index=1" alt="">
        </div>
      </div>

      <div className="ipsGrid_span7 ipsType_left">
        <h2 className="heading_large gs_reveal">Create amazing <strong>SVG</strong> animations</h2>
        <p className="gs_reveal"><a href="https://greensock.com/drawsvg/">DrawSVGPlugin</a> allows you to progressively reveal (or hide) SVG strokes to make them look like they're being drawn. <a href="https://greensock.com/morphsvg/">MorphSVGPlugin</a> to Morph any SVG shape into any other shape smoothly regardless of the number of points in each. <a href="/docs/v3/Plugins/MotionPathPlugin">MotionPathPlugin</a> allows you to easily move any object along a path.</p>
      </div>
    </div>
***************************************************************************************************************************

    

    

  </div>

</div>
        </div>
        </div></div></div>


*/