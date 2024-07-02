import { Button, Drawer, DrawerCloseButton, DrawerContent, DrawerOverlay, Flex, HStack, Icon, Img, Link, Stack, Text, useBreakpointValue, useDisclosure } from "@chakra-ui/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

import Logo from '../../../public/svg/Logo.svg';
import LogoIngles from '../../../public/svg/logo-english.svg';

import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { OutlineButton } from "../Buttons/OutlineButton";
import { HeaderLink } from "./HeaderLink";
import { HeaderLinkList } from "./HeaderLinkList";
import { Menu } from "react-feather";
import { isEnglish } from "@/utils/language";
import { useLanguage } from "@/_Contexts/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

interface HeaderProps{
    whiteVersion?: boolean
    whitePageVersion?: boolean
}

export function Header({whiteVersion, whitePageVersion}: HeaderProps){
    const navRef = useRef(null);

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true,
    });

    const isMobile = useBreakpointValue({
        base: true,
        sm: false,
    });

    const { isOpen, onOpen, onClose } = useDisclosure();

    const { isEnglish } = useLanguage();

    useEffect(() => {
        // const attach = gsap.fromTo(navRef.current, { 
        //     backgroundColor: "blue.primary" ,
        //     position: "relative",
        //     duration: 1,
        //     top: "0"
        // },{ 
        //     position: "fixed",
        //     top: "10px",
        //     duration: 1,
        //     background: "blue.primary",
        //     backdropFilter: "blur(30px)",
        // });

        const ctx = gsap.context(() => {

            const headerTimeline = gsap.timeline({
                //paused: true,
                immediateRender: true,
                scrollTrigger: {
                    trigger: "body",
                    start: "128px 127px",
                    end: "top",
                    scrub: true
                }
            });

            headerTimeline
            .fromTo(navRef.current, { 
                    backgroundColor: "blue.primary",
                    position: "relative",
                    duration: 500,
                    //top: "0"
                },{ 
                    position: "fixed",
                    //top: "0px",
                    duration: 500,
                    background: "#ffffff",
                    //backdropFilter: "blur(30px)",
                    height: "110px",
                    //transition: "all ease 0.5s",
            }).to("#logo", { 
                width: "140px" ,
                duration: 1,
            })

            // ScrollTrigger.create({
            //     trigger: "body",
            //     start: "120px 100px",
            //     end: "top 0",
            //     scrub: true,
            //     animation: attach
            // });
        });
          
        return () => ctx.revert();
    }, [])
    
    return(
        <Stack backgroundColor={"#ffffff"} as="nav" alignItems="center" pos="relative" zIndex={99} top="0" w="100%" left="0" h="110px" paddingY={"0px"} m="0" transition="0.4s" justifyContent={"flex-start"}>
             {/* bg="rgb(8,5,16,0.7)" backdropFilter="blur(40px)" */}
            <Stack boxShadow={"xl"} ref={navRef} bg={"transparent"} zIndex={99999} w="100%" m="0 auto" py="0" justifyContent={"center"} h="110px" alignItems="center" spacing="0"> 
            {/* pos="fixed" top="12px" bg="rgba(0,0,0,0.4)" backdropFilter={"blur(40px)"} */}

                {/* <Stack w="100%"> */}
                    <HStack justify="space-between" px="6" maxW="none" w="100%">
                        <Flex id="logo" w={"100%"} maxW={"140px"}>
                            <Link href="/">
                                {
                                    isEnglish ? <LogoIngles/> : <Logo/>
                                }
                            </Link>
                        </Flex>

                        {
                            isWideVersion ? (
                                <HeaderLinkList whiteVersion={whiteVersion}/>
                            ) : (
                                <>
                                    <Button borderRadius={"7px"} bg={"white"} onClick={onOpen} padding="4" _hover={{bg:"rgba(255,255,255,0.2)"}} _focus={{bg:"rgba(255,255,255,0.2)"}}>
                                        <Text mr="3" color="#51534A">Menu</Text>
                                        <Icon as={Menu} color="#51534A" w="26px" h="26px" fill="white"/>
                                    </Button>
                                    <Drawer isOpen={isOpen} placement='right' onClose={onClose} //finalFocusRef={btnRef}
                                    >
                                        <DrawerOverlay />
                                        <DrawerContent pt={"50px"} px="7" pr="16" bg="gradient" color="white">
                                            <DrawerCloseButton fontSize="16px" top="12" right="4"/>
                                            <HeaderLinkList whiteVersion={true}/>
                                        </DrawerContent>
                                    </Drawer>
                                </>
                            )
                        }
                    </HStack>
                {/* </Stack> */}
            </Stack>
        </Stack>
    )
}