import { Box, ChakraProps } from "@chakra-ui/react";
import RedLinesEffect from '../../../public/svg/lines-effect-red.svg';
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);
import ScrollTrigger from "gsap/dist/ScrollTrigger";

interface  RedLineAnimationProps extends ChakraProps{

}

export function RedLineAnimation({...rest}: RedLineAnimationProps){
    const animationRedRef = useRef<HTMLDivElement>(null);

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {

            if(animationRedRef){
                const svgLines = animationRedRef.current?.getElementsByClassName("lines-effect-red_svg__line");
                const svgDots = animationRedRef.current?.getElementsByClassName("lines-effect-red_svg__dot");

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
                    .fromTo(svgDots[1],{
                        autoAlpha: 0
                    }, {
                        autoAlpha: 1,
                        duration: .1,
                    },"-=.3") 
                    .fromTo(".lines-effect-red_svg__linesEffect",{
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
                    .fromTo(svgDots[0],{
                        autoAlpha: 0,
                    }, {
                        autoAlpha: 1,
                        duration: .1,
                    }, "-=.3")
                    .fromTo(".lines-effect-red_svg__linesEffect",{
                        autoAlpha: 1,
                    }, {
                        autoAlpha: 1,
                        duration: .5,
                    })
                }
            }
        });
          
        return () => ctx.revert();
    }, [loaded, setLoaded])

    return(
        <Box zIndex={2} key="" className="redlineAnimation" ref={animationRedRef} position={"absolute"} top={["12","16","16"]} w={["300px","300px","380px","450px","600px"]} {...rest}>
            <RedLinesEffect/>
        </Box>
    )
}