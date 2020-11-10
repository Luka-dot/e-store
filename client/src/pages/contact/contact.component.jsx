import React, { useEffect, useRef } from "react";

import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger'

import "./contact.styles.scss";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {

    const animateFrom = (elem, direction) => {
        direction = direction | 1;
        
        var x = 0,
            y = direction * 100;
        if(elem.classList.contains("gs_reveal_fromLeft")) {
          x = -140;
          y = 0;
        } else if(elem.classList.contains("gs_reveal_fromRight")) {
          x = 140;
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
    //    gsap.registerPlugin(ScrollTrigger);
        
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

      useEffect(() => {
        gsap.fromTo('#greatOutdoors', 
        { color: "darkolivegreen"}, 
        {color: "#1f6a14", duration: 4, repeat: -1}, 4);
      }, []);

    return (
<div className="container">
    <div className="cInnerContent">
        <h1 className="header-section gs-reveal ipsType_center">We are pasionate about exploring <a id="greatOutdoors">great outdoors</a>.</h1>

        <div className="features">
            <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
                <div className="featured-image-container ipsGrid_span5 gs-reveal gs-reveal_fromLeft">
                    <div className="card">
                        <img src="https://picsum.photos/id/177/479/479" alt=""/>
                    </div>
                </div>

                <div className="ipsGrid_span7 ipsType_left">
                    <h2 className="heading_large gs-reveal">Find amazing <strong>places</strong> to explore</h2>
                    <p className="gs-reveal">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
        </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span7 ipsType_right">
                <h2 className="heading_large gs-reveal">Helping people get to enjoy nature exploration</h2>
                <p className="gs-reveal">Sed vulputate odio ut enim blandit volutpat maecenas volutpat. Aliquam ultrices sagittis orci a scelerisque. Pretium fusce id velit ut tortor pretium viverra suspendisse. Felis imperdiet proin fermentum leo vel orci. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Molestie at elementum eu facilisis sed. Pulvinar sapien et ligula ullamcorper. Condimentum id venenatis a condimentum. Massa vitae tortor condimentum lacinia. Mauris commodo quis imperdiet massa tincidunt nunc.</p>
            </div>

            <div className="featured-image-container ipsGrid_span5 gs-reveal gs-reveal_fromRight">
                <div className="card">
                    <img width="479" src="https://picsum.photos/id/1036/479/479" alt=""/>
                </div>
            </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="featured-image-container ipsGrid_span5 gs-reveal gs-reveal_fromLeft">
                <div className="card">
                    <img width="479" src="https://picsum.photos/id/252/479/479" alt=""/>
                </div>
            </div>
            

            <div className="ipsGrid_span7 ipsType_left">
                <h2 className="heading_large gs-reveal">Providing best quality products for our customers</h2>
                <p className="gs-reveal">Turpis massa tincidunt dui ut ornare lectus sit amet. Parturient montes nascetur ridiculus mus mauris. At consectetur lorem donec massa sapien faucibus. Vitae congue eu consequat ac felis donec et. Pellentesque adipiscing commodo elit at. Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. </p>
            </div>
        </div>

        <div className="feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone">
            <div className="ipsGrid_span7 ipsType_right">
                <h2 className="heading_large gs-reveal">The best customer service</h2>
                <p className="gs-reveal">Eget magna fermentum iaculis eu non diam. Eros donec ac odio tempor orci dapibus ultrices. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis. Dolor sit amet consectetur adipiscing elit. Mauris a diam maecenas sed enim ut.</p>
            </div>

            <div className="featured-image-container ipsGrid_span5 gs-reveal gs-reveal_fromRight">
                <div className="card">
                    <img width="479" src="https://picsum.photos/id/192/479/479" alt=""/>
                </div>
            </div>
        </div>

        </div>

    </div>
</div>
    )
};

export default ContactPage;