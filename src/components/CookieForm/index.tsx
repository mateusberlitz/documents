import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { TextTag } from "../TextTag";
import { SolidButton } from "../Buttons/SolidButton";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/_Contexts/LanguageContext";
import { OutlineButton } from "../Buttons/OutlineButton";

export function CookieForm(){
    const ref = useRef<HTMLDivElement>(null);
    const [showCookie, setShowCookie] = useState(false); 
    const {isEnglish} = useLanguage();

    const handleAcceptCookies = () => {
        localStorage.setItem('@iteam/cookies', "Aceito");
        setShowCookie(false);

        if(ref.current != null){
            ref.current.classList.add("active")
        }
    }

    const handleRejectCookies = () => {
        localStorage.setItem('@iteam/cookies', "Rejeito");
        setShowCookie(false);

        if(ref.current != null){
            ref.current.classList.add("active")
        }
    }

    useEffect(() => {
        const hasAccepted = localStorage.getItem('@iteam/cookies');

        setShowCookie(!hasAccepted);
    }, [])

    return (
        //className={`cookies ${showCookie && "active"}`}
        <Flex className={`cookies ${showCookie && "active"}`} ref={ref} w="100%" pos="fixed" zIndex={999999} bottom="0">
            <Stack color="white" px="6" py="5" w="100%" maxW="1200px" m="0 auto" spacing="0">
                <Stack w="100%" spacing={"7"} bg="black" px="6" py="5" direction={["column","column","row","row"]} alignItems={"center"}> 
                {/* bg="linear-gradient(180deg, rgba(0, 0, 0, 0.55) 0%, #000 100%)" */}
                    <Stack>
                        {/* <TextTag>COOKIES</TextTag> */}
                        <Heading fontSize={["md","lg","xl","xl"]}>{isEnglish ? "This website uses cookies" : "Esse site utiliza cookies"}</Heading>
                        <Text fontSize={["11px","sm","sm","sm"]}>{isEnglish ? "We temporarily store data to improve your browsing experience and recommend content of interest to you. By using our services you agree to such monitoring." : "Nós armazenamos dados temporariamente para melhorar a sua experiência de navegação e recomendar conteúdo de seu interesse. Ao utilizar nosso serviços você concorda com tal monitoramento."}</Text>
                    </Stack>

                    <Stack direction={["column","column","row","row"]} w={["100%","100%","auto","auto"]} spacing="4">
                        <OutlineButton onClick={() => handleRejectCookies()} size={"sm"} h="36px" w={["100%","100%","180px","180px"]} color="white">Rejeitar</OutlineButton>
                        <SolidButton onClick={() => handleAcceptCookies()} size={"sm"} h="36px" w={["100%","100%","180px","180px"]} color="white">Aceitar</SolidButton>
                    </Stack>
                </Stack>
            </Stack>
        </Flex>
    )
}