import { Flex, HStack, Icon, Img, Link, Stack, Text } from "@chakra-ui/react";

import { Facebook, Instagram, Mail, Twitter } from 'react-feather';
import Whatsapp from '../../../public/whatsapp.svg';
import { socialShareLink } from "../../utils/SocialShareLinks";
import { useLanguage } from "@/_Contexts/LanguageContext";

interface ShareLinkProps{
    url: string;
}

export function ShareLinks({url}: ShareLinkProps){
    const {isEnglish} = useLanguage();

    return (
        // <Stack px="0" py="1" spacing="4">
        //     <Text color="blue.primary">Compartilhe:</Text>

        //     <HStack spacing="5">
        //         <Link target="_blank" href={`${socialShareLink.whatsapp.shareUrl}${url}`}>
        //             <Icon as={Whatsapp} fill="#444" w="23px" h="23px" strokeWidth="2"/>
        //         </Link>

        //         <Link target="_blank" href={`${socialShareLink.facebook.shareUrl}${url}`}>
        //             <Icon as={Facebook} stroke="#D69766" fill="none" w="23px" h="23px" strokeWidth="2"/>
        //         </Link>

        //         {/* <Link target="_blank" href={`${socialShareLink.instagram.shareUrl}${url}`}>
        //             <Icon as={Instagram} stroke="#D69766" fill="none" w="23px" h="23px" strokeWidth="2"/>
        //         </Link> */}

        //         {/* <Link target="_blank" href={`${socialShareLink.twitter.shareUrl}${url}`}>
        //             <Icon as={Mail} stroke="#D69766" fill="none" w="23px" h="23px" strokeWidth="2"/>
        //         </Link> */}
        //     </HStack>
        // </Stack>

        <Stack justifyContent={"space-between"} direction={["column", "column", "row", "row", "row"]}>
            <Text color={"redmain"} fontSize={"20px"}>{isEnglish ? "Share with your friends" : "Compartilhe com seus amigos"}</Text>

            <HStack spacing={"7"}>
                {/* <Link href={`${socialShareLink.instagram.shareUrl}${url}`} >
                    <Img opacity={0.6} src='./svg/instagramIcon.svg' _hover={{opacity: 1}} transition={"all ease .5s"}/>
                </Link> */}

                <Link href={`${socialShareLink.facebook.shareUrl}${url}`}>
                    <Img opacity={0.6} src='./svg/facebookIcon.svg' _hover={{opacity: 1}} transition={"all ease .5s"}/>
                </Link>

                <Flex cursor={"pointer"} onClick={(event) => {navigator.clipboard.writeText(url);}}>
                    {/* <Text>{}</Text> */}
                    <Img opacity={0.6} src='./svg/linkIcon.svg' _hover={{opacity: 1}} transition={"all ease .5s"}/>
                </Flex>

                <Link href={`${socialShareLink.whatsapp.shareUrl}${url}`}>
                    <Img opacity={0.6} src='./svg/whatsappIcon.svg' _hover={{opacity: 1}} transition={"all ease .5s"}/>
                </Link>
            </HStack>
        </Stack>
    )
}