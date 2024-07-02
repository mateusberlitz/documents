import { Box, Flex, HStack, Img } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useState } from "react";
import LogoIt from '../../../public/svg/it.svg';
import LogoEam from '../../../public/svg/eam.svg';
import { api } from "@/services/api";

export function Loading(){
    const [firstAccess, setFirstAccess] = useState(true);

    useEffect(() => {
        const loadTimeline = gsap.timeline({
            onComplete: () => changeFirstAccess()
        });

        const ctx = gsap.context(() => {
            loadTimeline
            // .fromTo("#it", { 
            //     autoAlpha: 0,
            //     duration: 1.2,
            // },{ 
            //     autoAlpha: 1,
            //     duration: 1.2,
            // })
            // .fromTo("#eam", { 
            //     autoAlpha: 0,
            //     x: -20,
            //     duration: 1.2,
            // },{ 
            //     autoAlpha: 1,
            //     x: 0,
            //     duration: 1.2,
            // })
            .to("#loadingLogo", { 
                autoAlpha: 1,
                duration: 2.4
            })
            .to("#loading", { 
                autoAlpha: 1,
                duration: 2.4
            })
            .to("#loadingLogo", { 
                autoAlpha: 0,
                duration: 1.4
            })
            .to("#loading", { 
                autoAlpha: 0,
                duration: 1.6
            });
        });
    }, [])

    //linear-gradient(107deg, #B70F19 8.15%, #720000 77.14%)

    useEffect(() => {
        
        const firstAccess = localStorage.getItem('@iteam/first-access');

        if(firstAccess !== null){
            setFirstAccess(false);
        }
    }, []);

    const changeFirstAccess = () => {
        api.post('first');
    }

    return (
        <Flex id="loading" pos="fixed" bg="#fbfbfb" left="0" top="0" bottom="0" right="0" zIndex={9999999999999} justifyContent="center" alignItems={"center"}>
            <Flex pos="relative" width={"fit-content"} height="fit-content" id="loadingLogo">
                {/* <Flex id="loadingLogo" maxW="200px">
                    <Box id="it" mt="-30px" zIndex={2} opacity="0"><LogoIt/></Box>
                    <Box id="eam" ml="-7px" opacity="0"><LogoEam/></Box>
                </Flex> */}
                <Img maxW="400px" src="./logo-animation-english.gif"/>
            </Flex>
        </Flex>
    )
}