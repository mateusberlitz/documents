import { AspectRatio, Box, Center, ChakraProps, Flex, Heading, Img, Stack, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface HomeCardProps extends ChakraProps{
    post: {
        id: number;
        slug: string;
        category: string;
        title: {
            rendered: string;
        };
        excerpt: {
            rendered: string;
        };
        yoast_head_json: {
            og_image?: [{
                url: string;
            }]
        }
        date: string;
    }
}

export default function HomeCard({post, ...rest}: HomeCardProps){
    useEffect(() => {
        const sections = document.querySelectorAll(".fade");

        function scrollAnimate() {
            sections.forEach(e => {
                let t = e.getBoundingClientRect().top;
                t <= (window.innerHeight || document.documentElement.clientHeight) / 1.4 && e.classList.add("active")
            })
        }

        scrollAnimate()
        window.addEventListener("scroll", scrollAnimate);
    }, []);

    // console.log(html_entity_decode(post.title))

    return(
        
        <VStack className="fade translate" w={["100%", "100%", "25%", "25%"]} boxShadow={"lg"} role='group' bg="white" borderRadius={"10px"} {...rest}>
            <Link href={`/${post.slug}`}>
                <Flex position={"relative"} width={"100%"}>
                    <Box zIndex={1} opacity={"0"} transition="all ease .5s" _groupHover={{opacity: 1}} w="100%" h="100%" pos="absolute" bg="linear-gradient(180deg, rgba(0,0,2,0) 41%, rgba(156,30,32,1) 100%)" bottom="0"/>
                    <Center zIndex={1} opacity={"0"} transition="all ease .5s" _groupHover={{opacity: 1}} pos={"absolute"} w="100%" height={"100%"} color={"white"} fontWeight={"semibold"}>Leia Mais</Center>
                    {/* <Img borderTopRadius={"10px"} w="100%" src='./images/articleCoverHome.jpg' /> */}

                    <AspectRatio w={"100%"} ratio={16/9}>
                        {/* <Img borderTopRadius={"10px"} w="100%" src={post.yoast_head_json.og_image ? post.yoast_head_json.og_image[0].url : './images/articleCoverHome.jpg'} /> */}
                        <Image width={0} height={0} sizes="100vw" src={post.yoast_head_json.og_image ? post.yoast_head_json.og_image[0].url : '/images/articleCoverHome.jpg'} style={{ width: '100%', height: '', borderTopLeftRadius: "10px", borderTopRightRadius: "10px" }} alt={post.title.rendered} />
                    </AspectRatio>
                </Flex>

                <Stack w={"100%"} display={"flex"} padding={"20px"} justifyContent={"left"} alignContent={"left"}>
                    {/* <Text w="fit-content" fontWeight={"bold"} color="redmain" paddingX={"10px"} paddingY={"3px"}  borderRadius={"25px"} border={"solid 1px"} borderColor={"redmain"}>{post.category}</Text> */}
                
                    <Heading fontSize={"20px"} fontWeight={"bold"} color="gray.dark" dangerouslySetInnerHTML={{__html: post.title.rendered}}></Heading>

                    <Text color={"gray.400"} fontSize={"14px"} fontWeight={"regular"}>{new Date(post.date ? post.date : '').toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })}</Text>

                    <Text maxW={"100%"} className="limit-text" fontSize={"14px"} textOverflow={"ellipsis"} overflow={"hidden"} dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} >
                        {/* {post.excerpt.rendered.replaceAll(/<\/?[^>]+(>|$)/gi, "")} */}
                    </Text>
                </Stack>
            </Link>
        </VStack>
    )
}