import { Box, ChakraProps } from "@chakra-ui/react";
import WhiteLinesEffect from '../../../public/svg/lines-effect-white.svg';
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface  WhiteLineAnimationProps extends ChakraProps{

}

export function WhiteLineAnimation({...rest}: WhiteLineAnimationProps){
    const animationRef = useRef<HTMLDivElement>(null);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {

            if(animationRef){
                const svgLines = animationRef.current?.getElementsByClassName("lines-effect-white_svg__line");
                const svgDots = animationRef.current?.getElementsByClassName("lines-effect-white_svg__dot");

                if(svgLines && svgDots){
                    const firstlinesTimeline = gsap.timeline({
                        immediateRender: true,
                        repeat: -1,
                        yoyo: true,
                        delay: .5
                    });

                    const secondlinesTimeline = gsap.timeline({
                        immediateRender: true,
                        repeat: -1,
                        yoyo: true,
                    });

                    firstlinesTimeline
                    .fromTo(svgLines[0],{
                        strokeDashoffset: 700,
                    }, {
                        strokeDashoffset: 0,
                        duration: 1,
                    }) 
                    .fromTo(svgDots[0],{
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .1,
                    },">-.3") 
                    .fromTo(".lines-effect-white_svg__linesEffect", {
                        autoAlpha: 1,
                    }, {
                        autoAlpha: 1,
                        duration: .5,
                    })
                    
                    secondlinesTimeline
                    .fromTo(svgLines[1],{
                        strokeDashoffset: 700,
                    }, {
                        strokeDashoffset: 0,
                        duration: 1
                    }) 
                    .fromTo(svgDots[1],{
                        autoAlpha: 0,
                    }, {
                        autoAlpha: 1,
                        duration: .1,
                    },">-.3")
                    .fromTo(".lines-effect-white_svg__linesEffect",{
                        autoAlpha: 1,
                    }, {
                        autoAlpha: 1,
                        duration: .5,
                    })
                }
            }

            function animateVideoLine() {
                const timeline = gsap.timeline({repeat: 0})
                timeline.fromTo('#expand-container .lines-effect-white_svg__line',{
                    strokeDashoffset: 1000,
                    duration: .9
                }, {
                    strokeDashoffset: 0,
                }) 
                .fromTo('#expand-container .lines-effect-white_svg__dot',{
                    autoAlpha: 0,
                }, {
                    autoAlpha: 1,
                    duration: .3,
                }) 

                return timeline;
            }
        });
          
        return () => ctx.revert();
    }, [loaded, setLoaded])

    return(
        <Box zIndex={2} ref={animationRef} position={"absolute"} top={["12","16","16"]} w={["300px","300px","380px","450px","600px"]} {...rest}>
            <WhiteLinesEffect/>
        </Box>
    )
}