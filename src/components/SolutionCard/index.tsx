import { Box, Heading, Img, Stack, Text, VStack, Link } from "@chakra-ui/react";
import Image from "next/image";
// import Link from "next/link";

interface SolutionCardProps{
    name: string;
    photo: string;
    description: string;
    link?: string;
}

export function SolutionCard({name, photo, description, link}: SolutionCardProps){
    return(
        <Link href={link && `/${link}`}>
            <Stack minW={"300px"} role="group" borderRadius={7} overflow={"hidden"} boxShadow={"0px 10px 34px -21px rgba(0,0,0,0.1);"}>
                <Stack position={"relative"}>
                    <Box w="100%" h="100%" pos="absolute" bg="linear-gradient(180deg, rgba(0,0,2,0) 41%, rgba(156,30,32,1) 100%)" bottom="0"/>
                    {/* <Img loading="lazy" h={"420px"} src={photo} /> */}
                    <Image width={0} height={0} sizes="100vw" src={photo} style={{ width: '100%', height: '420px' }} alt={name} />
                    
                    <Box _groupHover={{opacity: 1}} transition={"all ease .7s"} w="100%" h="100%" pos="absolute" bg="linear-gradient(1deg, #9C1E20 -2.84%, rgba(95, 18, 20, 0.61) 94.72%, rgba(76, 15, 16, 0.49) 96.33%, rgba(51, 10, 11, 0.33) 98.84%, rgba(0, 0, 0, 0.00) 102.36%, rgba(64, 12, 13, 0.41) 102.36%);" 
                    bottom="0" zIndex={1} opacity={0}/>

                    <Heading top="25" px="6" zIndex={1} pos="absolute" color={"white"} fontSize="26px">{name}</Heading>

                    <Text fontSize={"16px"} _groupHover={{opacity: 1, transform: "translateY(0)"}} transition={"all ease .7s"} opacity={0} transform={"translateY(50px)"} zIndex={1}  textAlign={"left"} pos="absolute" bottom="25" px="6" color={"white"}>{description}</Text>
                </Stack>

                {/* <VStack bg="#ffffff" paddingX={"10px"} paddingY={"20px"} spacing={"8"}>
                    <Heading color={"gray.dark"} fontSize="26px">{name}</Heading>
                </VStack> */}
            </Stack>
        </Link>
    )
}